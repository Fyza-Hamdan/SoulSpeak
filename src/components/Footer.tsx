import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2022] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-6">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1E2022] font-bold text-xl">SoulSpeak™</span>
          </div>
          <p className="text-sm opacity-80 max-w-xs">
            A safe space for mental health support, therapy, and personal growth. Connect with licensed therapists and access valuable resources for your wellbeing journey.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-indigo-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-indigo-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-indigo-400 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Mental Health Resources</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Find a Therapist</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Crisis Support</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Self-Help Tools</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Community Forum</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Wellness Blog</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Support Groups</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Our Mission</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Press Release</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-4 text-sm opacity-80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>123 Wellness Street, Mental Health District, Singapore 123456</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>+65 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>support@soulspeak.co</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="text-xl font-semibold">SoulSpeak Team</div>
        <div className="text-sm opacity-80">© 2024 COPYRIGHT: SOULSPEAK.COM</div>
      </div>
    </footer>
  );
};

export default Footer;
