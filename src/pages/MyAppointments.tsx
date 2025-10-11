import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '@/contexts/AppContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';

const MyAppointments = () => {
  const { appointments, doctors } = useAppContext();

  const getDoctor = (doctorId: string) => doctors.find(d => d.id === doctorId);

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-secondary text-secondary-foreground';
      case 'pending': return 'bg-yellow-500 text-white';
      case 'completed': return 'bg-primary text-primary-foreground';
      case 'cancelled': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">My Appointments</h1>
          
          {appointments.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground">No appointments booked yet</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => {
                const doctor = getDoctor(appointment.doctorId);
                return (
                  <Card key={appointment.id} className="hover:shadow-medium transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        {doctor && (
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-24 h-24 rounded-lg object-cover"
                          />
                        )}
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-semibold text-foreground">
                                {doctor?.name}
                              </h3>
                              <p className="text-muted-foreground">{doctor?.speciality}</p>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{appointment.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{appointment.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{doctor?.address}</span>
                            </div>
                            <div className="text-muted-foreground">
                              Purpose: {appointment.purpose}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyAppointments;
