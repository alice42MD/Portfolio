import { ReactNode } from "react"
import AboutMe from "../content/aboutMe"
import Contact from "../content/contact"
import CV from "../content/cv"
import ListProjects from "../content/listProjects"

type Category =
  | {
      name: string
      access: "ts-node"
      theme: "light" | "dark"
    }
  | {
      name: string
      access: "cd" | "cat"
      child: ReactNode
    }
  | {
      name: string
      access: "open"
      action: () => Window | null
    }

type Categories = Category[]

export const categories: Categories = [
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
