import { Star, Calendar, Award, GraduationCap, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years",
      rating: 4.9,
      reviews: 342,
      education: "Harvard Medical School",
      availability: "Mon, Wed, Fri",
      bio: "Specialized in preventive cardiology and heart disease management",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      experience: "12+ years",
      rating: 4.8,
      reviews: 289,
      education: "Johns Hopkins University",
      availability: "Tue, Thu, Sat",
      bio: "Expert in treating neurological disorders and brain injuries",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years",
      rating: 5.0,
      reviews: 456,
      education: "Stanford Medical School",
      availability: "Mon - Fri",
      bio: "Dedicated to providing compassionate care for children",
    },
    {
      name: "Dr. James Williams",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years",
      rating: 4.9,
      reviews: 412,
      education: "Mayo Clinic",
      availability: "Mon, Wed, Thu",
      bio: "Specializing in joint replacement and sports medicine",
    },
    {
      name: "Dr. Lisa Anderson",
      specialty: "Ophthalmologist",
      experience: "14+ years",
      rating: 4.8,
      reviews: 367,
      education: "UCLA Medical Center",
      availability: "Tue - Sat",
      bio: "Expert in LASIK surgery and cataract treatment",
    },
    {
      name: "Dr. David Kumar",
      specialty: "General Physician",
      experience: "20+ years",
      rating: 4.9,
      reviews: 523,
      education: "Columbia University",
      availability: "Mon - Fri",
      bio: "Comprehensive primary care and preventive medicine",
    },
  ];

  const specialties = [
    "All Specialties",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Ophthalmology",
    "General Medicine",
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
                Meet Our Doctors
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Board-certified physicians dedicated to providing exceptional care with years of experience
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {specialties.map((specialty, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                >
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                        {doctor.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-semibold text-primary">{doctor.rating}</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-1">{doctor.name}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary mb-2">
                      {doctor.specialty}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">{doctor.bio}</p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Award className="w-4 h-4 text-primary" />
                        <span>{doctor.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>{doctor.education}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Available: {doctor.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-secondary" />
                        <span>{doctor.reviews} patient reviews</span>
                      </div>
                    </div>
                    
                    <Link to="/appointment">
                      <Button variant="hero" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Appointment
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="py-16 md:py-24 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Are You a Doctor?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join our team of healthcare professionals and make a difference in patients' lives
              </p>
              <Button variant="hero" size="lg">
                Join Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doctors;
