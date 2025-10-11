import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '@/contexts/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HospitalList = () => {
  const { hospitals } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Hospital List</h1>
            <p className="text-muted-foreground">Browse through our network of partner hospitals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {hospital.name}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <a
                        href={`mailto:${hospital.email}`}
                        className="text-primary hover:underline"
                      >
                        {hospital.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <a
                        href={`tel:${hospital.phone}`}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {hospital.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {hospitals.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Building2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <p className="text-muted-foreground">No hospitals found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HospitalList;
