import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Health Stack</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A unified digital healthcare platform connecting hospitals, doctors, patients, and laboratories
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-gradient-card">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Health Stack is designed to revolutionize healthcare delivery by creating seamless connections between all healthcare stakeholders. In critical moments when patients need access to blood units, organ donors, or immediate medical attention, our platform provides real-time connectivity to save lives.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that technology can bridge the gap between healthcare providers and patients, making quality healthcare accessible, efficient, and affordable for everyone.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Access</h3>
                <p className="text-sm text-muted-foreground">
                  Instant connection to medical resources and healthcare providers
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Patient-Centric</h3>
                <p className="text-sm text-muted-foreground">
                  Designed with patient needs and convenience at the forefront
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Unified Platform</h3>
                <p className="text-sm text-muted-foreground">
                  One platform connecting all healthcare stakeholders
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your health data protected with industry-leading security
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Patient Management:</strong> Comprehensive patient record management and history tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Doctor Management:</strong> Detailed doctor profiles with specializations and availability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Appointment Scheduling:</strong> Real-time appointment booking with automated reminders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Prescription Management:</strong> Digital prescription tracking and medication history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Admin Dashboard:</strong> Comprehensive analytics and management tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Emergency Resources:</strong> Quick access to blood banks and organ donor databases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
