import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  FileText, 
  Pill, 
  Upload, 
  Bell, 
  Activity,
  ClipboardList,
  TestTube,
  LogOut 
} from "lucide-react";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth", { state: { from: { pathname: "/patient-dashboard" } } });
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const dashboardItems = [
    {
      title: "Schedule Appointment",
      description: "Book a new appointment with your doctor",
      icon: Calendar,
      link: "/appointment/new",
      color: "text-blue-500"
    },
    {
      title: "My Appointments",
      description: "View and manage your appointments",
      icon: ClipboardList,
      link: "/myappointments",
      color: "text-green-500"
    },
    {
      title: "Medical Records",
      description: "Access your medical history",
      icon: FileText,
      link: "/myprofile",
      color: "text-purple-500"
    },
    {
      title: "Prescriptions",
      description: "View active and past prescriptions",
      icon: Pill,
      link: "/myprofile",
      color: "text-orange-500"
    },
    {
      title: "Upload Documents",
      description: "Upload medical documents and reports",
      icon: Upload,
      link: "/myprofile",
      color: "text-cyan-500"
    },
    {
      title: "Test Results",
      description: "View your lab test results",
      icon: TestTube,
      link: "/laboratory",
      color: "text-pink-500"
    },
    {
      title: "Health Tracking",
      description: "Track your health metrics",
      icon: Activity,
      link: "/myprofile",
      color: "text-red-500"
    },
    {
      title: "Notifications",
      description: "View important notifications",
      icon: Bell,
      link: "/myprofile",
      color: "text-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-subtle">
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Welcome Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Welcome Back!
                </h1>
                <p className="text-muted-foreground mt-2">
                  {user.email}
                </p>
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardItems.map((item, index) => (
              <Link key={index} to={item.link}>
                <Card className="hover:shadow-elegant transition-shadow duration-300 h-full cursor-pointer group">
                  <CardHeader>
                    <div className={`${item.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  No upcoming appointments
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Active Prescriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  No active prescriptions
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Pending Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  No pending test results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PatientDashboard;