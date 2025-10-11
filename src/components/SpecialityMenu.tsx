import { Link } from 'react-router-dom';
import { Heart, Brain, Baby, Bone, Sparkles, Stethoscope } from 'lucide-react';

const specialities = [
  { name: 'Cardiology', icon: Heart, path: '/doctors?speciality=Cardiology' },
  { name: 'Neurology', icon: Brain, path: '/doctors?speciality=Neurology' },
  { name: 'Pediatrics', icon: Baby, path: '/doctors?speciality=Pediatrics' },
  { name: 'Orthopedics', icon: Bone, path: '/doctors?speciality=Orthopedics' },
  { name: 'Dermatology', icon: Sparkles, path: '/doctors?speciality=Dermatology' },
  { name: 'General Medicine', icon: Stethoscope, path: '/doctors?speciality=General Medicine' }
];

const SpecialityMenu = () => {
  return (
    <section className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Find by Speciality</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our diverse range of medical specialities and connect with the right healthcare professional
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {specialities.map((speciality) => (
            <Link
              key={speciality.name}
              to={speciality.path}
              className="group flex flex-col items-center p-6 bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <speciality.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {speciality.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityMenu;
