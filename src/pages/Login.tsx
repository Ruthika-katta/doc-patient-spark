import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAppContext } from '@/contexts/AppContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [state, setState] = useState<'Sign Up' | 'Login'>('Login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn, setUserType } = useAppContext();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Simple validation
    if (state === 'Sign Up' && !name) {
      toast({
        title: 'Error',
        description: 'Please enter your name',
        variant: 'destructive'
      });
      return;
    }
    
    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill all fields',
        variant: 'destructive'
      });
      return;
    }

    // Simulate login/signup
    setIsLoggedIn(true);
    setUserType('patient');
    
    toast({
      title: state === 'Sign Up' ? 'Account Created' : 'Logged In',
      description: `Welcome ${name || 'back'}!`
    });
    
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-card rounded-xl shadow-medium p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {state === 'Sign Up' ? 'Create Account' : 'Login'}
            </h2>
            <p className="text-muted-foreground mb-6">
              Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment
            </p>

            <form onSubmit={onSubmitHandler} className="space-y-4">
              {state === 'Sign Up' && (
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full" variant="hero">
                {state === 'Sign Up' ? 'Create Account' : 'Login'}
              </Button>

              <div className="text-center text-sm">
                {state === 'Sign Up' ? (
                  <p className="text-muted-foreground">
                    Already have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setState('Login')}
                      className="text-primary underline cursor-pointer"
                    >
                      Login here
                    </button>
                  </p>
                ) : (
                  <p className="text-muted-foreground">
                    Create an account?{' '}
                    <button
                      type="button"
                      onClick={() => setState('Sign Up')}
                      className="text-primary underline cursor-pointer"
                    >
                      Click here
                    </button>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
