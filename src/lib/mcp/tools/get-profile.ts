import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const PROFILE = {
  name: "Rohan Holegadde Suresh",
  title: "Software Engineer",
  location: "Auckland, New Zealand",
  focus: ["AI/ML", "Web Development", "Data-driven systems"],
  education: "Master's, Auckland University of Technology",
  links: {
    portfolio: "https://rohanholegaddesuresh-portfolio.lovable.app/",
    github: "https://github.com/RohanHolegaddeSuresh",
    linkedin: "https://www.linkedin.com/in/rohan-holegadde-suresh/",
  },
  summary:
    "Software Engineer based in Auckland, NZ specialising in AI/ML, web development, and data-driven systems. Master's graduate from AUT with research in AI-driven collaborative software development.",
};

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return Rohan Holegadde Suresh's professional profile summary, focus areas, education, and public links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(PROFILE, null, 2) }],
    structuredContent: PROFILE,
  }),
});
