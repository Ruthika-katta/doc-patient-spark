import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import RequestCard from "@/components/RequestCard";
import { useAppContext } from "@/contexts/AppContext";
import { Heart, Users, Award, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const organTypes = ['Heart', 'Kidney', 'Liver', 'Lungs', 'Pancreas', 'Cornea'];

const OrganDonation = () => {
  const { organDonations, organRequests, hospitals, addOrganDonation, addOrganRequest } = useAppContext();
  const { toast } = useToast();

  const [donorForm, setDonorForm] = useState({
    donorName: '',
    organType: '',
    donorAge: '',
    bloodType: '',
    hospitalId: '',
    contact: '',
    medicalHistory: ''
  });

  const [requestForm, setRequestForm] = useState({
    patientName: '',
    organType: '',
    bloodType: '',
    hospitalId: '',
    urgency: 'moderate' as 'critical' | 'urgent' | 'moderate',
    contact: ''
  });

  const handleDonorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDonor = {
      id: Date.now().toString(),
      donorName: donorForm.donorName,
      organType: donorForm.organType as any,
      donorAge: parseInt(donorForm.donorAge),
      bloodType: donorForm.bloodType,
      hospitalId: donorForm.hospitalId,
      contact: donorForm.contact,
      registrationDate: new Date().toISOString(),
      status: 'registered' as const,
      medicalHistory: donorForm.medicalHistory
    };
    addOrganDonation(newDonor);
    toast({
      title: "Registration Successful!",
      description: "Thank you for pledging to be an organ donor. You're giving the gift of life!",
    });
    setDonorForm({
      donorName: '',
      organType: '',
      donorAge: '',
      bloodType: '',
      hospitalId: '',
      contact: '',
      medicalHistory: ''
    });
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now().toString(),
      ...requestForm,
      waitingSince: new Date().toISOString(),
      status: 'waiting' as const
    };
    addOrganRequest(newRequest);
    toast({
      title: "Request Submitted!",
      description: "Your organ request has been submitted to the transplant network.",
    });
    setRequestForm({
      patientName: '',
      organType: '',
      bloodType: '',
      hospitalId: '',
      urgency: 'moderate',
      contact: ''
    });
  };

  const stats = [
    { icon: Users, label: "Registered Donors", value: organDonations.length },
    { icon: Heart, label: "Transplants", value: "450+" },
    { icon: TrendingUp, label: "Success Rate", value: "92%" },
    { icon: Award, label: "Active Requests", value: organRequests.length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Organ Donation Portal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              One organ donor can save up to eight lives and enhance dozens more. Register today and become a hero.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="register" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="register">Register as Donor</TabsTrigger>
              <TabsTrigger value="request">Request Organ</TabsTrigger>
            </TabsList>

            <TabsContent value="register">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Organ Donor Registration</CardTitle>
                    <CardDescription>
                      Register your intent to donate organs after death or as a living donor. All information is confidential.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleDonorSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="donorName">Full Name *</Label>
                        <Input
                          id="donorName"
                          value={donorForm.donorName}
                          onChange={(e) => setDonorForm({ ...donorForm, donorName: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="organType">Organ to Donate *</Label>
                        <select
                          id="organType"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={donorForm.organType}
                          onChange={(e) => setDonorForm({ ...donorForm, organType: e.target.value })}
                          required
                        >
                          <option value="">Select Organ</option>
                          {organTypes.map(organ => (
                            <option key={organ} value={organ}>{organ}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          min="18"
                          max="70"
                          value={donorForm.donorAge}
                          onChange={(e) => setDonorForm({ ...donorForm, donorAge: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="bloodType">Blood Type *</Label>
                        <Input
                          id="bloodType"
                          placeholder="e.g., A+, O-, AB+"
                          value={donorForm.bloodType}
                          onChange={(e) => setDonorForm({ ...donorForm, bloodType: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="hospital">Affiliated Hospital *</Label>
                        <select
                          id="hospital"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={donorForm.hospitalId}
                          onChange={(e) => setDonorForm({ ...donorForm, hospitalId: e.target.value })}
                          required
                        >
                          <option value="">Select Hospital</option>
                          {hospitals.map(hospital => (
                            <option key={hospital.id} value={hospital.id}>
                              {hospital.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="contact">Contact Number *</Label>
                        <Input
                          id="contact"
                          type="tel"
                          value={donorForm.contact}
                          onChange={(e) => setDonorForm({ ...donorForm, contact: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="medicalHistory">Medical History (Optional)</Label>
                        <Textarea
                          id="medicalHistory"
                          placeholder="Any relevant medical conditions or history"
                          value={donorForm.medicalHistory}
                          onChange={(e) => setDonorForm({ ...donorForm, medicalHistory: e.target.value })}
                          rows={3}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                        Register as Organ Donor
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Organs You Can Donate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold">Living Donation:</h4>
                          <p className="text-sm text-muted-foreground">Kidney, Liver (partial), Lung (lobe)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">After Death:</h4>
                          <p className="text-sm text-muted-foreground">Heart, Kidneys, Liver, Lungs, Pancreas, Intestines</p>
                        </div>
                        <div>
                          <h4 className="font-semibold">Tissues:</h4>
                          <p className="text-sm text-muted-foreground">Corneas, Skin, Bone, Heart valves</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Eligibility Criteria</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p>• Must be 18+ years old (or with parental consent)</p>
                      <p>• Be in good physical health</p>
                      <p>• Free from transmissible diseases</p>
                      <p>• Medical evaluation required</p>
                      <p>• Psychological assessment for living donors</p>
                      <p>• No active cancer (some exceptions)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Why Donate?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p>• Save up to 8 lives with one donation</p>
                      <p>• Enhance 75+ lives through tissue donation</p>
                      <p>• Give hope to families in need</p>
                      <p>• Leave a lasting legacy</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="request">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Organ Transplant</CardTitle>
                    <CardDescription>
                      Submit your organ transplant requirement. Our transplant coordinators will work to find a match.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleRequestSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="patientName">Patient Name *</Label>
                        <Input
                          id="patientName"
                          value={requestForm.patientName}
                          onChange={(e) => setRequestForm({ ...requestForm, patientName: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="requestOrgan">Organ Needed *</Label>
                        <select
                          id="requestOrgan"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={requestForm.organType}
                          onChange={(e) => setRequestForm({ ...requestForm, organType: e.target.value })}
                          required
                        >
                          <option value="">Select Organ</option>
                          {organTypes.map(organ => (
                            <option key={organ} value={organ}>{organ}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="requestBloodType">Patient Blood Type *</Label>
                        <Input
                          id="requestBloodType"
                          placeholder="e.g., A+, O-, AB+"
                          value={requestForm.bloodType}
                          onChange={(e) => setRequestForm({ ...requestForm, bloodType: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="requestHospital">Hospital *</Label>
                        <select
                          id="requestHospital"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={requestForm.hospitalId}
                          onChange={(e) => setRequestForm({ ...requestForm, hospitalId: e.target.value })}
                          required
                        >
                          <option value="">Select Hospital</option>
                          {hospitals.map(hospital => (
                            <option key={hospital.id} value={hospital.id}>
                              {hospital.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="urgency">Medical Urgency *</Label>
                        <select
                          id="urgency"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={requestForm.urgency}
                          onChange={(e) => setRequestForm({ ...requestForm, urgency: e.target.value as any })}
                          required
                        >
                          <option value="moderate">Moderate - Stable condition</option>
                          <option value="urgent">Urgent - Deteriorating health</option>
                          <option value="critical">Critical - Life-threatening</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="requestContact">Contact Number *</Label>
                        <Input
                          id="requestContact"
                          type="tel"
                          value={requestForm.contact}
                          onChange={(e) => setRequestForm({ ...requestForm, contact: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                        Submit Transplant Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Hospital Partners */}
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <h2 className="text-3xl font-bold mb-6">Partner Transplant Centers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hospitals.map(hospital => (
              <Card key={hospital.id}>
                <CardHeader>
                  <CardTitle>{hospital.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{hospital.address}</p>
                  <p className="text-primary font-semibold">{hospital.phone}</p>
                  <p className="text-muted-foreground">{hospital.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Active Requests */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Active Transplant Requests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organRequests
              .filter(req => req.status === 'waiting')
              .sort((a, b) => {
                const urgencyOrder = { critical: 0, urgent: 1, moderate: 2 };
                return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
              })
              .map(request => (
                <RequestCard key={request.id} request={request} type="organ" />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OrganDonation;
