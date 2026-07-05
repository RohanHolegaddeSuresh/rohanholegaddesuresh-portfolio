import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";

export default defineMcp({
  name: "rohan-portfolio-mcp",
  title: "Rohan Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for Rohan Holegadde Suresh's portfolio. Use `get_profile` for a professional summary and links, and `list_projects` to fetch featured portfolio projects.",
  tools: [getProfile, listProjects],
});
