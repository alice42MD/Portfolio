import { ReactNode } from "react"
import AboutMe from "../ui/content/aboutMe"
import Contact from "../ui/content/contact"
import CV from "../ui/content/cv"
import ListProjects from "../ui/content/listProjects"

type Category =
  | {
      name: string
      access: "ts-node"
      theme: "light" | "dark"
    }
  | {
      name: string
      access: "cd" | "cat" | "mail"
      child: ReactNode
    }
  | {
      name: string
      access: "open"
      action: () => Window | null
    }

type Categories = Category[]

export const categories: Categories = [
  // Components
  // { name: "Projects", access: "cd", child: <ListProjects /> },
  {
    name: "Contact",
    access: "mail",
    child: <Contact />,
  },
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
  {
    name: "light_mode.ts",
    access: "ts-node",
    theme: "light",
  },
  { name: "dark_mode.ts", access: "ts-node", theme: "dark" },
  { name: "README.md", access: "cat", child: <AboutMe /> },
]
