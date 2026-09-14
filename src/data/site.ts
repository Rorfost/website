export type Project = {
  name: string;
  description: string;
  status: 'Live' | 'In progress';
  url: string;
};

export type ExternalLink = {
  label: string;
  url: string;
};

export const site = {
  name: 'Rorfost',
  tagline: 'Building useful software, SaaS products, and digital tools.',
  description:
    'Rorfost is an independent software brand creating focused products and digital tools.',
  githubUrl: 'https://github.com/rorfost',
  contactEmail: undefined as string | undefined,
  socialLinks: [] as ExternalLink[],
  projects: [] as Project[],
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;
