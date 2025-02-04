import { useState } from "react"
import CustomInput from "../ui/inputTest"

export default function Contact() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, content }),
      })
      const data = await response.json()
      alert(data.message)
    } catch (error) {
      alert("An error occurred, please try again later")
    }
    setName("")
    setEmail("")
    setSubject("")
    setContent("")
  }

  return (
    <div className="w-full flex items-center justify-between">
      <form className="w-full" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <CustomInput
          id={"name"}
          type={"text"}
          value={name}
          setValue={setName}
        />

        <label htmlFor="email">Email Address</label>
        <CustomInput
          id={"email"}
          type={"email"}
          value={email}
          setValue={setEmail}
        />

        <label htmlFor="subject">Subject</label>
        <CustomInput
          id={"subject"}
          type={"text"}
          value={subject}
          setValue={setSubject}
        />

        <label htmlFor="message">Message</label>
        <CustomInput
          id={"message"}
          type={"textarea"}
          value={content}
          setValue={setContent}
        />

        <button className="w-full py-4 px-3 rounded-md">SEND MESSAGE</button>
      </form>
    </div>
  )
}
