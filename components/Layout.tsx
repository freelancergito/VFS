
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 border-b">
        <div className="max-w-7xl mx-auto px-4 flex justify-between text-xs font-medium text-gray-600">
          <div className="flex gap-4">
            <button className="hover:text-blue-900 font-bold border-b-2 border-blue-900 pb-1">For Individuals</button>
            <button className="hover:text-blue-900">For Governments</button>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-1 cursor-pointer hover:underline">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              English
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div onClick={() => onPageChange(Page.Home)} className="cursor-pointer flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold italic">vfs.</div>
              <span className="text-xl font-bold text-blue-900 uppercase tracking-tighter">GlobalVisa</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {Object.values(Page).map((p) => (
                <button
                  key={p}
                  onClick={() => onPageChange(p)}
                  className={`text-sm font-medium transition-colors hover:text-orange-500 capitalize ${
                    currentPage === p ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>
          </div>
          <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 font-bold text-sm rounded hover:bg-orange-500 hover:text-white transition-all">
            Contact us
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1D37] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold italic">vfs.</div>
                <span className="text-xl font-bold uppercase tracking-tighter">GlobalVisa</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                GlobalVisa is the world's largest outsourcing and technology services specialist for governments and diplomatic missions worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><button onClick={() => onPageChange(Page.About)} className="hover:text-white">About us</button></li>
                <li><button onClick={() => onPageChange(Page.Solutions)} className="hover:text-white">Solutions</button></li>
                <li><button onClick={() => onPageChange(Page.Insights)} className="hover:text-white">Insights</button></li>
                <li><button onClick={() => onPageChange(Page.Careers)} className="hover:text-white">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Disclaimer</li>
                <li className="hover:text-white cursor-pointer">Privacy Notice</li>
                <li className="hover:text-white cursor-pointer">Cookie Policy</li>
                <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Follow us</h4>
              <div className="flex gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center cursor-pointer hover:bg-orange-500 transition-colors">
                    <div className="w-4 h-4 bg-white/20 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500">
              © 2024 GlobalVisa Group. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 grayscale opacity-50">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="h-8 w-12 bg-gray-400 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
