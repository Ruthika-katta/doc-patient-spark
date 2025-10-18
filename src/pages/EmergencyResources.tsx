import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Droplet, Heart, MapPin, AlertCircle, Clock } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import RequestCard from "@/components/RequestCard";

const EmergencyResources = () => {
  const { bloodRequests, organRequests, hospitals } = useAppContext();
  
  const criticalBloodRequests = bloodRequests.filter(req => req.urgency === 'critical');
  const criticalOrganRequests = organRequests.filter(req => req.urgency === 'critical');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Emergency Medical Resources
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Quick access to life-saving blood and organ donation services. Every second counts.
            </p>
          </div>
        </section>

        {/* Emergency Hotlines */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Phone className="w-8 h-8 text-primary" />
            Emergency Hotlines
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2 border-red-600">
              <CardHeader>
                <CardTitle className="text-red-600">Blood Bank Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">1-800-BLOOD-11</p>
                <p className="text-sm text-muted-foreground">Available 24/7 for urgent blood requirements</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-600">
              <CardHeader>
                <CardTitle className="text-pink-600">Organ Transplant Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">1-800-ORGAN-24</p>
                <p className="text-sm text-muted-foreground">24/7 transplant coordination services</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-primary">Medical Emergency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2">911</p>
                <p className="text-sm text-muted-foreground">Immediate emergency medical services</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplet className="w-6 h-6 text-red-600" />
                  Blood Donation Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Access our complete blood donation portal to donate blood or request urgent blood supplies.
                </p>
                <div className="flex gap-4">
                  <Link to="/blood-donation" className="flex-1">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Donate Blood
                    </Button>
                  </Link>
                  <Link to="/blood-donation" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Request Blood
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-950 dark:to-purple-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-pink-600" />
                  Organ Donation Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Register as an organ donor or request organ transplant coordination through our network.
                </p>
                <div className="flex gap-4">
                  <Link to="/organ-donation" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                      Register as Donor
                    </Button>
                  </Link>
                  <Link to="/organ-donation" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Request Organ
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Critical Requests */}
        {(criticalBloodRequests.length > 0 || criticalOrganRequests.length > 0) && (
          <section className="container mx-auto px-4 py-12 bg-red-50 dark:bg-red-950/20">
            <h2 className="text-3xl font-bold mb-2 text-red-600 flex items-center gap-2">
              <AlertCircle className="w-8 h-8 animate-pulse" />
              Critical Emergency Requests
            </h2>
            <p className="text-muted-foreground mb-6">
              These patients need immediate assistance. If you can help, please respond urgently.
            </p>

            {criticalBloodRequests.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-red-600" />
                  Critical Blood Requests
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalBloodRequests.map(request => (
              <RequestCard key={request.id} request={{...request, status: 'active'}} type="blood" />
                  ))}
                </div>
              </div>
            )}

            {criticalOrganRequests.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Critical Organ Requests
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criticalOrganRequests.map(request => (
              <RequestCard key={request.id} request={{...request, status: 'active'}} type="organ" />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Hospital Blood Banks & Transplant Centers */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            Emergency Contact Centers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {hospitals.map(hospital => (
              <Card key={hospital.id} className="hover:shadow-medium transition-all">
                <CardHeader>
                  <CardTitle>{hospital.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{hospital.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-primary font-semibold">{hospital.phone}</span>
                  </div>
                  <div className="pt-2 space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      Blood Bank: 24/7
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      Transplant Center: Available
                    </div>
                  </div>
                  <Link to="/hospitals">
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Information */}
        <section className="container mx-auto px-4 py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Important Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Blood Donation Eligibility</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Age: 18-65 years</p>
                  <p>• Weight: Minimum 50 kg</p>
                  <p>• Wait 90 days between donations</p>
                  <p>• Must be in good health</p>
                  <p>• No recent illness or surgery</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Organ Donation Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• Age: 18+ years (or parental consent)</p>
                  <p>• Medical evaluation required</p>
                  <p>• Blood type compatibility check</p>
                  <p>• Free from transmissible diseases</p>
                  <p>• Psychological assessment for living donors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmergencyResources;
