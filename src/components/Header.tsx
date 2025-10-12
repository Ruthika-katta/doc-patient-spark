import { useState } from "react";
import { Menu, X, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
              <Stethoscope className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              HealthCare Plus
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/services") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              to="/doctors"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/doctors") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Doctors
            </Link>
            <Link
              to="/patients"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/patients") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Patient Portal
            </Link>
            <Link
              to="/blood-donation"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/blood-donation") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Blood Donation
            </Link>
            <Link
              to="/organ-donation"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive("/organ-donation") ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              Organ Donation
            </Link>
            <Link to="/appointment">
              <Button variant="hero" size="sm">
                Book Appointment
              </Button>
            </Link>
          </div>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/services") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/doctors"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/doctors") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Doctors
              </Link>
              <Link
                to="/patients"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/patients") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Patient Portal
              </Link>
              <Link
                to="/blood-donation"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/blood-donation") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blood Donation
              </Link>
              <Link
                to="/organ-donation"
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  isActive("/organ-donation") ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Organ Donation
              </Link>
              <Link to="/appointment" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" size="sm" className="w-full">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
