import React, { createContext, useState, useEffect, ReactNode } from 'react';

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
  donorName: string;
  bloodType: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  contact: string;
  city: string;
  lastDonationDate: string;
  availableDate: string;
  status: 'available' | 'donated' | 'scheduled';
  unitsAvailable: number;
}

interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  unitsNeeded: number;
  hospitalId: string;
  urgency: 'critical' | 'urgent' | 'moderate';
  contact: string;
  date: string;
  status: 'pending' | 'fulfilled' | 'cancelled';
}

interface OrganDonation {
  id: string;
  donorName: string;
  organType: 'Heart' | 'Kidney' | 'Liver' | 'Lungs' | 'Pancreas' | 'Cornea';
  donorAge: number;
  bloodType: string;
  hospitalId: string;
  contact: string;
  registrationDate: string;
  status: 'registered' | 'matched' | 'transplanted';
  medicalHistory?: string;
}

interface OrganRequest {
  id: string;
  patientName: string;
  organType: string;
  bloodType: string;
  hospitalId: string;
  urgency: 'critical' | 'urgent' | 'moderate';
  waitingSince: string;
  contact: string;
  status: 'waiting' | 'matched' | 'completed';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'patient' | 'doctor' | 'admin' | null>(null);
  
  const [doctors] = useState<Doctor[]>([
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400',
      speciality: 'Cardiology',
      degree: 'MBBS, MD',
      experience: '12',
      about: 'Expert in cardiovascular diseases with extensive experience in cardiac care.',
      fees: 150,
      address: 'Main Hospital, Floor 3'
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400',
      speciality: 'Neurology',
      degree: 'MBBS, DM',
      experience: '15',
      about: 'Specialized in neurological disorders and brain health.',
      fees: 180,
      address: 'Neuro Center, Floor 2'
    },
    {
      id: '3',
      name: 'Dr. Emily Davis',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400',
      speciality: 'Pediatrics',
      degree: 'MBBS, DCH',
      experience: '10',
      about: 'Passionate about children\'s health and development.',
      fees: 120,
      address: 'Children\'s Wing, Floor 1'
    },
    {
      id: '4',
      name: 'Dr. James Wilson',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400',
      speciality: 'Orthopedics',
      degree: 'MBBS, MS',
      experience: '18',
      about: 'Specialist in bone and joint surgeries.',
      fees: 200,
      address: 'Orthopedic Center, Floor 4'
    },
    {
      id: '5',
      name: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400',
      speciality: 'Dermatology',
      degree: 'MBBS, MD',
      experience: '8',
      about: 'Expert in skin care and cosmetic dermatology.',
      fees: 130,
      address: 'Skin Clinic, Floor 2'
    },
    {
      id: '6',
      name: 'Dr. Robert Brown',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400',
      speciality: 'General Medicine',
      degree: 'MBBS',
      experience: '20',
      about: 'General physician with extensive experience.',
      fees: 100,
      address: 'General OPD, Ground Floor'
    }
  ]);

  const [hospitals] = useState<Hospital[]>([
    {
      id: '1',
      name: 'Square Hospital',
      address: 'Panthapath, Dhaka',
      email: 'square@hospital.com',
      phone: '+880-123-456789'
    },
    {
      id: '2',
      name: 'United Hospital',
      address: 'Gulshan, Dhaka',
      email: 'united@hospital.com',
      phone: '+880-987-654321'
    },
    {
      id: '3',
      name: 'Apollo Hospital',
      address: 'Bashundhara, Dhaka',
      email: 'apollo@hospital.com',
      phone: '+880-555-123456'
    }
  ]);

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      doctorId: '1',
      patientName: 'John Doe',
      date: '2024-10-15',
      time: '10:00 AM',
      status: 'confirmed',
      purpose: 'Regular Checkup',
      contact: '+1234567890'
    }
  ]);

  const [bloodDonations, setBloodDonations] = useState<BloodDonation[]>([
    {
      id: '1',
      donorName: 'Alex Johnson',
      bloodType: 'O+',
      contact: '+1234567890',
      city: 'New York',
      lastDonationDate: '2024-07-15',
      availableDate: '2024-10-15',
      status: 'available',
      unitsAvailable: 1
    },
    {
      id: '2',
      donorName: 'Sarah Williams',
      bloodType: 'A+',
      contact: '+1234567891',
      city: 'Los Angeles',
      lastDonationDate: '2024-06-10',
      availableDate: '2024-09-10',
      status: 'available',
      unitsAvailable: 1
    }
  ]);

  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>([
    {
      id: '1',
      patientName: 'Michael Brown',
      bloodType: 'B+',
      unitsNeeded: 2,
      hospitalId: '1',
      urgency: 'critical',
      contact: '+1234567892',
      date: '2024-10-12',
      status: 'pending'
    }
  ]);

  const [organDonations, setOrganDonations] = useState<OrganDonation[]>([
    {
      id: '1',
      donorName: 'Anonymous Donor',
      organType: 'Kidney',
      donorAge: 35,
      bloodType: 'O+',
      hospitalId: '1',
      contact: 'organ-coordinator@hospital.com',
      registrationDate: '2024-08-20',
      status: 'registered'
    }
  ]);

  const [organRequests, setOrganRequests] = useState<OrganRequest[]>([
    {
      id: '1',
      patientName: 'Robert Davis',
      organType: 'Kidney',
      bloodType: 'O+',
      hospitalId: '2',
      urgency: 'urgent',
      waitingSince: '2024-01-15',
      contact: '+1234567893',
      status: 'waiting'
    }
  ]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
  };

  const addBloodDonation = (donation: BloodDonation) => {
    setBloodDonations(prev => [...prev, donation]);
  };

  const addBloodRequest = (request: BloodRequest) => {
    setBloodRequests(prev => [...prev, request]);
  };

  const addOrganDonation = (donation: OrganDonation) => {
    setOrganDonations(prev => [...prev, donation]);
  };

  const addOrganRequest = (request: OrganRequest) => {
    setOrganRequests(prev => [...prev, request]);
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
