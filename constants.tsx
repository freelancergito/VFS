
import React from 'react';
import { Country, Service, Insight, Testimonial } from './types';

export const COUNTRIES: Country[] = [
  { name: 'United Kingdom', code: 'GB' },
  { name: 'USA', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'India', code: 'IN' },
  { name: 'UAE', code: 'AE' },
  { name: 'China', code: 'CN' },
  { name: 'South Africa', code: 'ZA' },
];

export const SERVICES: Service[] = [
  {
    id: 'form-filling',
    title: 'Form Filling',
    description: 'Get end-to-end assistance in completing your visa application form correctly with our Form Filling service.',
    image: 'https://picsum.photos/seed/form/400/300',
    icon: '📝'
  },
  {
    id: 'premium-lounge',
    title: 'Premium Lounge Service',
    description: 'Get personalised assistance and comfort while submitting your visa application with our Premium Lounge service.',
    image: 'https://picsum.photos/seed/lounge/400/300',
    icon: '🛋️'
  },
  {
    id: 'sms-alerts',
    title: 'SMS Alerts Service',
    description: 'Stay updated on the progress of your visa application with our SMS Alerts service.',
    image: 'https://picsum.photos/seed/sms/400/300',
    icon: '📱'
  },
  {
    id: 'courier-service',
    title: 'Courier Service',
    description: 'We deliver your passport and documents to your doorstep with our Courier service.',
    image: 'https://picsum.photos/seed/courier/400/300',
    icon: '📦'
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: 'visa-at-scale',
    title: 'Visa at scale: Engineering seamless processing for travellers across the globe',
    category: 'Technology',
    image: 'https://picsum.photos/seed/tech1/800/400',
    summary: 'Exploring how AI and machine learning are revolutionising visa application throughput.'
  },
  {
    id: 'cyber-resilience',
    title: 'Cyber resilience as the backbone of travel infrastructure',
    category: 'Security',
    image: 'https://picsum.photos/seed/security1/800/400',
    summary: 'The importance of data privacy and robust cybersecurity in modern international travel.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Michael M.',
    location: 'USA',
    content: "I used this service because I was panicked and didn't have time to renew my US passport on my own. As soon as I submitted my documents, they took over—and voilà, my passport arrived earlier than expected. I'd definitely recommend it to anyone who needs their passport fast."
  },
  {
    id: '2',
    author: 'Leonida',
    location: 'UAE',
    content: "I have been in the UAE for around 30+ years and have never experienced this level of convenience. Everything was swift; location is accessible by metro, I could go after office hours to apply for Passport renewal and staff was super friendly. It is a great news for all my fellow Filipino overseas workers in UAE that our Government has tied-up with a reputable partner."
  }
];

export const STATS = [
  { label: 'Application Centres', value: '4023' },
  { label: 'Countries of Operation', value: '166' },
  { label: 'Client Governments', value: '69' }
];
