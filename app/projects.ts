// The project list is intentionally hardcoded. GitHub repo descriptions can't
// carry prose this specific — edit here, push, and Vercel redeploys.

export type Project = {
  name: string;
  blurb: string;
  live?: string;
  code: string;
};

export const projects: Project[] = [
  {
    name: "Audio Read",
    blurb:
      "An Android reader that narrates PDFs and EPUBs over the original page, highlighting each word as it goes. Uses the phone's own text-to-speech — no account, no upload, nothing leaves the device. I tried bundling Kokoro for better voices, but phones aren't fast enough yet to run it in real time.",
    live: "https://audioread-app.vercel.app",
    code: "https://github.com/aryannpanwarr/audio-read",
  },
  {
    name: "AI & Tech Weekly Digest",
    blurb:
      "A fully automated editorial pipeline — no human in the loop. Collects from RSS, Hacker News, Reddit, ArXiv and GitHub, ranks and de-duplicates, then uses Gemini to triage and write the week's digest, citing its sources for every story. Publishes and deploys itself on a schedule.",
    live: "https://ai-tech-digest-flax.vercel.app",
    code: "https://github.com/aryannpanwarr/ai-tech-digest",
  },
  {
    name: "MeshWire",
    blurb: "An info page for AI agents, served as JSON. Under construction.",
    live: "https://meshwire.vercel.app/",
    code: "https://github.com/aryannpanwarr/MeshWire",
  },
  {
    name: "QuizWiz",
    blurb:
      "Turns any source material into a quiz. Gemini generates the questions, distractors and explanations.",
    live: "https://quizwiz-silk.vercel.app",
    code: "https://github.com/aryannpanwarr/quizwiz",
  },
];

export const social = {
  email: "aryannpanwarr@gmail.com",
  github: "https://github.com/aryannpanwarr",
  linkedin: "https://www.linkedin.com/in/aryan-panwar-8b6b4b3a5/",
  x: "https://x.com/aryann39",
};
