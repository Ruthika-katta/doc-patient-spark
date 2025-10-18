-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'doctor', 'patient');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view own roles"
  ON public.user_roles
  FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create hospitals table
CREATE TABLE public.hospitals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  services TEXT[],
  emergency_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.hospitals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view hospitals"
  ON public.hospitals
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage hospitals"
  ON public.hospitals
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- Create blood_donations table
CREATE TABLE public.blood_donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  donor_name TEXT NOT NULL,
  blood_type TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  available_date DATE NOT NULL,
  units_available INTEGER NOT NULL,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.blood_donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view available blood donations"
  ON public.blood_donations
  FOR SELECT
  USING (status = 'available');

CREATE POLICY "Users can create own blood donations"
  ON public.blood_donations
  FOR INSERT
  WITH CHECK (donor_id = auth.uid());

CREATE POLICY "Users can update own blood donations"
  ON public.blood_donations
  FOR UPDATE
  USING (donor_id = auth.uid());

-- Create blood_requests table
CREATE TABLE public.blood_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  blood_type TEXT NOT NULL,
  units_needed INTEGER NOT NULL,
  hospital_id UUID REFERENCES public.hospitals(id),
  urgency TEXT NOT NULL,
  contact TEXT NOT NULL,
  required_by DATE NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.blood_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active blood requests"
  ON public.blood_requests
  FOR SELECT
  USING (status = 'active');

CREATE POLICY "Authenticated users can create blood requests"
  ON public.blood_requests
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins and doctors can manage blood requests"
  ON public.blood_requests
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'doctor'));

-- Create organ_donations table
CREATE TABLE public.organ_donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  donor_name TEXT NOT NULL,
  organ_type TEXT NOT NULL,
  blood_type TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  age INTEGER NOT NULL,
  status TEXT DEFAULT 'registered',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.organ_donations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view registered organ donations"
  ON public.organ_donations
  FOR SELECT
  USING (status = 'registered');

CREATE POLICY "Users can create own organ donations"
  ON public.organ_donations
  FOR INSERT
  WITH CHECK (donor_id = auth.uid());

CREATE POLICY "Users can update own organ donations"
  ON public.organ_donations
  FOR UPDATE
  USING (donor_id = auth.uid());

-- Create organ_requests table
CREATE TABLE public.organ_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name TEXT NOT NULL,
  organ_type TEXT NOT NULL,
  blood_type TEXT NOT NULL,
  hospital_id UUID REFERENCES public.hospitals(id),
  urgency TEXT NOT NULL,
  contact TEXT NOT NULL,
  age INTEGER NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.organ_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active organ requests"
  ON public.organ_requests
  FOR SELECT
  USING (status = 'active');

CREATE POLICY "Authenticated users can create organ requests"
  ON public.organ_requests
  FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins and doctors can manage organ requests"
  ON public.organ_requests
  FOR ALL
  USING (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'doctor'));

-- Update appointments RLS to allow doctors to view their appointments
DROP POLICY IF EXISTS "Users can view own appointments" ON public.appointments;

CREATE POLICY "Users can view own appointments"
  ON public.appointments
  FOR SELECT
  USING (patient_id = auth.uid() OR doctor_id = auth.uid());

-- Add hospital_id to doctors table
ALTER TABLE public.doctors ADD COLUMN IF NOT EXISTS hospital_id UUID REFERENCES public.hospitals(id);

-- Trigger to auto-assign patient role
CREATE OR REPLACE FUNCTION public.assign_patient_role()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'patient')
  ON CONFLICT (user_id, role) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_profile_created
  AFTER INSERT ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.assign_patient_role();

-- Add updated_at triggers
CREATE TRIGGER update_hospitals_updated_at
  BEFORE UPDATE ON public.hospitals
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blood_requests_updated_at
  BEFORE UPDATE ON public.blood_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_organ_donations_updated_at
  BEFORE UPDATE ON public.organ_donations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_organ_requests_updated_at
  BEFORE UPDATE ON public.organ_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();