import servicesData from './services.json';

export interface Service {
  id: 'screen-printing' | 'embroidery' | 'dtf';
  name: string;
  path: string;
  sectionNum: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  minOrder: string;
  turnaround: string;
  priceLow: number;
  priceHigh: number;
}

// Content lives in services.json (edited via /admin).
export const services: Service[] = (servicesData as { services: Service[] }).services;
