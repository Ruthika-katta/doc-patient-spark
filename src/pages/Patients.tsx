import { Calendar, FileText, Pill, Clock, Activity, Heart, Upload, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Patients = () => {
  const portalFeatures = [
    {
      icon: Calendar,
      title: "Schedule Appointments",
      description: "Book, reschedule, or cancel appointments online anytime",
      action: "Book Now",
      link: "/appointment",
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Access your complete medical history and test results",
      action: "View Records",
      link: "#",
    },
    {
      icon: Pill,
      title: "Prescriptions",
      description: "Request refills and view your current medications",
      action: "Manage Meds",
      link: "#",
    },
    {
      icon: Clock,
      title: "Appointment History",
      description: "Review past visits and upcoming scheduled appointments",
      action: "View History",
      link: "#",
    },
    {
      icon: Activity,
      title: "Test Results",
      description: "View lab results and diagnostic reports securely",
      action: "Check Results",
      link: "#",
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description: "Monitor your vital signs and health metrics",
      action: "Track Health",
      link: "#",
    },
  ];

  const quickActions = [
    { icon: Upload, label: "Upload Documents", color: "text-primary" },
    { icon: Bell, label: "Notifications", color: "text-secondary" },
    { icon: Calendar, label: "Next Visit", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Patient Portal
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Manage your healthcare journey with our secure and convenient patient portal
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Login to Portal
                </Button>
                <Button variant="medical" size="lg">
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-12 bg-card border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-6 justify-center">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-muted hover:bg-muted/70 transition-colors"
                >
                  <action.icon className={`w-5 h-5 ${action.color}`} />
                  <span className="font-medium text-foreground">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Portal Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your healthcare in one secure place
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portalFeatures.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-gradient-card">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={feature.link}>
                      <Button variant="outline" className="w-full">
                        {feature.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Benefits of Our Patient Portal
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      24/7 Access
                    </CardTitle>
                    <CardDescription>
                      Access your health information anytime, anywhere from any device
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Activity className="w-4 h-4 text-secondary" />
                      </div>
                      Real-Time Updates
                    </CardTitle>
                    <CardDescription>
                      Receive instant notifications about appointments and test results
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      Complete Records
                    </CardTitle>
                    <CardDescription>
                      All your medical records in one secure, organized location
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-secondary" />
                      </div>
                      Better Care
                    </CardTitle>
                    <CardDescription>
                      Improved communication with your healthcare team for better outcomes
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-strong">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Create your patient portal account today and take control of your healthcare
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Create Account
                </Button>
                <Link to="/appointment">
                  <Button variant="medical" size="lg" className="bg-card/10 border-primary-foreground text-primary-foreground hover:bg-card/20">
                    Book First Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Patients;
