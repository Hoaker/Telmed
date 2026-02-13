
import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light font-display text-[#101418]">
      <style>{`
        .policy-content p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
          color: #4a5568;
        }
        .policy-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .policy-content li {
          margin-bottom: 0.5rem;
          position: relative;
          color: #4a5568;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-solid border-[#f0f2f5] px-6 lg:px-40 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-2 text-primary cursor-pointer" onClick={onBack}>
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
              </svg>
            </div>
            <h2 className="text-[#101418] text-xl font-black leading-tight tracking-tight uppercase">Telmed</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="hidden md:flex items-center gap-9">
              <button onClick={onBack} className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors">Home</button>
              <a className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors" href="#">Doctors</a>
              <a className="text-[#101418] text-sm font-semibold hover:text-primary transition-colors" href="#">Services</a>
              <button className="text-primary text-sm font-bold border-b-2 border-primary pb-0.5">Privacy</button>
            </div>
            <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
              <span>Log In</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8fafc] border-b border-[#e2e8f0] py-16 px-6 lg:px-40">
        <div className="max-w-[960px] mx-auto text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Security at Telmed</span>
              <h1 className="text-[#101418] text-4xl md:text-5xl font-black leading-tight tracking-tight">Privacy & Security</h1>
              <p className="text-[#5e758d] text-lg font-medium max-w-2xl">
                Last updated: October 24, 2023. We are committed to protecting your medical data with the highest standards of digital security.
              </p>
            </div>
            <div className="pb-2">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#e2e8f0] text-primary font-bold rounded-lg shadow-sm hover:bg-slate-50 transition-all group" href="#">
                <span className="material-symbols-outlined text-xl">download</span>
                Download PDF Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 py-12 px-6 lg:px-40 bg-background-light">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28 h-fit text-left">
            <nav className="flex flex-col gap-2">
              <p className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider mb-2 px-4">Sections</p>
              <a className="px-4 py-2 rounded-lg text-sm font-bold text-primary bg-primary/10 border-l-4 border-primary" href="#encryption">Data Encryption</a>
              <a className="px-4 py-2 rounded-lg text-sm font-medium text-[#5e758d] hover:bg-white hover:text-primary transition-all" href="#rights">Patient Rights</a>
              <a className="px-4 py-2 rounded-lg text-sm font-medium text-[#5e758d] hover:bg-white hover:text-primary transition-all" href="#hipaa">HIPAA Compliance</a>
              <a className="px-4 py-2 rounded-lg text-sm font-medium text-[#5e758d] hover:bg-white hover:text-primary transition-all" href="#contact">Contact Security</a>
            </nav>
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span className="material-symbols-outlined fill-1">verified_user</span>
                <span className="font-bold text-sm">Certified Platform</span>
              </div>
              <p className="text-xs text-[#5e758d] leading-relaxed font-medium">
                Telmed undergoes regular 3rd party security audits to ensure your records are handled safely.
              </p>
            </div>
          </aside>

          {/* Policy Content */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-lg shadow-sm border border-[#e2e8f0] text-left">
            <article className="policy-content">
              <p className="text-lg text-[#101418] font-medium leading-relaxed mb-8">
                At Telmed, we recognize that your health information is sensitive and private. Our security architecture is designed to exceed industry standards, ensuring that your communication with healthcare providers remains confidential and your medical history is accessible only by authorized individuals.
              </p>
              
              {/* Data Encryption Section */}
              <section className="mb-12 scroll-mt-28" id="encryption">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined fill-1">enhanced_encryption</span>
                  </div>
                  <h2 className="text-2xl font-black text-[#101418]">Data Encryption</h2>
                </div>
                <p>
                  We employ military-grade encryption protocols to protect your data across all states. Whether your information is stored on our servers or traveling across the internet, it is shielded from unauthorized access.
                </p>
                <ul className="list-disc">
                  <li><strong>Encryption at Rest:</strong> All patient records and personal identifiers are encrypted using AES-256 bit encryption, the global standard for secure data storage.</li>
                  <li><strong>Encryption in Transit:</strong> Data moving between your device and our platform is protected by TLS 1.3 (Transport Layer Security) protocols, preventing "man-in-the-middle" attacks.</li>
                  <li><strong>Key Management:</strong> Our cryptographic keys are stored in hardware security modules (HSMs) and rotated frequently to maintain high levels of integrity.</li>
                </ul>
              </section>

              <hr className="border-[#f0f2f5] my-10" />

              {/* Patient Rights Section */}
              <section className="mb-12 scroll-mt-28" id="rights">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined fill-1">assignment_ind</span>
                  </div>
                  <h2 className="text-2xl font-black text-[#101418]">Patient Rights</h2>
                </div>
                <p>
                  You maintain full control over your personal health information (PHI). Under our privacy framework, you are entitled to the following rights regarding your data:
                </p>
                <ul className="list-disc">
                  <li><strong>Right to Access:</strong> You may request a digital copy of your entire medical record at any time through the patient portal.</li>
                  <li><strong>Right to Amendment:</strong> If you believe information in your record is incorrect, you have the right to request a formal correction.</li>
                  <li><strong>Right to Restrict Processing:</strong> You can choose to limit how your data is shared for purposes beyond immediate treatment.</li>
                  <li><strong>Accounting of Disclosures:</strong> You may request a log of every instance where your PHI was accessed or shared by our administrative team.</li>
                </ul>
              </section>

              <hr className="border-[#f0f2f5] my-10" />

              {/* HIPAA Compliance Section */}
              <section className="mb-12 scroll-mt-28" id="hipaa">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined fill-1">gavel</span>
                  </div>
                  <h2 className="text-2xl font-black text-[#101418]">HIPAA Compliance</h2>
                </div>
                <p>
                  Telmed is fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). We adhere to the three main pillars of HIPAA security:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <h4 className="font-bold text-primary mb-2 text-sm">Administrative</h4>
                    <p className="text-xs !mb-0 font-medium">Rigorous staff training and policy management for PHI handling.</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <h4 className="font-bold text-primary mb-2 text-sm">Physical</h4>
                    <p className="text-xs !mb-0 font-medium">Secure, limited-access data centers with 24/7 biometric security.</p>
                  </div>
                  <div className="p-4 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                    <h4 className="font-bold text-primary mb-2 text-sm">Technical</h4>
                    <p className="text-xs !mb-0 font-medium">Automated session timeouts and strict audit controls.</p>
                  </div>
                </div>
                <p>
                  Our Business Associate Agreements (BAAs) with technology partners ensure that the entire ecosystem supporting Telmed maintains the same level of compliance that we do.
                </p>
              </section>

              {/* Contact/Help Callout */}
              <section className="bg-primary/5 p-8 rounded-lg border border-primary/20 scroll-mt-28" id="contact">
                <h3 className="text-lg font-bold text-[#101418] mb-2">Have security concerns?</h3>
                <p className="text-sm !mb-4 font-medium">If you believe your account has been compromised or have questions about our data practices, please contact our Security Response Team immediately.</p>
                <a className="text-primary font-bold hover:underline inline-flex items-center gap-1" href="mailto:security@telmed.com">
                  security@telmed.com
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </section>
            </article>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#f0f2f5] py-12 px-6 lg:px-40 mt-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 text-primary mb-6">
              <div className="size-6">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"></path>
                </svg>
              </div>
              <h2 className="text-[#101418] text-lg font-black uppercase">Telmed</h2>
            </div>
            <p className="text-[#5e758d] text-sm leading-relaxed font-medium">
              The future of accessible healthcare. Professional consultations from the comfort of your home.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#101418] mb-4 uppercase tracking-widest text-xs">Platform</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#5e758d] font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Find a Doctor</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Specialties</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#101418] mb-4 uppercase tracking-widest text-xs">Support</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#5e758d] font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Emergency Info</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#101418] mb-4 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#5e758d] font-medium">
              <li><button className="text-primary font-bold">Privacy Policy</button></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#f0f2f5] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#94a3b8]">
          <p>© 2024 Telmed Health Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Twitter</a>
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
