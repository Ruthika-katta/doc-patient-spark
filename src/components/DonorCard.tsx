import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplet, MapPin, Calendar, Phone } from "lucide-react";
import { useState } from "react";

interface DonorCardProps {
  donor: {
    id: string;
    name: string;
    bloodType: string;
    city: string;
    availableDate: string;
    phone: string;
    unitsAvailable: number;
  };
}

const DonorCard = ({ donor }: DonorCardProps) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <Card className="hover:shadow-medium transition-all">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <Droplet className="w-5 h-5 text-red-600" />
            </div>
            {donor.name}
          </span>
          <span className="text-2xl font-bold text-red-600">{donor.bloodType}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {donor.city}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          Available from: {new Date(donor.availableDate).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Droplet className="w-4 h-4" />
          Units Available: {donor.unitsAvailable}
        </div>
        {showContact ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            {donor.phone}
          </div>
        ) : (
          <Button 
            onClick={() => setShowContact(true)} 
            className="w-full"
            variant="default"
          >
            Show Contact
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default DonorCard;
