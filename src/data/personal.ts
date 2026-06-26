export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  skills: string[];
  email: string;
  linkedin: string;
  whatsapp: string;
  cvUrl?: string;
}

export const personal: PersonalInfo = {
  name: 'Nectar Shavit',
  title: 'UI/UX Designer',
  tagline: 'Designing data-driven interfaces that make complex systems feel effortless.',
  bio: 'Update this with your own bio in src/data/personal.ts',
  skills: ['Figma', 'UX Research', 'Data Visualization', 'Design Systems', 'Prototyping', 'B2B / Enterprise'],
  email: 'nectarsha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nectar-shavit/',
  whatsapp: '972547919755',
  cvUrl: '/cv.pdf',
};
