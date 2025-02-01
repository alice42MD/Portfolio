import { useState } from "react"

const projectList = [
  {
    name: "Project A",
    desc: "project A desc",
    stack: "stack A",
    link: "link A",
  },
  {
    name: "Project B",
    desc: "project B desc",
    stack: "stack B",
    link: "link B",
  },
  {
    name: "Project C",
    desc: "project C desc",
    stack: "stack C",
    link: "link C",
  },
  {
    name: "Project D",
    desc: "project D desc",
    stack: "stack D",
    link: "link D",
  },
]
export default function ListProjects() {
  const [info, setInfo] = useState({ stack: "", desc: "" })
  const renderList = () => {
    return projectList.map((project, i) => {
      return (
        <div key={i}>
          <div
            onMouseEnter={() => {
              setInfo({ desc: project.desc, stack: project.stack })
            }}
            onMouseLeave={() => setInfo({ stack: "", desc: "" })}
          >
            {project.name}
          </div>
        </div>
      )
    })
  }
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4">
        {renderList()}
      </div>
      <div>
        <div>{info.desc}</div>
        <div>{info.stack}</div>
      </div>
    </>
  )
}
