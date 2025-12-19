export type EducationLevel = 'k-12' | 'higher-ed' | 'professional';
export type SubjectArea = 'writing' | 'math' | 'science' | 'language' | 'cs' | 'general';

export interface ScenarioAnalysis {
  lensId: string;
  consideration: string;
  discussionPrompts: string[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  context: string;
  decisionPoint: string;
  educationLevel: EducationLevel[];
  subjectArea: SubjectArea[];
  relevantLenses: string[];
  analysis: ScenarioAnalysis[];
  designImprovement: string;
}

export const scenarios: Scenario[] = [
  {
    id: 'essay-writing-assistant',
    title: 'Essay Writing Assistant',
    description: 'A student uses AI to help write a persuasive essay for English class.',
    context: 'Maya, a 10th grader, has been assigned a persuasive essay on climate change policy. She opens ChatGPT and asks it to "write a persuasive essay about why we need stronger climate policies." The AI generates a well-structured essay with clear arguments and evidence. Maya reads through it, makes a few word changes, and submits it as her own work.',
    decisionPoint: 'How should educators design this assignment to leverage AI while preserving the learning?',
    educationLevel: ['k-12', 'higher-ed'],
    subjectArea: ['writing'],
    relevantLenses: ['cognitive-ownership', 'productive-struggle'],
    analysis: [
      {
        lensId: 'cognitive-ownership',
        consideration: 'Maya did not generate the core arguments or structure the essay herself. The AI did the thinking; Maya did the editing. She may not be able to defend or explain the arguments in the essay.',
        discussionPrompts: [
          'What parts of essay writing represent the actual learning goals?',
          'How might the teacher assess whether Maya understands the content?',
          'What would Maya learn from this process versus writing it herself?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'The challenge of developing and organizing an argument was bypassed entirely. Maya never struggled with how to persuade, what evidence to use, or how to structure her ideas.',
        discussionPrompts: [
          'What productive struggles are essential to learning persuasive writing?',
          'How might AI help Maya stay in the "stretch zone" without removing the challenge?',
          'What scaffolds could support the struggle without eliminating it?'
        ]
      },
      {
        lensId: 'social-sense-making',
        consideration: 'Maya worked alone with AI rather than discussing ideas with peers. She missed opportunities to test her arguments against others\' perspectives.',
        discussionPrompts: [
          'How might peer feedback on drafts enhance the learning?',
          'Could AI facilitate rather than replace collaborative sense-making?'
        ]
      },
      {
        lensId: 'activation-energy',
        consideration: 'AI could legitimately help Maya overcome blank-page paralysis by brainstorming topics or helping her outline—without writing the essay for her.',
        discussionPrompts: [
          'What is the difference between helping someone start and doing the work for them?',
          'What AI-assisted entry points would preserve cognitive ownership?'
        ]
      },
      {
        lensId: 'access-barriers',
        consideration: 'For students with language processing differences or ELL students, AI could help with grammar and vocabulary without generating the arguments themselves.',
        discussionPrompts: [
          'What barriers might prevent students from demonstrating their persuasive thinking?',
          'How can AI address these barriers without doing the thinking?'
        ]
      }
    ],
    designImprovement: 'Redesign the assignment to require students to submit their argumentative thesis and evidence outline BEFORE any drafting. Allow AI for grammar checking and formatting, but require students to submit a recorded explanation of their argument or participate in a Socratic seminar defending their position.'
  },
  {
    id: 'math-problem-solver',
    title: 'Math Problem Solver',
    description: 'A student uses AI to check and solve homework problems.',
    context: 'Jordan, an 8th grader, is working through algebra homework involving systems of equations. After attempting the first problem and getting stuck, Jordan types the equation into an AI tool that shows the step-by-step solution. Jordan copies the method for the remaining problems, occasionally looking at the AI solution when stuck.',
    decisionPoint: 'How can math homework be designed so AI supports rather than replaces mathematical reasoning?',
    educationLevel: ['k-12'],
    subjectArea: ['math'],
    relevantLenses: ['productive-struggle', 'cognitive-ownership', 'activation-energy'],
    analysis: [
      {
        lensId: 'productive-struggle',
        consideration: 'Jordan is using AI to bypass the struggle of working through unfamiliar problems. The "stuck" moments are often where the deepest learning happens in mathematics.',
        discussionPrompts: [
          'What is the value of struggling with a math problem?',
          'At what point does "checking work" become "avoiding work"?',
          'How might Jordan develop problem-solving persistence without AI shortcuts?'
        ]
      },
      {
        lensId: 'cognitive-ownership',
        consideration: 'Jordan is following AI-provided steps without necessarily understanding WHY each step works. Pattern-matching AI solutions is different from mathematical reasoning.',
        discussionPrompts: [
          'Can Jordan explain the reasoning behind each step?',
          'What is the difference between following steps and understanding a method?',
          'How might assessment reveal whether Jordan owns the mathematical thinking?'
        ]
      },
      {
        lensId: 'activation-energy',
        consideration: 'Jordan did try the first problem before turning to AI. There may be a legitimate use for AI in helping students get "unstuck" without giving away the full solution.',
        discussionPrompts: [
          'What kind of AI assistance would help Jordan think through the problem?',
          'Could AI provide hints rather than solutions?',
          'What is the difference between a scaffold and a shortcut?'
        ]
      }
    ],
    designImprovement: 'Assign fewer problems that require students to show their reasoning process, not just answers. Include problems that ask students to find and explain errors. Use AI as a "hint generator" that provides guiding questions rather than solutions. Assess through in-class problem-solving where students must explain their thinking.'
  },
  {
    id: 'language-translation',
    title: 'Language Translation',
    description: 'Language learners use AI translation tools while learning Spanish.',
    context: 'In a high school Spanish class, students are writing short paragraphs about their daily routines. Several students write in English first, then use Google Translate or ChatGPT to convert their paragraphs to Spanish. They then copy this into their assignment and make minor adjustments.',
    decisionPoint: 'How should language teachers approach AI translation tools in the learning process?',
    educationLevel: ['k-12', 'higher-ed'],
    subjectArea: ['language'],
    relevantLenses: ['cognitive-ownership', 'productive-struggle', 'access-barriers'],
    analysis: [
      {
        lensId: 'cognitive-ownership',
        consideration: 'Students are not constructing Spanish sentences themselves. The cognitive work of word choice, grammar application, and sentence formation is outsourced to AI.',
        discussionPrompts: [
          'What mental processes are essential to language acquisition?',
          'Can you learn a language by editing AI-generated text?',
          'What would demonstrate genuine Spanish language ability?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'The struggle to express ideas in a new language—even imperfectly—is central to language learning. Translation tools eliminate this productive challenge.',
        discussionPrompts: [
          'What is learned through the effort of trying to say something in a new language?',
          'How might "good enough" imperfect attempts be more valuable than polished AI translations?',
          'What role do mistakes play in language acquisition?'
        ]
      },
      {
        lensId: 'access-barriers',
        consideration: 'Some students may have legitimate needs for translation support—vocabulary lookup, grammar checking, or pronunciation help. The question is where the line is.',
        discussionPrompts: [
          'What is the difference between using a dictionary and using a translator?',
          'When might AI translation be appropriate scaffolding vs. harmful shortcut?',
          'How might the same tool be used productively vs. unproductively?'
        ]
      }
    ],
    designImprovement: 'Focus assignments on in-class speaking and real-time conversation. Allow AI as a vocabulary/conjugation resource but not for full translation. Have students compose original work, then use AI to get feedback on grammar errors they can fix themselves. Assess through conversation, presentations, and interactive tasks.'
  },
  {
    id: 'code-generation',
    title: 'Code Generation',
    description: 'Computer science students use AI coding assistants for programming assignments.',
    context: 'In an introductory programming course, students are learning to write functions in Python. The assignment asks them to write a function that sorts a list using the bubble sort algorithm. Alex uses GitHub Copilot, which auto-completes the entire function after they type the function name and docstring.',
    decisionPoint: 'How should CS educators approach AI coding tools while teaching programming fundamentals?',
    educationLevel: ['higher-ed', 'professional'],
    subjectArea: ['cs'],
    relevantLenses: ['cognitive-ownership', 'productive-struggle', 'activation-energy'],
    analysis: [
      {
        lensId: 'cognitive-ownership',
        consideration: 'Alex did not construct the algorithm themselves. Understanding how bubble sort works—the logic of comparing, swapping, and iterating—was bypassed.',
        discussionPrompts: [
          'What is the learning goal: writing code or understanding algorithms?',
          'Could Alex explain how the code works line by line?',
          'What is the difference between using code and understanding code?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'Working through the logic of an algorithm, debugging errors, and iterating on solutions are core to learning programming. AI eliminated this productive struggle.',
        discussionPrompts: [
          'What do students learn from debugging their own code?',
          'How might struggling with algorithm design build problem-solving skills?',
          'At what skill level might AI code completion be appropriate?'
        ]
      },
      {
        lensId: 'activation-energy',
        consideration: 'AI could help students get started by providing syntax help, explaining error messages, or offering pseudo-code scaffolds without generating the full solution.',
        discussionPrompts: [
          'What kinds of AI assistance help without harming learning?',
          'Could AI explain concepts or syntax without writing the code?',
          'What is the pedagogical value of starting from scratch vs. from a template?'
        ]
      }
    ],
    designImprovement: 'Require students to write pseudo-code by hand before any coding. Use live coding assessments where students must build and explain solutions in real-time. Design assignments that focus on novel problems AI has not seen. Allow AI for syntax help but require submission of a code explanation document.'
  },
  {
    id: 'research-summarization',
    title: 'Research Summarization',
    description: 'A college student uses AI to summarize research articles for a literature review.',
    context: 'Sarah, a junior writing a research paper, has 15 academic articles to review. She uploads each article to an AI tool and asks for summaries, key findings, and relevant quotes. She then uses these AI-generated summaries to write her literature review without reading the full articles.',
    decisionPoint: 'How can research assignments be designed to ensure genuine engagement with sources?',
    educationLevel: ['higher-ed'],
    subjectArea: ['writing', 'general'],
    relevantLenses: ['cognitive-ownership', 'productive-struggle', 'social-sense-making'],
    analysis: [
      {
        lensId: 'cognitive-ownership',
        consideration: 'Sarah is not constructing her understanding of the research. She is synthesizing AI interpretations rather than her own reading of primary sources.',
        discussionPrompts: [
          'What is lost when students do not read original sources?',
          'Can you develop expertise in a field through AI summaries alone?',
          'What does it mean to "understand" research?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'The challenge of reading dense academic prose, identifying key arguments, and synthesizing across sources is core to developing research skills. AI eliminated this.',
        discussionPrompts: [
          'What skills are built through struggling with academic reading?',
          'How might over-reliance on summaries affect long-term research ability?',
          'Is there a role for AI in helping students access difficult texts?'
        ]
      },
      {
        lensId: 'social-sense-making',
        consideration: 'Research is a conversation among scholars. By not engaging directly with the texts, Sarah misses opportunities to join that conversation authentically.',
        discussionPrompts: [
          'How does reading original sources connect students to scholarly discourse?',
          'What is lost when students engage with summaries instead of authors\' actual words?'
        ]
      }
    ],
    designImprovement: 'Require annotated bibliographies with specific quotes and student commentary. Assign fewer sources but require deeper engagement—discussion posts, presentations on individual articles. Use in-class activities where students must discuss and debate research findings from memory.'
  },
  {
    id: 'accessibility-accommodation',
    title: 'Accessibility Accommodation',
    description: 'A student with dyslexia uses AI to help access course materials.',
    context: 'Marcus, a college student with dyslexia, struggles to read lengthy assigned texts in his history course. He uses AI to convert texts to audio, simplify dense passages, and help him take notes during lectures. The AI does not write his essays but helps him engage with materials that would otherwise be inaccessible.',
    decisionPoint: 'How do we distinguish between AI that removes barriers and AI that removes learning?',
    educationLevel: ['k-12', 'higher-ed'],
    subjectArea: ['general'],
    relevantLenses: ['access-barriers', 'cognitive-ownership', 'productive-struggle'],
    analysis: [
      {
        lensId: 'access-barriers',
        consideration: 'Marcus faces genuine barriers to accessing content due to his dyslexia. AI helps him access the same material as his peers, not skip the learning.',
        discussionPrompts: [
          'What is the difference between the content and the format of learning?',
          'How can AI level the playing field without lowering expectations?',
          'What accommodations help students demonstrate their actual understanding?'
        ]
      },
      {
        lensId: 'cognitive-ownership',
        consideration: 'Marcus is still doing the historical thinking—analyzing, interpreting, and forming arguments. AI changes how he accesses information, not whether he thinks about it.',
        discussionPrompts: [
          'What is the core intellectual work of studying history?',
          'How can we separate access challenges from cognitive challenges?',
          'Is Marcus\' historical understanding diminished by using AI for access?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'The productive struggle should be with historical analysis, not with decoding text. For Marcus, AI removes unproductive friction so he can engage with productive challenges.',
        discussionPrompts: [
          'What struggles are productive for history learning?',
          'Is struggling to read dense text productive for learning history?',
          'How do we ensure accommodations enable rather than circumvent learning?'
        ]
      }
    ],
    designImprovement: 'This scenario illustrates appropriate AI use. Universal Design for Learning principles suggest making this kind of AI support available to all students, not just those with documented disabilities. Focus assessment on the intellectual work (historical analysis) rather than the access mechanism (reading).'
  },
  {
    id: 'group-project',
    title: 'Group Project',
    description: 'A student group uses AI to manage and contribute to a collaborative project.',
    context: 'A team of four students is working on a biology presentation about ecosystems. One student suggests using AI to divide the work, generate an outline, create the presentation slides, and write speaker notes. The other students agree because it is efficient. They each review "their" AI-generated section and present it.',
    decisionPoint: 'How should group projects be designed to preserve collaborative learning while allowing appropriate AI use?',
    educationLevel: ['k-12', 'higher-ed'],
    subjectArea: ['science', 'general'],
    relevantLenses: ['social-sense-making', 'cognitive-ownership', 'productive-struggle'],
    analysis: [
      {
        lensId: 'social-sense-making',
        consideration: 'The team never engaged in collaborative sense-making about ecosystems. They divided AI-generated content rather than building understanding together.',
        discussionPrompts: [
          'What is lost when groups divide AI output instead of discussing content?',
          'How does collaborative learning differ from collaborative production?',
          'What social skills are developed through group academic work?'
        ]
      },
      {
        lensId: 'cognitive-ownership',
        consideration: 'No student owned the thinking about the project as a whole. Each student became a reviewer of AI content rather than a constructor of knowledge.',
        discussionPrompts: [
          'Who "understands" ecosystems after this project?',
          'Can you learn content by reviewing AI-generated material about it?',
          'What would demonstrate genuine learning from this project?'
        ]
      },
      {
        lensId: 'productive-struggle',
        consideration: 'The productive challenges of group work—negotiating ideas, resolving disagreements, synthesizing perspectives—were all bypassed.',
        discussionPrompts: [
          'What do students learn from the friction of collaboration?',
          'How might AI have been used to enhance rather than replace group work?',
          'What struggles are essential to collaborative learning?'
        ]
      }
    ],
    designImprovement: 'Require documented evidence of collaboration: meeting notes, peer feedback, revision history showing how ideas evolved. Design projects where AI can assist (research, formatting) but cannot replace the collaborative synthesis. Include individual accountability components that assess personal understanding.'
  },
  {
    id: 'test-preparation',
    title: 'Test Preparation',
    description: 'A student uses AI to create study materials and practice for exams.',
    context: 'Before a chemistry midterm, Jamie uses AI to generate practice problems, create flashcards from the textbook, and quiz them on key concepts. The AI explains wrong answers and adjusts difficulty based on Jamie\'s responses. Jamie spends several hours studying this way.',
    decisionPoint: 'How can AI be leveraged to enhance rather than shortcut exam preparation?',
    educationLevel: ['k-12', 'higher-ed'],
    subjectArea: ['science', 'general'],
    relevantLenses: ['productive-struggle', 'activation-energy', 'cognitive-ownership'],
    analysis: [
      {
        lensId: 'productive-struggle',
        consideration: 'Jamie is engaging with challenging material and working to understand mistakes. The AI is supporting productive struggle by providing appropriate challenge and feedback.',
        discussionPrompts: [
          'How does this use of AI differ from the essay-writing scenario?',
          'Is working through practice problems a form of productive struggle?',
          'What role does retrieval practice play in learning?'
        ]
      },
      {
        lensId: 'activation-energy',
        consideration: 'AI reduced the barrier to creating quality study materials, allowing Jamie to spend time actually studying rather than formatting flashcards.',
        discussionPrompts: [
          'Is making flashcards an important learning activity or busywork?',
          'What is gained vs. lost by having AI create study materials?',
          'How might AI-generated study materials be better or worse than student-created ones?'
        ]
      },
      {
        lensId: 'cognitive-ownership',
        consideration: 'Jamie is actively testing their own knowledge and learning from mistakes. The AI is not providing answers to the actual exam—it is helping Jamie prepare.',
        discussionPrompts: [
          'Does Jamie own the learning in this scenario?',
          'What is the difference between AI as a study tool vs. AI as a shortcut?',
          'How might educators build on this kind of productive AI use?'
        ]
      }
    ],
    designImprovement: 'This scenario illustrates largely appropriate AI use. Educators might build on this by providing AI-powered study tools that align with learning objectives, encouraging students to create their own practice questions for AI to evaluate, and discussing the metacognitive skills involved in effective studying.'
  }
];

export function getScenarioById(id: string): Scenario | undefined {
  return scenarios.find(s => s.id === id);
}

export function getScenariosByLevel(level: EducationLevel): Scenario[] {
  return scenarios.filter(s => s.educationLevel.includes(level));
}

export function getScenariosBySubject(subject: SubjectArea): Scenario[] {
  return scenarios.filter(s => s.subjectArea.includes(subject));
}

export function getScenariosByLens(lensId: string): Scenario[] {
  return scenarios.filter(s => s.relevantLenses.includes(lensId));
}
