import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `${process.env.VERCEL_URL || "http://localhost:3000"}/api/`,
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
          },
          body: JSON.stringify({ name, email, subject, content }),
        }
      )
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
        <label htmlFor="name" className="opacity-60">
          Full Name
        </label>
        <input
          type="text"
          className="w-full mb-3"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className="opacity-60">
          Email Address
        </label>
        <input
          type="email"
          className="w-full mb-3 caret-underscore"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="subject" className="opacity-60">
          Subject
        </label>
        <input
          type="text"
          className="w-full mb-3 caret-underscore"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <label htmlFor="message" className="opacity-60">
          Message
        </label>
        <textarea
          rows={5}
          className="w-full mb-3 caret-underscore"
          id="message"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="w-full py-4 px-3 rounded-md">SEND MESSAGE</button>
      </form>
    </div>
  )
}
