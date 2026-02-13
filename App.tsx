
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import AboutUs from './components/AboutUs';
import ContactSupport from './components/ContactSupport';
import PrivacyPolicy from './components/PrivacyPolicy';
import PatientDashboard from './components/PatientDashboard';
import ProviderDashboard from './components/ProviderDashboard';
import ProviderLanding from './components/ProviderLanding';
import Login from './components/Login';
import RoleSelection from './components/RoleSelection';
import ProviderHowItWorks from './components/ProviderHowItWorks';
import Services from './components/Services';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'signup' | 'about' | 'contact' | 'privacy' | 'patient_dashboard' | 'provider_dashboard' | 'provider_landing' | 'login' | 'role_selection' | 'provider_how_it_works' | 'services'>('home');
  const [initialRole, setInitialRole] = useState<'patient' | 'provider'>('patient');

  const handleSignUpSuccess = (role: 'patient' | 'provider') => {
    setView(role === 'patient' ? 'patient_dashboard' : 'provider_dashboard');
  };

  const startSignUp = (role: 'patient' | 'provider' = 'patient') => {
    setInitialRole(role);
    setView('signup');
  };

  const handleLogin = (role: 'patient' | 'provider') => {
    setView(role === 'patient' ? 'patient_dashboard' : 'provider_dashboard');
  };

  const goToLogin = (role: 'patient' | 'provider' = 'patient') => {
    setInitialRole(role);
    setView('login');
  };

  if (view === 'signup') {
    return <SignUp onBack={() => setView('home')} onSuccess={handleSignUpSuccess} initialRole={initialRole} />;
  }

  if (view === 'role_selection') {
    return <RoleSelection 
      onBack={() => setView('home')} 
      onSelectRole={(role) => goToLogin(role)} 
      onSignUp={() => startSignUp('patient')} 
    />;
  }

  if (view === 'login') {
    return <Login 
      onBack={() => setView('role_selection')} 
      onLogin={handleLogin} 
      onSignUp={() => startSignUp('patient')} 
      initialRole={initialRole}
    />;
  }

  if (view === 'about') {
    return <AboutUs onBack={() => setView('home')} onSignUp={() => startSignUp('patient')} />;
  }

  if (view === 'contact') {
    return <ContactSupport onBack={() => setView('home')} onSignUp={() => startSignUp('patient')} />;
  }

  if (view === 'privacy') {
    return <PrivacyPolicy onBack={() => setView('home')} />;
  }

  if (view === 'services') {
    return <Services 
      onBack={() => setView('home')} 
      onSignUp={() => startSignUp('patient')}
      onLogin={() => setView('role_selection')}
      onAbout={() => setView('about')}
    />;
  }

  if (view === 'provider_landing') {
    return <ProviderLanding 
      onBack={() => setView('home')} 
      onJoin={() => startSignUp('provider')} 
      onLogin={() => goToLogin('provider')}
      onHowItWorks={() => setView('provider_how_it_works')}
    />;
  }

  if (view === 'provider_how_it_works') {
    return <ProviderHowItWorks 
      onBack={() => setView('provider_landing')} 
      onJoin={() => startSignUp('provider')}
    />;
  }

  if (view === 'patient_dashboard') {
    return <PatientDashboard onLogout={() => setView('home')} />;
  }

  if (view === 'provider_dashboard') {
    return <ProviderDashboard onLogout={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar 
        onSignUp={() => startSignUp('patient')} 
        onLogin={() => setView('role_selection')}
        onAbout={() => setView('about')} 
        onContact={() => setView('contact')}
        onPrivacy={() => setView('privacy')}
        onProviderLanding={() => setView('provider_landing')}
        onServices={() => setView('services')}
      />
      <main className="flex-grow">
        <Hero onConsult={() => startSignUp('patient')} />
        <TrustBar />
        <HowItWorks />
        <CTASection onSignUp={() => startSignUp('patient')} />
      </main>
      <Footer 
        onAbout={() => setView('about')} 
        onContact={() => setView('contact')}
        onPrivacy={() => setView('privacy')}
        onProviderLanding={() => setView('provider_landing')}
      />
    </div>
  );
};

export default App;
