// The project list is intentionally hardcoded. GitHub repo descriptions can't
// carry prose this specific — edit here, push, and Vercel redeploys.

export type Project = {
  name: string;
  blurb: string;
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    name: "Short Story",
    blurb:
      "Making a story video takes writing, art, voices and editing. Short Story does it from one chat message: AI writes the script, draws the scenes, voices them and edits a one-minute video.",
    live: "https://getshortstory.xyz",
  },
  {
    name: "Audio Read",
    blurb:
      "Reading long PDFs and EPUBs on a phone is tiring. Audio Read reads them aloud over the original page, highlighting each word. No account, and nothing leaves the phone.",
    live: "https://audioread-app.vercel.app",
    code: "https://github.com/aryannpanwarr/audio-read",
  },
  {
    name: "FlipFrame",
    blurb:
      "AI chats can't watch a video. FlipFrame turns one into a short PDF: only the frames where the screen changes, each with what was said. Runs fully in your browser.",
    live: "https://flipframe-psi.vercel.app",
    code: "https://github.com/aryannpanwarr/flipframe",
  },
  {
    name: "AI & Tech Weekly Digest",
    blurb:
      "Keeping up with AI news means checking dozens of sources. This pipeline collects, ranks and summarizes the week's stories with sources, then publishes itself. No human in the loop.",
    live: "https://ai-tech-digest-flax.vercel.app",
    code: "https://github.com/aryannpanwarr/ai-tech-digest",
  },
  {
    name: "QuizWiz",
    blurb:
      "Making practice questions from notes is slow. QuizWiz turns any material into a quiz, with answers and explanations.",
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
