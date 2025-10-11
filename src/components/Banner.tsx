import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Banner = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book Appointment With 100+ Trusted Doctors
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Health Stack connects you with the best healthcare professionals. Book your appointment today and take control of your health journey.
          </p>
          <Link to="/appointment">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Calendar className="w-5 h-5 mr-2" />
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
