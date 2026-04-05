export interface Program {
  name: string;
  desc: string;
  details: string;
  bullets: string[];
}

export interface PricingOption {
  label: string;
  price: string;
}

export interface PricingTier {
  category: string;
  options: PricingOption[];
}

export interface PricingGroup {
  title: string;
  tiers: PricingTier[];
}

export interface ScheduleItem {
  time: string;
  class: string;
}

export const NAV_LINKS = [
  { name: 'Programs', href: '/programs' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Contact Us', href: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    name: 'Boxing & Kickboxing',
    desc: 'Professional instruction focused on technique, safety, and athletic growth.',
    details:
      "Our boxing and kickboxing program combines traditional striking techniques with modern athletic conditioning. You'll learn proper form, footwork, and combinations while building incredible cardiovascular endurance.",
    bullets: ['Technique-focused striking', 'High-intensity conditioning', 'All experience levels welcome', 'Professional coaching'],
  },
  {
    name: 'Homeschool Fitness',
    desc: 'Engaging physical education for homeschool students of all ages.',
    details:
      'A structured physical education program designed specifically for homeschool families. We focus on foundational movement, teamwork, and building a lifelong love for fitness in a fun, social environment.',
    bullets: ['Age-appropriate exercises', 'Team building activities', 'Social interaction', 'Foundational fitness'],
  },
  {
    name: 'Tiny Warriors',
    desc: 'Introduction to martial arts for our youngest students (ages 4-6).',
    details:
      'The perfect starting point for young children. We use martial arts as a tool to teach focus, respect, and basic motor skills through fun and engaging drills.',
    bullets: ['Focus and discipline', 'Basic motor skills', 'Fun, safe environment', 'Confidence building'],
  },
  {
    name: 'Youth MMA',
    desc: 'Comprehensive mixed martial arts training for children and teens.',
    details:
      'A well-rounded program teaching the fundamentals of striking, wrestling, and grappling. We emphasize technique, sportsmanship, and personal growth for the next generation of athletes.',
    bullets: ['Striking & Grappling', 'Character development', 'Safe, supervised training', 'Skill progression'],
  },
  {
    name: 'Youth Judo',
    desc: 'Traditional Judo training focused on throws, pins, and discipline.',
    details:
      "Led by Judo black belts, this program teaches the 'Gentle Way.' Students learn effective throws and ground control while developing exceptional balance and mental fortitude.",
    bullets: ['Olympic-style Judo', 'Balance and coordination', 'Respect and tradition', 'Competitive opportunities'],
  },
  {
    name: 'Youth Sport Performance',
    desc: 'Athletic conditioning to enhance speed, power, and agility.',
    details:
      'A science-based approach to athletic development. We help young athletes improve their performance in any sport by focusing on explosive power, speed, and injury prevention.',
    bullets: ['Speed and agility', 'Strength development', 'Injury prevention', 'Sport-specific drills'],
  },
  {
    name: 'MMA Fundamentals',
    desc: 'The building blocks of mixed martial arts for adult beginners.',
    details:
      'Start your MMA journey with a solid foundation. This class covers the essential techniques of striking, clinching, and grappling in a structured, beginner-friendly format.',
    bullets: ['Core MMA techniques', 'Structured curriculum', 'Beginner-friendly', 'Safe environment'],
  },
  {
    name: 'Judo',
    desc: 'World-class Judo instruction for adults of all skill levels.',
    details:
      "Train under 'Judo Thunder' and our expert staff. Master the art of throws, sweeps, and ground transitions while building incredible functional strength and technical proficiency.",
    bullets: ['Elite-level instruction', 'Traditional techniques', 'Functional strength', 'All levels welcome'],
  },
  {
    name: 'Women’s Boxing and Kickboxing',
    desc: 'Empowering striking classes designed specifically for women.',
    details:
      'A high-energy environment where women can learn effective striking techniques while getting in the best shape of their lives. Focus on empowerment, fitness, and community.',
    bullets: ['Empowering environment', 'Full-body workout', 'Self-defense skills', 'Supportive community'],
  },
  {
    name: 'Boxing/Kickboxing Fundamentals',
    desc: 'Master the essential striking techniques from the ground up.',
    details:
      'Perfect your jab, cross, hook, and kicks. This class focuses on the technical details of striking to ensure you have a strong foundation for advanced training or fitness.',
    bullets: ['Technical precision', 'Footwork drills', 'Proper striking form', 'Foundational skills'],
  },
  {
    name: 'MMA Advanced',
    desc: 'High-level training for experienced mixed martial artists.',
    details:
      'Take your skills to the next level. This class integrates complex combinations, advanced grappling transitions, and strategic sparring for the dedicated martial artist.',
    bullets: ['Advanced techniques', 'Strategic sparring', 'Competition prep', 'Intense training'],
  },
  {
    name: 'MMA/Muay Thai Fundamentals',
    desc: "Combining the 'Art of Eight Limbs' with MMA basics.",
    details:
      'Learn to use your fists, elbows, knees, and shins effectively. This class blends traditional Muay Thai striking with the specific requirements of mixed martial arts.',
    bullets: ['Eight limbs striking', 'Clinch work', 'MMA integration', 'Technical drills'],
  },
  {
    name: 'MMA Technique and Live Rounds',
    desc: 'Refining skills through technical drills and live application.',
    details:
      'The bridge between drills and sparring. Focus on technical application in a live environment, allowing you to test your skills safely and effectively under pressure.',
    bullets: ['Live application', 'Technical refinement', 'Pressure testing', 'Safe environment'],
  },
  {
    name: 'Open Mat',
    desc: 'Unstructured training time to drill, roll, or spar with teammates.',
    details:
      "Your time to work on what you need. Whether it's drilling a specific technique, light rolling, or just getting extra rounds in, Open Mat is for self-directed improvement.",
    bullets: ['Self-directed training', 'Drilling & Sparring', 'Community building', 'Extra mat time'],
  },
  {
    name: 'All Levels No Gi Judo',
    desc: 'Adapting traditional Judo throws for No-Gi and MMA contexts.',
    details:
      'Learn how to apply powerful Judo throws without the traditional uniform. Essential for MMA and No-Gi grappling, focusing on overhooks, underhooks, and body locks.',
    bullets: ['No-Gi applications', 'Clinch throws', 'Grappling integration', 'All levels welcome'],
  },
];

export const PRICING: PricingGroup[] = [
  {
    title: 'Standard Pricing',
    tiers: [
      {
        category: 'Adult',
        options: [
          { label: '1 Class Membership', price: '$125' },
          { label: '2 Class Membership', price: '$150' },
          { label: 'Unlimited', price: '$175' },
        ],
      },
      {
        category: 'Youth',
        options: [
          { label: '1 Class Membership', price: '$99' },
          { label: '2 Class Membership', price: '$125' },
          { label: 'Unlimited', price: '$145' },
        ],
      },
      {
        category: 'Family',
        options: [
          { label: '1 Class Membership', price: '$300' },
          { label: '2 Class Membership', price: '$350' },
          { label: 'Unlimited', price: '$400' },
        ],
      },
    ],
  },
  {
    title: 'Founding 50',
    tiers: [
      {
        category: 'Adult',
        options: [
          { label: '1 Class Membership', price: '$100' },
          { label: '2 Class Membership', price: '$125' },
          { label: 'Unlimited', price: '$150' },
        ],
      },
      {
        category: 'Youth',
        options: [
          { label: '1 Class Membership', price: '$79' },
          { label: '2 Class Membership', price: '$100' },
          { label: 'Unlimited', price: '$125' },
        ],
      },
      {
        category: 'Family',
        options: [
          { label: '1 Class Membership', price: '$350' },
          { label: '2 Class Membership', price: '$400' },
          { label: 'Unlimited', price: '$450' },
        ],
      },
    ],
  },
  {
    title: 'Non-Recurring Payments',
    tiers: [
      {
        category: 'Adult',
        options: [
          { label: '1 Class Membership', price: '$135' },
          { label: '2 Class Membership', price: '$160' },
          { label: 'Unlimited', price: '$185' },
        ],
      },
      {
        category: 'Youth',
        options: [
          { label: '1 Class Membership', price: '$109' },
          { label: '2 Class Membership', price: '$135' },
          { label: 'Unlimited', price: '$155' },
        ],
      },
    ],
  },
];

export const SCHEDULE: Record<string, ScheduleItem[]> = {
  Monday: [
    { time: '10:00 - 10:50 AM', class: 'Boxing & Kickboxing' },
    { time: '11:00 - 11:50 AM', class: 'Homeschool Fitness' },
    { time: 'OPEN', class: 'OPEN' },
    { time: '3:45 - 4:20 PM', class: 'Tiny Warriors - Boxing' },
    { time: '4:30 - 5:20 PM', class: 'Youth MMA' },
    { time: '5:30 - 6:20 PM', class: 'Youth Sport Performance' },
    { time: '6:30 - 7:30 PM', class: 'MMA Fundamentals' },
    { time: '7:30 - 8:30 PM', class: 'Judo' },
    { time: '8:30 - 9:00 PM', class: 'Open Mat' },
  ],
  Tuesday: [
    { time: '10:00 - 10:50 AM', class: 'Women’s Boxing and Kickboxing' },
    { time: '11:00 - 11:50 AM', class: 'Homeschool Fitness' },
    { time: 'OPEN', class: 'OPEN' },
    { time: '3:45 - 4:20 PM', class: 'Tiny Warriors Kickboxing' },
    { time: '4:30 - 5:20 PM', class: 'Youth Judo' },
    { time: '5:30 - 6:20 PM', class: 'Youth Sport Performance' },
    { time: '6:30 - 7:30 PM', class: 'Boxing/Kickboxing Fundamentals' },
    { time: '7:30 - 8:30 PM', class: 'MMA Advanced' },
    { time: '8:30 - 9:00 PM', class: 'Open Mat' },
  ],
  Wednesday: [
    { time: '10:00 - 10:50 AM', class: 'Boxing and Kickboxing' },
    { time: '11:00 - 11:50 AM', class: 'Homeschool Fitness' },
    { time: 'OPEN', class: 'OPEN' },
    { time: '3:45 - 4:20 PM', class: 'Tiny Warriors - No Gi Judo' },
    { time: '4:30 - 5:20 PM', class: 'Youth MMA' },
    { time: '5:30 - 6:20 PM', class: 'Youth Sport Performance' },
    { time: '6:30 - 7:30 PM', class: 'MMA/Muay Thai Fundamentals' },
    { time: '7:30 - 8:30 PM', class: 'Judo' },
    { time: '8:30 - 9:00 PM', class: 'Open Mat' },
  ],
  Thursday: [
    { time: '10:00 - 10:50 AM', class: 'Women’s Boxing and Kickboxing' },
    { time: '11:00 - 11:50 AM', class: 'Homeschool Fitness' },
    { time: 'OPEN', class: 'OPEN' },
    { time: '3:45 - 4:20 PM', class: 'Tiny Warriors - Sport Performance' },
    { time: '4:30 - 5:20 PM', class: 'Youth Judo' },
    { time: '5:30 - 6:20 PM', class: 'Youth Sport Performance' },
    { time: '6:30 - 7:30 PM', class: 'Boxing and Kickboxing Fundamentals' },
    { time: '7:30 - 8:30 PM', class: 'MMA Advanced' },
    { time: '8:30 - 9:00 PM', class: 'Open Mat' },
  ],
  Friday: [
    { time: '10:00 - 10:50 AM', class: '-' },
    { time: '11:00 - 11:50 AM', class: '-' },
    { time: 'OPEN', class: 'OPEN' },
    { time: '3:45 - 4:20 PM', class: '-' },
    { time: '4:30 - 5:20 PM', class: 'MMA Technique and Live Rounds' },
    { time: '5:30 - 6:20 PM', class: 'Open Mat' },
    { time: '6:30 - 7:30 PM', class: 'CLOSED' },
    { time: '7:30 - 8:30 PM', class: 'CLOSED' },
    { time: '8:30 - 9:00 PM', class: 'CLOSED' },
  ],
  Saturday: [
    { time: '9:00 - 10:00 AM', class: 'Youth Sport Performance' },
    { time: '10:00 - 11:00 AM', class: 'All Levels No Gi Judo' },
    { time: '11:00 - 12:00 PM', class: 'Open Mat' },
  ],
};

export const BENEFITS = [
  {
    title: 'Confidence',
    desc: 'Build self-assurance through mastering techniques and overcoming challenges.',
  },
  {
    title: 'Discipline',
    desc: 'Develop focus and self-control that translates from the mat to everyday life.',
  },
  {
    title: 'Fitness',
    desc: 'Achieve peak physical condition with high-intensity athletic training.',
  },
  {
    title: 'Community',
    desc: 'Join a supportive family of athletes dedicated to mutual growth and respect.',
  },
  {
    title: 'Youth Development',
    desc: 'Empowering the next generation with life skills through martial arts.',
  },
  {
    title: 'Skill Progression',
    desc: 'Structured learning paths for all levels, from beginners to advanced athletes.',
  },
];
