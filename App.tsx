
import React, { useState } from 'react';
import { Page } from './types';
import { Layout } from './components/Layout';
import { Assistant } from './components/Assistant';
import { COUNTRIES, SERVICES, INSIGHTS, STATS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative vfs-gradient text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">VFS Global for Individuals</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">Welcome to GlobalVisa</h1>
            
            <div className="bg-white rounded-lg p-6 shadow-2xl text-gray-900 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">I'm applying from</label>
                  <select 
                    value={selectedFrom}
                    onChange={(e) => setSelectedFrom(e.target.value)}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-blue-900 outline-none text-sm font-medium"
                  >
                    <option value="">Select Country / Region</option>
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase">and I'm going to</label>
                  <select 
                    value={selectedTo}
                    onChange={(e) => setSelectedTo(e.target.value)}
                    className="w-full border-b-2 border-gray-200 py-2 focus:border-blue-900 outline-none text-sm font-medium"
                  >
                    <option value="">Select Country</option>
                    {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
                  </select>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <button 
                  disabled={!selectedFrom || !selectedTo}
                  className="px-12 py-3 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold rounded-full shadow-lg transition-all"
                >
                  Take Me To The Website →
                </button>
              </div>
            </div>
            
            <p className="text-gray-300 italic text-sm">Every journey deserves protection! Find your Travel Medical Insurance solution today. <span className="underline cursor-pointer">Get now →</span></p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Enhance your application journey</h2>
            <p className="text-gray-600">Our optional services are designed for your convenience and comfort throughout the visa application process.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(s => (
              <div key={s.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md text-xl">{s.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-orange-600 font-bold mb-2 uppercase tracking-widest text-xs">Footprint</p>
          <h2 className="text-4xl font-bold mb-8 text-blue-900">Since 2001, we have processed<br/>over <span className="text-orange-500">528 million transactions*</span></h2>
          <button className="text-blue-900 font-bold border-b-2 border-blue-900 pb-1 mb-16 hover:text-orange-500 hover:border-orange-500 transition-all">We work globally, click on the link to find out more →</button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STATS.map(stat => (
              <div key={stat.label}>
                <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-orange-600 font-bold mb-2 uppercase tracking-widest text-xs">Testimonials</p>
              <h2 className="text-3xl font-bold text-blue-900">What our customers say about us</h2>
            </div>
            <div className="flex gap-2">
              <button className="p-3 border rounded-full hover:bg-gray-50 transition-colors">←</button>
              <button className="p-3 border rounded-full hover:bg-gray-50 transition-colors">→</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="relative p-12 bg-gray-50 rounded-3xl">
                <span className="absolute top-8 left-8 text-6xl text-orange-200 font-serif">“</span>
                <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">{t.content}</p>
                <div>
                  <div className="font-bold text-blue-900">{t.author}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900">Featured Insights</h2>
            <button className="text-sm font-bold text-blue-900 hover:text-orange-500">Visit our insights page →</button>
          </div>
          
          <div className="space-y-16">
            {INSIGHTS.map((insight, idx) => (
              <div key={insight.id} className={`flex flex-col md:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">{insight.category}</span>
                  <h3 className="text-3xl font-bold text-blue-900 my-4 leading-snug">{insight.title}</h3>
                  <p className="text-gray-600 mb-6">{insight.summary}</p>
                  <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Continue reading →
                  </button>
                </div>
                <div className="flex-1 w-full h-[300px] overflow-hidden rounded-2xl shadow-xl">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="animate-in fade-in duration-700">
      <div className="vfs-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold">About GlobalVisa</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="prose prose-blue max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Profile</h2>
          <p className="mb-6 leading-relaxed">
            As the global leader in trusted technology services, empowering secure mobility for governments and citizens, GlobalVisa embraces technological innovation including Generative AI to support governments and diplomatic missions worldwide. The company prioritises ethical practices and sustainability while serving as a trusted partner to 69 governments.
          </p>
          <p className="mb-6 leading-relaxed">
            Operating 4023 Application Centres in 166 countries, GlobalVisa has efficiently processed more than 528 million transactions* since 2001 and over 225 million biometric enrolments since 2007.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Who we are</h3>
              <p>The global leader in trusted technology services, empowering secure mobility for governments and citizens.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Where we aspire to be</h3>
              <p>To lead and set the standard in the visa and consular services industry, through innovation, technology and excellence in customer service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPlaceholder = (title: string) => (
    <div className="animate-in fade-in duration-700 py-32 text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">{title}</h1>
      <p className="text-gray-500">This section is currently under development to meet the highest global standards.</p>
      <button 
        onClick={() => setCurrentPage(Page.Home)}
        className="mt-8 px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home: return renderHome();
      case Page.About: return renderAbout();
      case Page.Solutions: return renderPlaceholder("Solutions & Services");
      case Page.Footprint: return renderPlaceholder("Our Global Footprint");
      case Page.Insights: return renderPlaceholder("Latest Insights");
      default: return renderPlaceholder(currentPage.charAt(0).toUpperCase() + currentPage.slice(1));
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderContent()}
      <Assistant />
    </Layout>
  );
};

export default App;
