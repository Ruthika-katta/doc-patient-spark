import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext";
import { AuthProvider } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Patients from "./pages/Patients";
import Appointment from "./pages/Appointment";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import PatientDashboard from "./pages/PatientDashboard";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import HospitalList from "./pages/HospitalList";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BloodDonation from "./pages/BloodDonation";
import OrganDonation from "./pages/OrganDonation";
import EmergencyResources from "./pages/EmergencyResources";
import Laboratory from "./pages/Laboratory";
import DoctorRegistration from "./pages/DoctorRegistration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppContextProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/appointment/:docId" element={<Appointment />} />
            <Route path="/appointment/new" element={<Appointment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myappointments" element={<MyAppointments />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/hospitals" element={<HospitalList />} />
            <Route path="/blood-donation" element={<BloodDonation />} />
            <Route path="/organ-donation" element={<OrganDonation />} />
            <Route path="/emergency-resources" element={<EmergencyResources />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/doctor-registration" element={<DoctorRegistration />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppContextProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
