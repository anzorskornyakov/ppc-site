import faqsData from './faqs.json';

export interface FaqItem {
  q: string;
  a: string;
}

// Content lives in faqs.json (edited via /admin).
const data = faqsData as { screenPrinting: FaqItem[]; embroidery: FaqItem[]; dtf: FaqItem[] };

export const screenPrintingFaqs: FaqItem[] = data.screenPrinting;
export const embroideryFaqs: FaqItem[] = data.embroidery;
export const dtfFaqs: FaqItem[] = data.dtf;
