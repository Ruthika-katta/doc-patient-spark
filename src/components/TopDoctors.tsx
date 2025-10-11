import { Link } from 'react-router-dom';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';

const TopDoctors = () => {
  const { doctors, currencySymbol } = useAppContext();
  const topDoctors = doctors.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Top Doctors to Book</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our extensive list of trusted healthcare professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDoctors.map((doctor) => (
            <Link
              key={doctor.id}
              to={`/appointment/${doctor.id}`}
              className="group bg-card rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm text-secondary font-medium">Available</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{doctor.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{doctor.speciality}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{doctor.address}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                  <span className="text-primary font-semibold">
                    {currencySymbol}{doctor.fees}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/doctors">
            <Button size="lg" variant="hero">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
