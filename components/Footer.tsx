
import React from 'react';

interface FooterProps {
  onAbout?: () => void;
  onContact?: () => void;
  onPrivacy?: () => void;
  onProviderLanding?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAbout, onContact, onPrivacy, onProviderLanding }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 text-left">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-lg text-white">
                <span className="material-symbols-outlined text-xl">medical_services</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase">Telmed</span>
            </div>
            <p className="max-w-sm mb-6 text-sm leading-relaxed">
              Revolutionizing healthcare access through technology. Get connected with professional care anywhere, anytime.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-primary transition-all" href="#">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:text-white hover:bg-primary transition-all" href="#">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>
          <div className="text-left">
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onAbout} className="hover:text-primary transition-colors text-left">About Us</button></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><button onClick={onPrivacy} className="hover:text-primary transition-colors text-left">Privacy Policy</button></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="text-left">
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onProviderLanding} className="hover:text-primary transition-colors text-left font-bold text-primary">For Providers</button></li>
              <li><button onClick={onContact} className="hover:text-primary transition-colors text-left">Contact Support</button></li>
              <li><a className="hover:text-primary transition-colors" href="#">Doctor Portal</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Health Library</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] italic text-center md:text-left max-w-lg opacity-60">
            Disclaimer: Telmed is for non-emergency medical consultations. In case of a life-threatening emergency, please call 911 immediately.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-wider">© 2024 Telmed Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
