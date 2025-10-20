import { Component } from '@/components/ui/circular-gallery';

const teamMembers = [
  {
    image: `https://picsum.photos/seed/1/800/600?grayscale`,
    name: 'Dr. Sarah Johnson',
    role: 'CEO & Co-Founder',
    description:
      'Leading AI research with 15+ years experience in machine learning and academic publishing.',
  },
  {
    image: `https://picsum.photos/seed/2/800/600?grayscale`,
    name: 'Dr. Michael Chen',
    role: 'CTO & Co-Founder',
    description:
      'Expert in distributed systems and research automation with PhD in Computer Science.',
  },
  {
    image: `https://picsum.photos/seed/3/800/600?grayscale`,
    name: 'Dr. Emily Rodriguez',
    role: 'Head of Research',
    description: 'Specialist in systematic reviews and meta-analysis with 200+ published papers.',
  },
  {
    image: `https://picsum.photos/seed/4/800/600?grayscale`,
    name: 'Dr. James Wilson',
    role: 'Lead Data Scientist',
    description: 'Expert in NLP and knowledge extraction from academic literature.',
  },
  {
    image: `https://picsum.photos/seed/5/800/600?grayscale`,
    name: 'Dr. Lisa Thompson',
    role: 'Head of Product',
    description: 'UX researcher with focus on academic workflows and collaboration tools.',
  },
  {
    image: `https://picsum.photos/seed/6/800/600?grayscale`,
    name: 'Dr. Robert Kim',
    role: 'Senior ML Engineer',
    description: 'Specialist in transformer models and automated literature analysis.',
  },
  {
    image: `https://picsum.photos/seed/7/800/600?grayscale`,
    name: 'Dr. Maria Garcia',
    role: 'Research Director',
    description: 'Expert in bibliometrics and research impact measurement.',
  },
  {
    image: `https://picsum.photos/seed/8/800/600?grayscale`,
    name: 'Dr. David Lee',
    role: 'Head of Engineering',
    description: 'Full-stack developer with expertise in scalable research platforms.',
  },
  {
    image: `https://picsum.photos/seed/9/800/600?grayscale`,
    name: 'Dr. Anna Patel',
    role: 'Lead UX Designer',
    description: 'Design researcher focused on academic user experience and interface design.',
  },
  {
    image: `https://picsum.photos/seed/10/800/600?grayscale`,
    name: 'Dr. Thomas Brown',
    role: 'Head of Operations',
    description:
      'Operations expert with background in academic administration and project management.',
  },
];

const TeamGallery = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-black">
      <div className="w-full max-w-screen-xl mx-auto h-[80vh] overflow-hidden relative bg-black border-none shadow-none">
        <Component items={teamMembers} bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
};

export { TeamGallery };
