
import React from 'react';

interface AboutUsProps {
  onBack: () => void;
  onSignUp: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onBack, onSignUp }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-[#101418]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-solid border-[#f0f2f5] px-6 lg:px-40 py-3">
        <div className="flex items-center justify-between max-w-[1280px] mx-auto">
          <div className="flex items-center gap-4 text-primary cursor-pointer" onClick={onBack}>
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <h2 className="text-[#101418] text-xl font-extrabold leading-tight tracking-tight">Telmed</h2>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors" href="#mission">Our Mission</a>
              <a className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors" href="#standards">Standards</a>
              <a className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors" href="#team">Leadership</a>
            </nav>
            <button 
              onClick={onSignUp}
              className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-md shadow-primary/20 hover:scale-[1.02] transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section id="mission" className="relative bg-white pt-16 pb-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-sm">health_and_safety</span>
                Our Mission
              </div>
              <h1 className="text-[#101418] text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Bridging the Gap Between Quality Care and Your Home
              </h1>
              <p className="text-[#5e758d] text-lg leading-relaxed max-w-[540px]">
                We leverage advanced technology to bring world-class healthcare directly to your doorstep. Our goal is to ensure that quality medical advice is always within reach, no matter where you are.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={onSignUp}
                  className="bg-primary text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-primary/30 hover:translate-y-[-2px] transition-all"
                >
                  Join Our Network
                </button>
                <button className="border border-[#dae0e7] text-[#101418] px-8 py-4 rounded-lg font-bold hover:bg-background-light transition-all">
                  Watch Story
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div 
                className="relative z-10 w-full aspect-square rounded-xl bg-cover bg-center shadow-2xl overflow-hidden border-8 border-white" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1559839734-2b71f1536783?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}
              ></div>
              <div className="absolute bottom-6 -left-6 z-20 bg-white p-4 rounded-lg shadow-xl border border-[#f0f2f5] flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined fill-1">verified</span>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#5e758d] uppercase">Trust Score</p>
                  <p className="text-xl font-black text-[#101418]">99.8% Success</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats Bar */}
        <section className="bg-primary py-12">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-white/70 text-4xl">stethoscope</span>
                <p className="text-white tracking-light text-4xl font-black">500+</p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest">Board-Certified Doctors</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-y md:border-y-0 md:border-x border-white/20 py-8 md:py-0">
                <span className="material-symbols-outlined text-white/70 text-4xl">video_chat</span>
                <p className="text-white tracking-light text-4xl font-black">1M+</p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest">Consultations</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="material-symbols-outlined text-white/70 text-4xl">star</span>
                <p className="text-white tracking-light text-4xl font-black">4.9/5</p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest">Patient Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Standards Section */}
        <section id="standards" className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
            <div className="text-center mb-16">
              <h2 className="text-primary text-sm font-extrabold uppercase tracking-widest mb-4">Quality Assurance</h2>
              <h3 className="text-[#101418] text-4xl font-black tracking-tight">Our Medical Standards</h3>
              <p className="text-[#5e758d] mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                We believe that digital health shouldn't mean a compromise in quality. Our rigorous vetting process ensures you're always in safe hands.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="group relative bg-background-light p-8 rounded-lg border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-64 rounded-lg bg-cover bg-center mb-6 overflow-hidden" 
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
                <h4 className="text-[#101418] text-xl font-bold mb-3">Rigorous Vetting Process</h4>
                <p className="text-[#5e758d] leading-relaxed">Every physician undergoes a multi-stage background check, license verification, and peer-reviewed clinical performance evaluation before joining our platform.</p>
              </div>
              <div className="group relative bg-background-light p-8 rounded-lg border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-64 rounded-lg bg-cover bg-center mb-6 overflow-hidden" 
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}
                ></div>
                <h4 className="text-[#101418] text-xl font-bold mb-3">Diverse Specializations</h4>
                <p className="text-[#5e758d] leading-relaxed">Our network includes specialists from top-tier institutions worldwide, covering everything from primary care to mental health and chronic disease management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Grid */}
        <section id="team" className="py-24 bg-background-light">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
              <div className="max-w-xl">
                <h2 className="text-primary text-sm font-extrabold uppercase tracking-widest mb-4">The Team</h2>
                <h3 className="text-[#101418] text-4xl font-black tracking-tight leading-tight">Leadership committed to your well-being</h3>
              </div>
              <p className="text-[#5e758d] max-w-sm mb-1">
                Meet the visionaries, doctors, and builders working to revolutionize healthcare accessibility.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Leader 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-[#f0f2f5] group">
                <div 
                  className="aspect-[4/5] w-full rounded-lg bg-cover bg-center mb-6 transition-transform group-hover:scale-[1.02]" 
                  style={{ backgroundImage: 'url("https://i.pravatar.cc/400?img=32")' }}
                ></div>
                <h4 className="text-[#101418] text-xl font-extrabold">Dr. Sarah Jenkins</h4>
                <p className="text-primary font-bold text-sm mb-3">Chief Medical Officer</p>
                <p className="text-[#5e758d] text-sm leading-relaxed">Former Head of Internal Medicine at St. Judes, Sarah leads our clinical protocols.</p>
              </div>
              {/* Leader 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-[#f0f2f5] group">
                <div 
                  className="aspect-[4/5] w-full rounded-lg bg-cover bg-center mb-6 transition-transform group-hover:scale-[1.02]" 
                  style={{ backgroundImage: 'url("https://i.pravatar.cc/400?img=12")' }}
                ></div>
                <h4 className="text-[#101418] text-xl font-extrabold">James Chen</h4>
                <p className="text-primary font-bold text-sm mb-3">Co-Founder & CEO</p>
                <p className="text-[#5e758d] text-sm leading-relaxed">Tech entrepreneur with 15 years experience in building high-scale health solutions.</p>
              </div>
              {/* Leader 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-all border border-[#f0f2f5] group">
                <div 
                  className="aspect-[4/5] w-full rounded-lg bg-cover bg-center mb-6 transition-transform group-hover:scale-[1.02]" 
                  style={{ backgroundImage: 'url("https://i.pravatar.cc/400?img=47")' }}
                ></div>
                <h4 className="text-[#101418] text-xl font-extrabold">Dr. Elena Rodriguez</h4>
                <p className="text-primary font-bold text-sm mb-3">Co-Founder & Clinical Director</p>
                <p className="text-[#5e758d] text-sm leading-relaxed">Focused on patient outcome analytics and personalized care pathways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
            <div className="bg-[#101418] rounded-xl p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px]"></div>
              <div className="relative z-10 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-xl text-left">
                  <h3 className="text-white text-4xl font-black mb-6 leading-tight tracking-tight">Ready to experience the future of care?</h3>
                  <p className="text-white/60 text-lg">Join thousands of patients who trust Telmed for their primary healthcare needs.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button 
                    onClick={onSignUp}
                    className="bg-primary text-white px-10 py-5 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
                  >
                    Book a Consultation
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                    Our Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#f0f2f5] py-12">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                </svg>
              </div>
              <h2 className="text-[#101418] text-lg font-bold">Telmed</h2>
            </div>
            <div className="flex gap-8">
              <a className="text-sm text-[#5e758d] hover:text-primary" href="#">Privacy Policy</a>
              <a className="text-sm text-[#5e758d] hover:text-primary" href="#">Terms of Service</a>
              <a className="text-sm text-[#5e758d] hover:text-primary" href="#">Help Center</a>
            </div>
            <p className="text-sm text-[#5e758d]">© 2024 Telmed Health Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
