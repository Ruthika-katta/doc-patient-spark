import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialityMenu from "@/components/SpecialityMenu";
import TopDoctors from "@/components/TopDoctors";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Activity, Shield, Clock, Droplet, Heart, FlaskConical } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Patient Management",
      description: "Comprehensive patient record management and history tracking",
    },
    {
      icon: Activity,
      title: "Doctor Management",
      description: "Detailed doctor profiles with specializations and real-time availability",
    },
    {
      icon: Clock,
      title: "Appointment Scheduling",
      description: "Real-time appointment booking with automated reminders",
    },
    {
      icon: Shield,
      title: "Prescription Management",
      description: "Digital prescription tracking and medication history",
    },
    {
      icon: Droplet,
      title: "Blood Donation",
      description: "Connect donors and patients for life-saving blood transfusions",
      link: "/blood-donation"
    },
    {
      icon: Heart,
      title: "Organ Donation",
      description: "Coordinate organ transplants and save lives through donation",
      link: "/organ-donation"
    },
    {
      icon: FlaskConical,
      title: "Laboratory Services",
      description: "Advanced diagnostic testing with quick and accurate results",
      link: "/laboratory"
    },
  ];

  const stats = [
    { value: "10K+", label: "Active Patients" },
    { value: "100+", label: "Expert Doctors" },
    { value: "50+", label: "Partner Hospitals" },
    { value: "24/7", label: "Emergency Support" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Health Stack
                  <span className="block text-white/90">Unified Healthcare Platform</span>
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Connecting hospitals, doctors, patients, and laboratories in real-time. 
                  Access medical resources, book appointments, and manage your health journey seamlessly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/doctors">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Patient Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Healthcare Professional"
                  className="rounded-2xl shadow-strong"
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Core Modules
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital healthcare platform features
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                feature.link ? (
                  <Link key={index} to={feature.link}>
                    <Card className="hover:shadow-medium transition-all h-full">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                          feature.title === "Blood Donation" ? "bg-red-100 dark:bg-red-950" :
                          feature.title === "Organ Donation" ? "bg-pink-100 dark:bg-pink-950" :
                          feature.title === "Laboratory Services" ? "bg-cyan-100 dark:bg-cyan-950" :
                          "bg-primary/10"
                        }`}>
                          <feature.icon className={`w-6 h-6 ${
                            feature.title === "Blood Donation" ? "text-red-600" :
                            feature.title === "Organ Donation" ? "text-pink-600" :
                            feature.title === "Laboratory Services" ? "text-cyan-600" :
                            "text-primary"
                          }`} />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card key={index} className="hover:shadow-medium transition-all h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              ))}
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
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
                    Patient Portal
                  </Button>
                </Link>
                <Link to="/doctors">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90">
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
