import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const MyProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">My Profile</h1>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Full Name
                    </div>
                  </Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>

                <div>
                  <Label htmlFor="email">
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </div>
                  </Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4" />
                      Phone
                    </div>
                  </Label>
                  <Input id="phone" type="tel" defaultValue="+1234567890" />
                </div>

                <div>
                  <Label htmlFor="address">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4" />
                      Address
                    </div>
                  </Label>
                  <Input id="address" defaultValue="123 Main St, City" />
                </div>

                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <Button variant="hero" className="w-full">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyProfile;
