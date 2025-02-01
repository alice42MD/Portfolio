import AboutMe from "./content/aboutMe"
import Contact from "./content/contact"
import CV from "./content/cv"
import ListProjects from "./content/listProjects"

export const categories = [
  // theme mode
  {
    name: "light_mode.ts",
    access: "ts-node",
    theme: "light",
  },
  { name: "dark_mode.ts", access: "ts-node", theme: "dark" },
  // Components
  { name: "Projects", access: "cd", child: <ListProjects /> },
  { name: "README.md", access: "cat", child: <AboutMe /> },
  { name: "Contact", access: "cd", child: <Contact /> },
  { name: "CV", access: "cat", child: <CV /> },
  // links
  {
    name: "Linkedin",
    access: "open",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/alice-martin-998294171/",
        "_blank",
        "noopener,noreferrer"
      ),
  },
  {
    name: "Github",
    access: "open",
    action: () =>
      window.open(
        "https://github.com/alice42MD",
        "_blank",
        "noopener,noreferrer"
      ),
  },
]
