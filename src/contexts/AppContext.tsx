import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';

interface Doctor {
  id: string;
  name: string;
  image: string;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: string;
}

interface Hospital {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  services?: string[];
}


interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  purpose: string;
  contact: string;
}

interface BloodDonation {
  id: string;
  name: string;
  bloodType: string;
  phone: string;
  city: string;
  availableDate: string;
  unitsAvailable: number;
}

interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  hospitalId: string;
  urgency: 'critical' | 'urgent' | 'normal';
  contact: string;
  requiredBy: string;
}

interface OrganDonation {
  id: string;
  name: string;
  organType: string;
  bloodType: string;
  phone: string;
  city: string;
  age: number;
}

interface OrganRequest {
  id: string;
  patientName: string;
  organType: string;
  bloodType: string;
  hospitalId: string;
  urgency: 'critical' | 'urgent' | 'normal';
  contact: string;
  age: number;
}

interface AppContextType {
  doctors: Doctor[];
  hospitals: Hospital[];
  appointments: Appointment[];
  bloodDonations: BloodDonation[];
  bloodRequests: BloodRequest[];
  organDonations: OrganDonation[];
  organRequests: OrganRequest[];
  currencySymbol: string;
  isLoggedIn: boolean;
  userType: 'patient' | 'doctor' | 'admin' | null;
  setIsLoggedIn: (value: boolean) => void;
  setUserType: (value: 'patient' | 'doctor' | 'admin' | null) => void;
  addAppointment: (appointment: Appointment) => void;
  addBloodDonation: (donation: BloodDonation) => void;
  addBloodRequest: (request: BloodRequest) => void;
  addOrganDonation: (donation: OrganDonation) => void;
  addOrganRequest: (request: OrganRequest) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const currencySymbol = "$";
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'patient' | 'doctor' | 'admin' | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [bloodDonations, setBloodDonations] = useState<BloodDonation[]>([]);
  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>([]);
  const [organDonations, setOrganDonations] = useState<OrganDonation[]>([]);
  const [organRequests, setOrganRequests] = useState<OrganRequest[]>([]);

  // Update login status based on auth user
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      // Fetch user role
      const fetchUserRole = async () => {
        const { data } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .maybeSingle();
        
        if (data) {
          setUserType(data.role as 'patient' | 'doctor' | 'admin');
        } else {
          setUserType('patient');
        }
      };
      fetchUserRole();
    } else {
      setIsLoggedIn(false);
      setUserType(null);
    }
  }, [user]);

  // Fetch doctors from Supabase
  useEffect(() => {
    const fetchDoctors = async () => {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .eq('status', 'approved');
      
      if (!error && data) {
        setDoctors(data.map(doc => ({
          id: doc.id,
          name: doc.full_name,
          specialty: doc.specialty,
          speciality: doc.specialty,
          degree: doc.degrees || 'MBBS',
          experience: `${doc.years_experience}`,
          about: doc.bio || '',
          fees: 50,
          address: '',
          image: doc.image_url || 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop'
        })));
      }
    };
    fetchDoctors();
  }, []);

  // Fetch hospitals from Supabase
  useEffect(() => {
    const fetchHospitals = async () => {
      const { data, error } = await supabase
        .from('hospitals')
        .select('*');
      
      if (!error && data) {
        setHospitals(data.map(h => ({
          id: h.id,
          name: h.name,
          address: h.address,
          phone: h.phone,
          email: h.email,
          services: h.services || []
        })));
      }
    };
    fetchHospitals();
  }, []);

  // Fetch blood donations
  useEffect(() => {
    const fetchBloodDonations = async () => {
      const { data, error } = await supabase
        .from('blood_donations')
        .select('*')
        .eq('status', 'available');
      
      if (!error && data) {
        setBloodDonations(data.map(bd => ({
          id: bd.id,
          name: bd.donor_name,
          bloodType: bd.blood_type,
          phone: bd.phone,
          city: bd.city,
          availableDate: bd.available_date,
          unitsAvailable: bd.units_available
        })));
      }
    };
    fetchBloodDonations();
  }, []);

  // Fetch blood requests
  useEffect(() => {
    const fetchBloodRequests = async () => {
      const { data, error } = await supabase
        .from('blood_requests')
        .select('*')
        .eq('status', 'active');
      
      if (!error && data) {
        setBloodRequests(data.map(br => ({
          id: br.id,
          patientName: br.patient_name,
          bloodType: br.blood_type,
          unitsNeeded: br.units_needed,
          hospitalId: br.hospital_id || '',
          urgency: br.urgency as 'critical' | 'urgent' | 'normal',
          contact: br.contact,
          requiredBy: br.required_by
        })));
      }
    };
    fetchBloodRequests();
  }, []);

  // Fetch organ donations
  useEffect(() => {
    const fetchOrganDonations = async () => {
      const { data, error } = await supabase
        .from('organ_donations')
        .select('*')
        .eq('status', 'registered');
      
      if (!error && data) {
        setOrganDonations(data.map(od => ({
          id: od.id,
          name: od.donor_name,
          organType: od.organ_type,
          bloodType: od.blood_type,
          phone: od.phone,
          city: od.city,
          age: od.age
        })));
      }
    };
    fetchOrganDonations();
  }, []);

  // Fetch organ requests
  useEffect(() => {
    const fetchOrganRequests = async () => {
      const { data, error } = await supabase
        .from('organ_requests')
        .select('*')
        .eq('status', 'active');
      
      if (!error && data) {
        setOrganRequests(data.map(or => ({
          id: or.id,
          patientName: or.patient_name,
          organType: or.organ_type,
          bloodType: or.blood_type,
          hospitalId: or.hospital_id || '',
          urgency: or.urgency as 'critical' | 'urgent' | 'normal',
          contact: or.contact,
          age: or.age
        })));
      }
    };
    fetchOrganRequests();
  }, []);

  const addAppointment = async (appointment: Appointment) => {
    const { data, error } = await supabase
      .from('appointments')
      .insert([{
        patient_id: appointment.doctorId, // Will be updated
        doctor_id: appointment.doctorId,
        appointment_date: appointment.date,
        appointment_time: appointment.time,
        purpose: appointment.purpose,
        notes: '',
        status: appointment.status
      }])
      .select()
      .single();
    
    if (!error && data) {
      setAppointments(prev => [...prev, appointment]);
    }
  };

  const addBloodDonation = async (donation: BloodDonation) => {
    if (!user) return;
    
    const { error } = await supabase
      .from('blood_donations')
      .insert([{
        donor_id: user.id,
        donor_name: donation.name,
        blood_type: donation.bloodType,
        phone: donation.phone,
        city: donation.city,
        available_date: donation.availableDate,
        units_available: donation.unitsAvailable
      }]);
    
    if (!error) {
      setBloodDonations(prev => [...prev, donation]);
    }
  };

  const addBloodRequest = async (request: BloodRequest) => {
    const { error } = await supabase
      .from('blood_requests')
      .insert([{
        patient_name: request.patientName,
        blood_type: request.bloodType,
        units_needed: request.unitsNeeded,
        hospital_id: request.hospitalId || null,
        urgency: request.urgency,
        contact: request.contact,
        required_by: request.requiredBy
      }]);
    
    if (!error) {
      setBloodRequests(prev => [...prev, request]);
    }
  };

  const addOrganDonation = async (donation: OrganDonation) => {
    if (!user) return;
    
    const { error } = await supabase
      .from('organ_donations')
      .insert([{
        donor_id: user.id,
        donor_name: donation.name,
        organ_type: donation.organType,
        blood_type: donation.bloodType,
        phone: donation.phone,
        city: donation.city,
        age: donation.age
      }]);
    
    if (!error) {
      setOrganDonations(prev => [...prev, donation]);
    }
  };

  const addOrganRequest = async (request: OrganRequest) => {
    const { error } = await supabase
      .from('organ_requests')
      .insert([{
        patient_name: request.patientName,
        organ_type: request.organType,
        blood_type: request.bloodType,
        hospital_id: request.hospitalId || null,
        urgency: request.urgency,
        contact: request.contact,
        age: request.age
      }]);
    
    if (!error) {
      setOrganRequests(prev => [...prev, request]);
    }
  };

  const value = {
    doctors,
    hospitals,
    appointments,
    bloodDonations,
    bloodRequests,
    organDonations,
    organRequests,
    currencySymbol,
    isLoggedIn,
    userType,
    setIsLoggedIn,
    setUserType,
    addAppointment,
    addBloodDonation,
    addBloodRequest,
    addOrganDonation,
    addOrganRequest
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return context;
};
