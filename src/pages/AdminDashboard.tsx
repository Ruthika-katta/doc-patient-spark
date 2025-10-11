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
import { Button } from '@/components/ui/button';
import { Users, UserCog, Building2, Calendar, BarChart3, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { appointments, doctors, hospitals } = useAppContext();

  const stats = [
    {
      label: 'Total Doctors',
      value: doctors.length,
      icon: UserCog,
      color: 'text-primary',
      change: '+12%'
    },
    {
      label: 'Total Patients',
      value: '1,234',
      icon: Users,
      color: 'text-secondary',
      change: '+8%'
    },
    {
      label: 'Total Hospitals',
      value: hospitals.length,
      icon: Building2,
      color: 'text-accent',
      change: '+5%'
    },
    {
      label: 'Total Appointments',
      value: appointments.length,
      icon: Calendar,
      color: 'text-primary',
      change: '+15%'
    }
  ];

  const recentAppointments = appointments.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <div className="flex gap-3">
              <Link to="/hospitals">
                <Button variant="outline">
                  <Building2 className="w-4 h-4 mr-2" />
                  Manage Hospitals
                </Button>
              </Link>
              <Link to="/doctors">
                <Button variant="hero">
                  <UserCog className="w-4 h-4 mr-2" />
                  Manage Doctors
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 bg-muted rounded-lg ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="text-secondary">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Appointment Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Chart visualization coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Today's Appointments</span>
                    <span className="font-semibold text-foreground">24</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Pending Approvals</span>
                    <span className="font-semibold text-foreground">8</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Active Doctors</span>
                    <span className="font-semibold text-foreground">{doctors.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Revenue This Month</span>
                    <span className="font-semibold text-foreground">$45,230</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Patient</TableHead>
                      <TableHead>Doctor</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentAppointments.map((appointment) => {
                      const doctor = doctors.find(d => d.id === appointment.doctorId);
                      return (
                        <TableRow key={appointment.id}>
                          <TableCell className="font-medium">{appointment.patientName}</TableCell>
                          <TableCell>{doctor?.name}</TableCell>
                          <TableCell>{appointment.date}</TableCell>
                          <TableCell>{appointment.time}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                appointment.status === 'confirmed'
                                  ? 'bg-secondary'
                                  : appointment.status === 'pending'
                                  ? 'bg-yellow-500'
                                  : 'bg-muted'
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
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

export default AdminDashboard;
