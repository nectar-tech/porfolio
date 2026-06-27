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
  title: 'Product Designer',
  tagline: "Passion for crafting meaningful digital experiences.",
  bio: "I'm a multidisciplinary designer based in the intersection of beauty and function. From learning games to enterprise dashboards, I bring thoughtfulness, curiosity, and craft to every project.",
  skills: ['Figma', 'UX Research', 'Data Visualization', 'Design Systems', 'Prototyping', 'B2B / Enterprise'],
  email: 'nectarsha@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nectar-shavit/',
  whatsapp: '972547919755',
  cvUrl: '/cv.pdf',
};
