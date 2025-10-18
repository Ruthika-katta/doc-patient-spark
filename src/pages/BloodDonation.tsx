import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BloodTypeSelector from "@/components/BloodTypeSelector";
import DonorCard from "@/components/DonorCard";
import RequestCard from "@/components/RequestCard";
import { useAppContext } from "@/contexts/AppContext";
import { Droplet, Heart, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BloodDonation = () => {
  const { bloodDonations, bloodRequests, hospitals, addBloodDonation, addBloodRequest } = useAppContext();
  const { toast } = useToast();
  
  const [donorForm, setDonorForm] = useState({
    donorName: '',
    bloodType: '',
    contact: '',
    city: '',
    lastDonationDate: '',
    unitsAvailable: 1
  });

  const [requestForm, setRequestForm] = useState({
    patientName: '',
    bloodType: '',
    unitsNeeded: 1,
    hospitalId: '',
    urgency: 'moderate' as 'critical' | 'urgent' | 'moderate',
    contact: ''
  });

  const [searchBloodType, setSearchBloodType] = useState('');
  const [searchCity, setSearchCity] = useState('');

  const handleDonorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDonor = {
      id: Date.now().toString(),
      name: donorForm.donorName,
      bloodType: donorForm.bloodType,
      phone: donorForm.contact,
      city: donorForm.city,
      availableDate: new Date(new Date(donorForm.lastDonationDate).getTime() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      unitsAvailable: donorForm.unitsAvailable
    };
    addBloodDonation(newDonor);
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering as a blood donor. You're a lifesaver!",
    });
    setDonorForm({
      donorName: '',
      bloodType: '',
      contact: '',
      city: '',
      lastDonationDate: '',
      unitsAvailable: 1
    });
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRequest = {
      id: Date.now().toString(),
      patientName: requestForm.patientName,
      bloodType: requestForm.bloodType,
      unitsNeeded: requestForm.unitsNeeded,
      hospitalId: requestForm.hospitalId,
      urgency: requestForm.urgency as 'critical' | 'urgent' | 'normal',
      contact: requestForm.contact,
      requiredBy: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
    addBloodRequest(newRequest);
    toast({
      title: "Request Submitted!",
      description: "Your blood request has been submitted. We'll connect you with donors soon.",
    });
    setRequestForm({
      patientName: '',
      bloodType: '',
      unitsNeeded: 1,
      hospitalId: '',
      urgency: 'urgent',
      contact: ''
    });
  };

  const filteredDonors = bloodDonations.filter(donor => {
    const matchesBloodType = !searchBloodType || donor.bloodType === searchBloodType;
    const matchesCity = !searchCity || donor.city.toLowerCase().includes(searchCity.toLowerCase());
    return matchesBloodType && matchesCity;
  });

  const stats = [
    { icon: Users, label: "Active Donors", value: bloodDonations.length },
    { icon: Droplet, label: "Blood Requests", value: bloodRequests.length },
    { icon: CheckCircle, label: "Lives Saved", value: "1.2K+" },
    { icon: Heart, label: "Success Rate", value: "95%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <Droplet className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blood Donation Portal
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Every donation saves up to three lives. Join our community of heroes and make a difference today.
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
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="donate">Donate Blood</TabsTrigger>
              <TabsTrigger value="request">Request Blood</TabsTrigger>
            </TabsList>

            <TabsContent value="donate">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Register as Blood Donor</CardTitle>
                    <CardDescription>
                      Fill out the form to register as a blood donor. Your information will be kept confidential.
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
                        <Label>Blood Type *</Label>
                        <BloodTypeSelector
                          value={donorForm.bloodType}
                          onChange={(value) => setDonorForm({ ...donorForm, bloodType: value })}
                        />
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
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={donorForm.city}
                          onChange={(e) => setDonorForm({ ...donorForm, city: e.target.value })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="lastDonation">Last Donation Date</Label>
                        <Input
                          id="lastDonation"
                          type="date"
                          value={donorForm.lastDonationDate}
                          onChange={(e) => setDonorForm({ ...donorForm, lastDonationDate: e.target.value })}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                        Register as Donor
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div>
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Blood Type Compatibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <p><strong>O-</strong> can donate to: All blood types (Universal Donor)</p>
                        <p><strong>O+</strong> can donate to: O+, A+, B+, AB+</p>
                        <p><strong>A-</strong> can donate to: A-, A+, AB-, AB+</p>
                        <p><strong>A+</strong> can donate to: A+, AB+</p>
                        <p><strong>B-</strong> can donate to: B-, B+, AB-, AB+</p>
                        <p><strong>B+</strong> can donate to: B+, AB+</p>
                        <p><strong>AB-</strong> can donate to: AB-, AB+</p>
                        <p><strong>AB+</strong> can receive from: All blood types (Universal Receiver)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Donation Guidelines</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p>• Must be 18-65 years old</p>
                      <p>• Weigh at least 50 kg (110 lbs)</p>
                      <p>• Be in good health</p>
                      <p>• Wait 90 days between donations</p>
                      <p>• Eat well before donating</p>
                      <p>• Stay hydrated</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="request">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Request Blood</CardTitle>
                    <CardDescription>
                      Submit your blood requirement. We'll help connect you with suitable donors.
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
                        <Label>Blood Type Required *</Label>
                        <BloodTypeSelector
                          value={requestForm.bloodType}
                          onChange={(value) => setRequestForm({ ...requestForm, bloodType: value })}
                        />
                      </div>

                      <div>
                        <Label htmlFor="units">Units Needed *</Label>
                        <Input
                          id="units"
                          type="number"
                          min="1"
                          value={requestForm.unitsNeeded}
                          onChange={(e) => setRequestForm({ ...requestForm, unitsNeeded: parseInt(e.target.value) })}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="hospital">Hospital *</Label>
                        <select
                          id="hospital"
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
                        <Label htmlFor="urgency">Urgency Level *</Label>
                        <select
                          id="urgency"
                          className="w-full border border-input bg-background px-3 py-2 rounded-md"
                          value={requestForm.urgency}
                          onChange={(e) => setRequestForm({ ...requestForm, urgency: e.target.value as any })}
                          required
                        >
                          <option value="moderate">Moderate</option>
                          <option value="urgent">Urgent</option>
                          <option value="critical">Critical</option>
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

                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                        Submit Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Available Donors */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">Available Blood Donors</h2>
          
          <div className="mb-6 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <Label>Filter by Blood Type</Label>
              <BloodTypeSelector
                value={searchBloodType}
                onChange={setSearchBloodType}
                className="mt-2"
              />
              {searchBloodType && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchBloodType('')}
                  className="mt-2"
                >
                  Clear Filter
                </Button>
              )}
            </div>
            <div className="flex-1 min-w-[200px]">
              <Label htmlFor="searchCity">Filter by City</Label>
              <Input
                id="searchCity"
                placeholder="Enter city name"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDonors.map(donor => (
              <DonorCard key={donor.id} donor={donor} />
            ))}
          </div>
        </section>

        {/* Active Requests */}
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <h2 className="text-3xl font-bold mb-6 text-red-600">Urgent Blood Requests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloodRequests
              .sort((a, b) => {
                const urgencyOrder = { critical: 0, urgent: 1, normal: 2 };
                return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
              })
              .map(request => (
                <RequestCard key={request.id} request={{...request, status: 'active'}} type="blood" />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BloodDonation;
