export interface Lesson {
  id: string
  title: string
  duration: string
  topic: string
  topicSlug: string
  speaker: string
  description: string
}

export const lessons: Lesson[] = [
  // Leadership & Strategy
  {
    id: 'ls-01',
    title: 'The Weight of the Captaincy',
    duration: '8:42',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Former Rugby Captain',
    description: 'What it really means to lead when every decision is scrutinized by millions.',
  },
  {
    id: 'ls-02',
    title: 'Calling the Play Under Pressure',
    duration: '7:15',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Championship Quarterback',
    description: 'How elite quarterbacks make split-second decisions that change the outcome of a season.',
  },
  {
    id: 'ls-03',
    title: 'Building a Dynasty, Not Just a Season',
    duration: '10:30',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Premier League Manager',
    description: 'The long-term thinking that separates great organizations from good ones.',
  },
  // People & Teams
  {
    id: 'pt-01',
    title: 'Trust Falls Don\'t Build Trust',
    duration: '9:18',
    topic: 'People & Teams',
    topicSlug: 'people-teams',
    speaker: 'Olympic Rowing Coach',
    description: 'Why real team trust is forged through shared adversity, not corporate retreats.',
  },
  {
    id: 'pt-02',
    title: 'The Locker Room Effect',
    duration: '6:45',
    topic: 'People & Teams',
    topicSlug: 'people-teams',
    speaker: 'NBA Team Captain',
    description: 'Creating a culture where honest feedback flows freely and egos stay in check.',
  },
  {
    id: 'pt-03',
    title: 'When Your Star Player Isn\'t a Team Player',
    duration: '8:03',
    topic: 'People & Teams',
    topicSlug: 'people-teams',
    speaker: 'Soccer Head Coach',
    description: 'Managing exceptional talent that disrupts team dynamics.',
  },
  // Performance & Pressure
  {
    id: 'pp-01',
    title: 'Performing When It Matters Most',
    duration: '7:50',
    topic: 'Performance & Pressure',
    topicSlug: 'performance-pressure',
    speaker: 'Olympic Gold Medalist',
    description: 'Mental frameworks for delivering your best when the stakes are highest.',
  },
  {
    id: 'pp-02',
    title: 'The Comeback Mindset',
    duration: '9:22',
    topic: 'Performance & Pressure',
    topicSlug: 'performance-pressure',
    speaker: 'Grand Slam Tennis Champion',
    description: 'How to turn a two-set deficit into a career-defining victory.',
  },
  {
    id: 'pp-03',
    title: 'Leading Through a Losing Streak',
    duration: '8:10',
    topic: 'Performance & Pressure',
    topicSlug: 'performance-pressure',
    speaker: 'NHL Head Coach',
    description: 'Maintaining belief and morale when results aren\'t going your way.',
  },
  // Personal Performance
  {
    id: 'per-01',
    title: 'The Off-Season Advantage',
    duration: '6:30',
    topic: 'Personal Performance',
    topicSlug: 'personal-performance',
    speaker: 'Track & Field Champion',
    description: 'Why the work you do when nobody is watching defines your career.',
  },
  {
    id: 'per-02',
    title: 'Managing Energy, Not Just Time',
    duration: '7:45',
    topic: 'Personal Performance',
    topicSlug: 'personal-performance',
    speaker: 'Triathlon World Champion',
    description: 'The science of peak performance applied to the modern workday.',
  },
  {
    id: 'per-03',
    title: 'Reinventing Yourself Mid-Career',
    duration: '9:55',
    topic: 'Personal Performance',
    topicSlug: 'personal-performance',
    speaker: 'Former Professional Cyclist',
    description: 'Lessons from athletes who successfully transitioned to new chapters.',
  },
  // Talent & Impact
  {
    id: 'ti-01',
    title: 'Scouting for Potential, Not Just Performance',
    duration: '8:20',
    topic: 'Talent & Impact',
    topicSlug: 'talent-impact',
    speaker: 'Football Scout Director',
    description: 'How to identify raw talent and develop it into sustained excellence.',
  },
  {
    id: 'ti-02',
    title: 'The Art of the Contract Negotiation',
    duration: '7:30',
    topic: 'Talent & Impact',
    topicSlug: 'talent-impact',
    speaker: 'Sports Agent',
    description: 'Negotiation strategies from someone who brokers hundred-million-dollar deals.',
  },
  {
    id: 'ti-03',
    title: 'Legacy Is What You Leave Behind',
    duration: '10:15',
    topic: 'Talent & Impact',
    topicSlug: 'talent-impact',
    speaker: 'Retired Olympic Coach',
    description: 'Building impact that outlasts your tenure and transforms an organization.',
  },
]

export const mostViewedLessons: Lesson[] = [
  {
    id: 'mv-01',
    title: 'The Weight of the Captaincy',
    duration: '8:42',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Former Rugby Captain',
    description: 'What it really means to lead when every decision is scrutinized by millions.',
  },
  {
    id: 'mv-02',
    title: 'Trust Falls Don\'t Build Trust',
    duration: '9:18',
    topic: 'People & Teams',
    topicSlug: 'people-teams',
    speaker: 'Olympic Rowing Coach',
    description: 'Why real team trust is forged through shared adversity, not corporate retreats.',
  },
  {
    id: 'mv-03',
    title: 'Performing When It Matters Most',
    duration: '7:50',
    topic: 'Performance & Pressure',
    topicSlug: 'performance-pressure',
    speaker: 'Olympic Gold Medalist',
    description: 'Mental frameworks for delivering your best when the stakes are highest.',
  },
  {
    id: 'mv-04',
    title: 'The Comeback Mindset',
    duration: '9:22',
    topic: 'Performance & Pressure',
    topicSlug: 'performance-pressure',
    speaker: 'Grand Slam Tennis Champion',
    description: 'How to turn a two-set deficit into a career-defining victory.',
  },
  {
    id: 'mv-05',
    title: 'Building a Dynasty, Not Just a Season',
    duration: '10:30',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Premier League Manager',
    description: 'The long-term thinking that separates great organizations from good ones.',
  },
  {
    id: 'mv-06',
    title: 'The Locker Room Effect',
    duration: '6:45',
    topic: 'People & Teams',
    topicSlug: 'people-teams',
    speaker: 'NBA Team Captain',
    description: 'Creating a culture where honest feedback flows freely and egos stay in check.',
  },
  {
    id: 'mv-07',
    title: 'Managing Energy, Not Just Time',
    duration: '7:45',
    topic: 'Personal Performance',
    topicSlug: 'personal-performance',
    speaker: 'Triathlon World Champion',
    description: 'The science of peak performance applied to the modern workday.',
  },
  {
    id: 'mv-08',
    title: 'Legacy Is What You Leave Behind',
    duration: '10:15',
    topic: 'Talent & Impact',
    topicSlug: 'talent-impact',
    speaker: 'Retired Olympic Coach',
    description: 'Building impact that outlasts your tenure and transforms an organization.',
  },
  {
    id: 'mv-09',
    title: 'Calling the Play Under Pressure',
    duration: '7:15',
    topic: 'Leadership & Strategy',
    topicSlug: 'leadership-strategy',
    speaker: 'Championship Quarterback',
    description: 'How elite quarterbacks make split-second decisions that change the outcome of a season.',
  },
  {
    id: 'mv-10',
    title: 'Scouting for Potential, Not Just Performance',
    duration: '8:20',
    topic: 'Talent & Impact',
    topicSlug: 'talent-impact',
    speaker: 'Football Scout Director',
    description: 'How to identify raw talent and develop it into sustained excellence.',
  },
]

export function getLessonsByTopic(topicSlug: string): Lesson[] {
  return lessons.filter((lesson) => lesson.topicSlug === topicSlug)
}
