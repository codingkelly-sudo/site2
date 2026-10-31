export type WorkCategory =
  | 'residential'
  | 'hospitality'
  | 'office'
  | 'commercial';

export interface Work {
  title: string;
  category: WorkCategory;
  img: string;
}

export const WORKS: Work[] = [
  {
    title: 'Brooklyn Loft',
    category: 'residential',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Harbor Hotel',
    category: 'hospitality',
    img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Northside Office',
    category: 'office',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mainstreet Retail',
    category: 'commercial',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Park Slope Townhouse',
    category: 'residential',
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Café Lumen',
    category: 'hospitality',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Tech Hub HQ',
    category: 'office',
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'SoHo Boutique',
    category: 'commercial',
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
  },
];

/** Convert a work title to a URL-safe slug ("Brooklyn Loft" → "brooklyn-loft"). */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}