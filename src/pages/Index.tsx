import { Calendar, Heart, Stethoscope, Clock, Shield, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-doctor.jpg";
import servicesTech from "@/assets/services-tech.jpg";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Scheduling",
      description: "Book appointments online 24/7 with your preferred doctor",
    },
    {
      icon: Stethoscope,
      title: "Expert Doctors",
      description: "Access to board-certified specialists in all medical fields",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Minimal wait times and efficient care delivery",
    },
    {
      icon: Shield,
      title: "Secure Records",
      description: "Your health data protected with advanced security",
    },
  ];

  const services = [
    {
      title: "Primary Care",
      description: "Comprehensive health services for all ages",
      icon: Heart,
    },
    {
      title: "Telemedicine",
      description: "Virtual consultations from anywhere",
      icon: Users,
    },
    {
      title: "Specialist Care",
      description: "Expert treatment for specific conditions",
      icon: Stethoscope,
    },
  ];

  const stats = [
    { value: "50K+", label: "Patients Served" },
    { value: "200+", label: "Expert Doctors" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-section opacity-50"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Trusted Healthcare Provider</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Health is Our
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Priority</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                  Experience quality healthcare with our team of expert doctors and state-of-the-art facilities. Book your appointment today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/appointment">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Book Appointment <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="medical" size="lg" className="w-full sm:w-auto">
                      Our Services
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-hero border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-primary font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span>4.9/5</span>
                    </div>
                    <p className="text-muted-foreground">from 10k+ patients</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
                <img
                  src={heroImage}
                  alt="Professional healthcare doctor"
                  className="relative rounded-2xl shadow-strong w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-primary-foreground/90">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive healthcare solutions with cutting-edge technology and compassionate care
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-gradient-card">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={servicesTech}
                  alt="Modern healthcare technology"
                  className="rounded-2xl shadow-medium w-full h-auto object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Comprehensive Healthcare Services
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    From routine check-ups to specialized treatments, we offer a full spectrum of medical services
                  </p>
                </div>
                
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <Card key={index} className="border-border hover:shadow-soft transition-all duration-300">
                      <CardHeader className="flex flex-row items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                          <CardDescription>{service.description}</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
                
                <Link to="/services">
                  <Button variant="hero" size="lg">
                    View All Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 lg:p-16 text-center shadow-strong">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust us with their healthcare needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/patients">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Patient Portal
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Doctor Portal
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

export default Index;
