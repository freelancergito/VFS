
export interface Country {
  name: string;
  code: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  image: string;
  summary: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  content: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Solutions = 'solutions',
  Footprint = 'footprint',
  Insights = 'insights',
  Media = 'media',
  Careers = 'careers',
  Sustainability = 'sustainability'
}
