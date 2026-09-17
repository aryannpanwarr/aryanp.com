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
    name: "FlipFrame",
    blurb:
      "Claude and ChatGPT can read text and look at images, but they can't watch a video. FlipFrame turns a video into one PDF you can drop into the chat: the few frames where the screen actually changes, each cropped to what changed, with the transcript of what was said until the next one. It all runs in the browser: speech is transcribed by a Whisper model running on your device, and the video never leaves it.",
    live: "https://flipframe-psi.vercel.app",
    code: "https://github.com/aryannpanwarr/flipframe",
  },
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
    name: "Manufac",
    blurb:
      "Plant P&IDs are usually flat scanned PDFs, so answering one question about a pump means digging through datasheets, SAP, logbooks and SOPs. Manufac digitizes the drawing with Gemini vision into a clickable diagram, links every tag to its records, and puts an assistant on top that answers only from those records, with citations. Corrections you make in chat become lessons it applies on the next scan.",
    code: "https://github.com/aryannpanwarr/manufac",
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
