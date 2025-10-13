import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              HealthCare Plus
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Providing quality healthcare services with compassion and excellence. Your health is our priority.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/laboratory" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Laboratory Services
                </Link>
              </li>
              <li>
                <Link to="/patients" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Patient Portal
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Emergency Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blood-donation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blood Donation
                </Link>
              </li>
              <li>
                <Link to="/organ-donation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Organ Donation
                </Link>
              </li>
              <li>
                <Link to="/emergency-resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Emergency Hotlines
                </Link>
              </li>
              <li>
                <Link to="/hospitals" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hospital Directory
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>123 Healthcare Ave, Medical District, MD 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@healthcareplus.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HealthCare Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
