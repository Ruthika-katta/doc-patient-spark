import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { FlaskConical, Calendar, CheckCircle, Clock, Award, MapPin, Phone, Mail, Star, Droplet, Activity, Microscope, Dna } from "lucide-react";

const Laboratory = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    patientName: "",
    age: "",
    gender: "",
    testCategory: "",
    testType: "",
    date: "",
    collectionType: "lab-visit",
    labId: "",
  });

  const testCategories = [
    {
      name: "Blood Tests",
      icon: Droplet,
      tests: [
        { name: "Complete Blood Count (CBC)", price: 250, time: "24 hours" },
        { name: "Blood Sugar (Fasting)", price: 150, time: "Same day" },
        { name: "Lipid Profile", price: 450, time: "24 hours" },
        { name: "Thyroid Function Test", price: 550, time: "48 hours" },
        { name: "Liver Function Test", price: 400, time: "24 hours" },
        { name: "Kidney Function Test", price: 400, time: "24 hours" },
      ],
    },
    {
      name: "Imaging",
      icon: Activity,
      tests: [
        { name: "X-Ray", price: 500, time: "Same day" },
        { name: "CT Scan", price: 3500, time: "Same day" },
        { name: "MRI Scan", price: 5500, time: "24 hours" },
        { name: "Ultrasound", price: 800, time: "Same day" },
      ],
    },
    {
      name: "Pathology",
      icon: Microscope,
      tests: [
        { name: "Biopsy", price: 2000, time: "5-7 days" },
        { name: "Histopathology", price: 2500, time: "7 days" },
        { name: "Cytology", price: 1500, time: "3-5 days" },
      ],
    },
    {
      name: "Special Tests",
      icon: Dna,
      tests: [
        { name: "COVID-19 RT-PCR", price: 600, time: "24 hours" },
        { name: "Genetic Testing", price: 8500, time: "2 weeks" },
        { name: "Allergy Panel", price: 3000, time: "3-5 days" },
        { name: "Vitamin D Test", price: 850, time: "48 hours" },
      ],
    },
  ];

  const healthPackages = [
    {
      name: "Basic Health Checkup",
      price: 1500,
      tests: ["CBC", "Blood Sugar", "Lipid Profile", "Kidney Function"],
    },
    {
      name: "Advanced Health Checkup",
      price: 3500,
      tests: ["CBC", "Blood Sugar", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid", "X-Ray"],
    },
    {
      name: "Comprehensive Health Checkup",
      price: 7500,
      tests: ["All blood tests", "ECG", "X-Ray", "Ultrasound", "Thyroid", "Vitamin tests"],
    },
  ];

  const partnerLabs = [
    {
      id: "1",
      name: "MediLab Diagnostics",
      address: "123 Healthcare Ave, Medical District",
      city: "New York",
      phone: "+1 (555) 123-4567",
      email: "info@medilab.com",
      rating: 4.8,
      accreditations: ["ISO 9001", "NABL Certified"],
      homeCollection: true,
    },
    {
      id: "2",
      name: "HealthFirst Laboratory",
      address: "456 Wellness Blvd, Downtown",
      city: "New York",
      phone: "+1 (555) 234-5678",
      email: "care@healthfirstlab.com",
      rating: 4.9,
      accreditations: ["ISO 9001", "CAP Certified"],
      homeCollection: true,
    },
    {
      id: "3",
      name: "Precision Diagnostics Center",
      address: "789 Medical Plaza, Uptown",
      city: "New York",
      phone: "+1 (555) 345-6789",
      email: "support@precisiondiag.com",
      rating: 4.7,
      accreditations: ["ISO 15189", "NABL Certified"],
      homeCollection: false,
    },
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingForm.patientName || !bookingForm.testCategory || !bookingForm.testType || !bookingForm.date || !bookingForm.labId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Test Booked Successfully!",
      description: "You will receive a confirmation email with your booking details.",
    });

    // Reset form
    setBookingForm({
      patientName: "",
      age: "",
      gender: "",
      testCategory: "",
      testType: "",
      date: "",
      collectionType: "lab-visit",
      labId: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-cyan-100 dark:bg-cyan-950">
                <FlaskConical className="w-8 h-8 text-cyan-600" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Laboratory Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Advanced diagnostic testing with quick turnaround and accurate results from certified laboratories
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="tests" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="tests">Available Tests</TabsTrigger>
                <TabsTrigger value="packages">Health Packages</TabsTrigger>
                <TabsTrigger value="book">Book Test</TabsTrigger>
                <TabsTrigger value="labs">Partner Labs</TabsTrigger>
              </TabsList>

              {/* Available Tests */}
              <TabsContent value="tests" className="space-y-8">
                {testCategories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <category.icon className="w-6 h-6 text-cyan-600" />
                      {category.name}
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.tests.map((test, testIdx) => (
                        <Card key={testIdx} className="hover:shadow-medium transition-all">
                          <CardHeader>
                            <CardTitle className="text-lg">{test.name}</CardTitle>
                            <CardDescription className="flex items-center gap-4 text-base">
                              <span className="font-bold text-primary">₹{test.price}</span>
                              <span className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {test.time}
                              </span>
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Health Packages */}
              <TabsContent value="packages">
                <div className="grid md:grid-cols-3 gap-6">
                  {healthPackages.map((pkg, idx) => (
                    <Card key={idx} className="hover:shadow-medium transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <div className="text-3xl font-bold text-primary">₹{pkg.price}</div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">Includes:</p>
                        <ul className="space-y-2">
                          {pkg.tests.map((test, testIdx) => (
                            <li key={testIdx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{test}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">
                          Book Package
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Book Test */}
              <TabsContent value="book">
                <Card className="max-w-3xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl">Book Your Test</CardTitle>
                    <CardDescription>Fill in the details to schedule your laboratory test</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleBooking} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="patientName">Patient Name *</Label>
                          <Input
                            id="patientName"
                            value={bookingForm.patientName}
                            onChange={(e) => setBookingForm({ ...bookingForm, patientName: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            value={bookingForm.age}
                            onChange={(e) => setBookingForm({ ...bookingForm, age: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select 
                          value={bookingForm.gender}
                          onValueChange={(value) => setBookingForm({ ...bookingForm, gender: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="testCategory">Test Category *</Label>
                          <Select 
                            value={bookingForm.testCategory}
                            onValueChange={(value) => setBookingForm({ ...bookingForm, testCategory: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {testCategories.map((cat) => (
                                <SelectItem key={cat.name} value={cat.name}>
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="testType">Test Type *</Label>
                          <Input
                            id="testType"
                            placeholder="e.g., CBC, Blood Sugar"
                            value={bookingForm.testType}
                            onChange={(e) => setBookingForm({ ...bookingForm, testType: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred Date *</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="collectionType">Collection Type *</Label>
                          <Select 
                            value={bookingForm.collectionType}
                            onValueChange={(value) => setBookingForm({ ...bookingForm, collectionType: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lab-visit">Lab Visit</SelectItem>
                              <SelectItem value="home-collection">Home Collection</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="labId">Select Laboratory *</Label>
                        <Select 
                          value={bookingForm.labId}
                          onValueChange={(value) => setBookingForm({ ...bookingForm, labId: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a lab" />
                          </SelectTrigger>
                          <SelectContent>
                            {partnerLabs.map((lab) => (
                              <SelectItem key={lab.id} value={lab.id}>
                                {lab.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700" size="lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book Test
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Partner Labs */}
              <TabsContent value="labs">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {partnerLabs.map((lab) => (
                    <Card key={lab.id} className="hover:shadow-medium transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{lab.name}</CardTitle>
                          <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span className="text-sm font-semibold text-primary">{lab.rating}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {lab.accreditations.map((acc, idx) => (
                            <Badge key={idx} variant="secondary" className="flex items-center gap-1">
                              <Award className="w-3 h-3" />
                              {acc}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{lab.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <span>{lab.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <span>{lab.email}</span>
                        </div>
                        {lab.homeCollection && (
                          <Badge className="bg-cyan-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Home Collection Available
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Laboratory;