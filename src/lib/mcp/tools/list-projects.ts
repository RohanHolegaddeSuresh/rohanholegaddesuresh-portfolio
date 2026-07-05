import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PROJECTS = [
  {
    title: "AI for Collaborative Software Development — Dissertation",
    tag: "Masters Dissertation | COMP971 | Grade: A-",
    description:
      "Systematic Mapping Study of 55 papers on AI-driven tools (Copilot, Amazon Q, ChatGPT) in collaborative software development. Recommendations for DevSecOps and AI governance.",
    github:
      "https://github.com/RohanHolegaddeSuresh/my-dissertation-AI-Collaborative-Software-Development-Systematic-Mapping-Study",
  },
  {
    title: "AgriLabour Connect — STEM Research",
    tag: "ENGE817 | Grade: B+",
    description:
      "Systematic literature review on Karnataka's agricultural labour shortage; proposes a tech platform for labour matching, training, and fair wages.",
    github:
      "https://github.com/RohanHolegaddeSuresh/rohan_masters_academicwork/tree/main/STEM",
  },
  {
    title: "AgriLabour Connect — Software Architecture",
    tag: "COMP806 | Grade: A-",
    description:
      "Architectural design using ADD methodology and 4+1 view model; scenario-based evaluation of performance, security, usability, scalability, reliability.",
    github:
      "https://github.com/RohanHolegaddeSuresh/rohan_masters_academicwork/tree/main/Software%20Architecture",
  },
  {
    title: "CompStat AI Prototype",
    tag: "Human-AI Interaction | UX/UI",
    description:
      "High-fidelity AI-assisted policing prototype for crime analysis, report generation, and predictive decision support with human oversight.",
    github:
      "https://github.com/RohanHolegaddeSuresh/rohan_masters_academicwork/tree/main/HCI",
  },
  {
    title: "NZ Job Application Tracker",
    tag: "React · Tailwind · Netlify",
    description:
      "Full-stack NZ-specific job tracker with AEWV employer verification, application checklist, analytics dashboard, and CSV export.",
    github: "https://github.com/RohanHolegaddeSuresh/rohan-job-applications-tracker",
    liveSite: "https://rohan-jobtracker.netlify.app/",
  },
  {
    title: "AI Virtual Agent — Portfolio Chatbot",
    tag: "Chatbase · Prompt Engineering",
    description:
      "Custom-trained Chatbase chatbot embedded in the portfolio, acting as an interactive virtual assistant for recruiters and visitors.",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List Rohan's featured portfolio projects with titles, tags, descriptions, and links (GitHub, live site).",
  inputSchema: {
    limit: z.number().int().min(1).max(50).optional().describe("Maximum number of projects to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const items = typeof limit === "number" ? PROJECTS.slice(0, limit) : PROJECTS;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items, count: items.length },
    };
  },
});
