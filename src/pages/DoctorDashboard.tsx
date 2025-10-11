import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAppContext } from '@/contexts/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Clock } from 'lucide-react';

const DoctorDashboard = () => {
  const { appointments, doctors } = useAppContext();

  const todayAppointments = appointments.filter(app => {
    const today = new Date().toDateString();
    const appDate = new Date(app.date).toDateString();
    return today === appDate;
  });

  const stats = [
    {
      label: 'Next Day Appointment',
      value: appointments.length,
      icon: Calendar,
      color: 'text-primary'
    },
    {
      label: 'Today Patient',
      value: todayAppointments.length,
      icon: Users,
      color: 'text-secondary'
    },
    {
      label: 'Total Appointments',
      value: appointments.length,
      icon: Clock,
      color: 'text-accent'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-secondary';
      case 'pending': return 'bg-yellow-500';
      case 'completed': return 'bg-primary';
      case 'cancelled': return 'bg-destructive';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">Doctor Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className={`p-4 bg-muted rounded-full ${stat.color}`}>
                      <stat.icon className="w-8 h-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient Name</TableHead>
                      <TableHead>Appt Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {appointments.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground">
                          No appointments scheduled
                        </TableCell>
                      </TableRow>
                    ) : (
                      appointments.map((appointment) => (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.patientName}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>{appointment.purpose}</TableCell>
                          <TableCell>{appointment.contact}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
