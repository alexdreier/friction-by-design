export type FrictionType = 'productive' | 'unproductive';

export interface Lens {
  id: string;
  name: string;
  frictionType: FrictionType;
  action: string; // "protect", "preserve", "reduce"
  shortDescription: string;
  fullDescription: string;
  icon: string;
  aiGuidance: string;
  questions: string[];
}

export const lenses: Lens[] = [
  {
    id: 'cognitive-ownership',
    name: 'Cognitive Ownership',
    frictionType: 'productive',
    action: 'protect',
    shortDescription: "The student's role as the thinker",
    fullDescription: "Cognitive Ownership refers to the student's role as the thinker, the one generating ideas, making decisions, and constructing meaning. This is friction we must protect. When AI takes over this role, students may appear successful without actually learning. Designing with AI requires us to shift our focus from what is produced to who did the thinking and how.",
    icon: '🧠',
    aiGuidance: "Keep the thinking with the student. AI should support the process, not replace the student's role as the meaning-maker.",
    questions: [
      "Who is doing the thinking in this scenario?",
      "Is the student generating ideas or just selecting from AI-provided options?",
      "Would the student be able to explain their reasoning without AI assistance?",
      "Is the final product an authentic reflection of student understanding?"
    ]
  },
  {
    id: 'productive-struggle',
    name: 'Productive Struggle',
    frictionType: 'productive',
    action: 'preserve',
    shortDescription: "Challenge that pushes learning forward",
    fullDescription: "Productive Struggle is the kind of challenge that pushes students just beyond their current understanding. It's the effortful engagement that makes learning stick. This is friction we want students to stay with; it's messy, uncomfortable, and essential to growth. AI can help students remain in the stretch zone, offering support without erasing the challenge itself.",
    icon: '⛰️',
    aiGuidance: "Help students stay in the stretch zone. AI should scaffold without removing the productive challenge.",
    questions: [
      "Is the AI helping the student work through difficulty or bypassing it entirely?",
      "Does the student still need to engage with challenging content?",
      "Is there room for the student to make mistakes and learn from them?",
      "Is the struggle supporting skill development or just creating frustration?"
    ]
  },
  {
    id: 'social-sense-making',
    name: 'Social Sense-Making',
    frictionType: 'productive',
    action: 'preserve',
    shortDescription: "Learning through discourse and collaboration",
    fullDescription: "Social Sense-Making happens when students build understanding through discourse, disagreement, and shared inquiry. This kind of friction is generative. The uncertainty and vulnerability of collaborative learning aren't flaws; they're essential. AI's ability to instantly deliver answers shouldn't replace these moments of shared sense-making.",
    icon: '👥',
    aiGuidance: "Protect opportunities for dialogue and collaborative meaning-making. AI shouldn't replace human interaction.",
    questions: [
      "Does this use of AI reduce opportunities for peer discussion?",
      "Are students still engaging with each other's ideas?",
      "Is there space for disagreement and negotiation of meaning?",
      "Could AI be used to enhance rather than replace collaboration?"
    ]
  },
  {
    id: 'activation-energy',
    name: 'Activation Energy',
    frictionType: 'unproductive',
    action: 'reduce',
    shortDescription: "Friction that prevents getting started",
    fullDescription: "Activation Energy is friction that makes it hard to begin: a blank page, a vague prompt, the weight of uncertainty. Without a clear invitation, students may stall before learning takes shape. AI can help make the entry feel meaningful, spark curiosity, or nudge students to lean in. It can offer just enough structure to begin while keeping the thinking with students.",
    icon: '🚀',
    aiGuidance: "Use AI to lower barriers to entry. Help students begin while preserving their ownership of the work.",
    questions: [
      "Is the student struggling to start because of unclear expectations?",
      "Could AI provide a scaffold or starting point without doing the work?",
      "Would reducing this friction help students engage more quickly with the real learning?",
      "Is the difficulty in starting actually part of the learning, or just a barrier?"
    ]
  },
  {
    id: 'access-barriers',
    name: 'Access Barriers',
    frictionType: 'unproductive',
    action: 'reduce',
    shortDescription: "Structural obstacles blocking participation",
    fullDescription: "Access Barriers are structural obstacles that block students from participating fully: dense language, rigid formats, or unclear expectations. This is unproductive friction. It introduces struggle without supporting thinking. For many learners, especially those with diverse needs, AI can be a powerful tool for reducing these barriers.",
    icon: '🚧',
    aiGuidance: "Remove barriers that prevent access. AI can translate, simplify, or adapt content without removing the learning challenge.",
    questions: [
      "Is the student struggling with the content or with accessing the content?",
      "Are there language, format, or accessibility barriers that AI could address?",
      "Would reducing this barrier change what the student learns, or just how they access it?",
      "Who is most impacted by this barrier, and how might AI help them specifically?"
    ]
  }
];

export function getLensById(id: string): Lens | undefined {
  return lenses.find(lens => lens.id === id);
}

export function getProductiveLenses(): Lens[] {
  return lenses.filter(lens => lens.frictionType === 'productive');
}

export function getUnproductiveLenses(): Lens[] {
  return lenses.filter(lens => lens.frictionType === 'unproductive');
}
