import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UrgencyBadge from "./UrgencyBadge";
import { MapPin, Calendar, Phone, Droplet } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { useState } from "react";

interface RequestCardProps {
  request: {
    id: string;
    patientName: string;
    bloodType?: string;
    organType?: string;
    unitsNeeded?: number;
    hospitalId: string;
    urgency: 'critical' | 'urgent' | 'moderate';
    contact: string;
    date?: string;
    waitingSince?: string;
    status: string;
  };
  type: 'blood' | 'organ';
}

const RequestCard = ({ request, type }: RequestCardProps) => {
  const { hospitals } = useAppContext();
  const hospital = hospitals.find(h => h.id === request.hospitalId);
  const [showContact, setShowContact] = useState(false);

  return (
    <Card className="hover:shadow-medium transition-all border-l-4 border-l-red-600">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{request.patientName}</CardTitle>
          <UrgencyBadge urgency={request.urgency} />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-red-600">
            {type === 'blood' ? request.bloodType : request.organType}
          </div>
          {type === 'blood' && request.unitsNeeded && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Droplet className="w-4 h-4" />
              {request.unitsNeeded} units needed
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          {hospital?.name || 'Hospital'}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          {type === 'blood' 
            ? `Requested: ${new Date(request.date || '').toLocaleDateString()}`
            : `Waiting since: ${new Date(request.waitingSince || '').toLocaleDateString()}`
          }
        </div>

        {showContact ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            {request.contact}
          </div>
        ) : (
          <Button 
            onClick={() => setShowContact(true)} 
            className="w-full bg-red-600 hover:bg-red-700"
          >
            I Can Help
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default RequestCard;
