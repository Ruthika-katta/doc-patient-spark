import { Heart, Activity, Brain, Eye, Bone, Baby, Syringe, Pill, Video, FileText, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const medicalServices = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including diagnostics, treatment, and prevention",
      features: ["ECG & Echo", "Cardiac Monitoring", "Preventive Care"],
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert care for brain and nervous system conditions",
      features: ["MRI & CT Scans", "Stroke Care", "Headache Treatment"],
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Treatment for bones, joints, and musculoskeletal issues",
      features: ["Sports Injuries", "Joint Replacement", "Arthritis Care"],
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care from routine exams to surgery",
      features: ["Vision Tests", "Cataract Surgery", "LASIK"],
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents",
      features: ["Vaccinations", "Growth Monitoring", "Sick Visits"],
    },
    {
      icon: Activity,
      title: "General Medicine",
      description: "Primary care for common health issues and wellness",
      features: ["Annual Checkups", "Chronic Disease", "Preventive Care"],
    },
  ];

  const additionalServices = [
    {
      icon: Video,
      title: "Telemedicine",
      description: "Virtual consultations from the comfort of your home",
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Secure digital access to your medical records",
    },
    {
      icon: Syringe,
      title: "Vaccinations",
      description: "Comprehensive immunization services for all ages",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "On-site pharmacy for convenient prescription filling",
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Health screenings and wellness programs",
    },
    {
      icon: Clock,
      title: "Emergency Care",
      description: "24/7 emergency medical services",
    },
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
                Our Medical Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Comprehensive healthcare solutions delivered by experienced professionals with state-of-the-art technology
              </p>
              <Link to="/appointment">
                <Button variant="hero" size="lg">
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Specialty Medical Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert care across multiple specialties with board-certified physicians
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medicalServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-gradient-card">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Additional Healthcare Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Supporting services to enhance your healthcare experience
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-strong">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Need to Schedule a Service?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Our team is ready to provide you with the best healthcare experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/appointment">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="medical" size="lg" className="w-full sm:w-auto bg-card/10 border-primary-foreground text-primary-foreground hover:bg-card/20">
                    Find a Doctor
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

export default Services;
