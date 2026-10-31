export interface Service {
  /** Split title, e.g. ['Residential', 'Design'] */
  title: [string, string];
  /** Short blurb used on the homepage. */
  summary: string;
  /** Longer copy used on the services page. */
  details: string;
  img: string;
}

export const SERVICES: Service[] = [
  {
    title: ['Residential', 'Design'],
    summary:
      'Warm, functional homes shaped around the way you live. We handle layout, materials, lighting and styling from first sketch to final install.',
    details:
      'Our commitment to quality ensures our clients are happy. With years of experience and continuing research, our team is ready to serve your interior design needs. We make you feel more comfortable in your home.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: ['Office', 'Design'],
    summary:
      'Workspaces that balance focus and collaboration. Acoustic planning, ergonomic furniture and brand-led finishes that people enjoy using.',
    details:
      'Workspaces that balance focus and collaboration. Acoustic planning, ergonomic furniture, and brand-led finishes that people enjoy using every single day.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: ['Hospitality', 'Design'],
    summary:
      'Hotels, cafés and restaurants with atmosphere you remember. Durable, guest-focused interiors that photograph beautifully and wear well.',
    details:
      'Hotels, cafés, and restaurants with an atmosphere you remember. Durable, guest-focused interiors that photograph beautifully and wear well over time.',
    img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: ['Commercial', 'Design'],
    summary:
      'Retail and commercial spaces designed to drive engagement — practical layouts with striking visuals that reflect your brand identity.',
    details:
      'Retail and commercial spaces designed to drive engagement. We blend practical layouts with striking visuals that reflect your brand identity.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
  },
];