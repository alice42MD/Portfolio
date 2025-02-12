import { useForm, SubmitHandler } from "react-hook-form"
import { useContext, useState } from "react"
import CustomInput from "../ui/customInput"
import { AlertContext } from "../ui/alert/alertContext"
import ErrorInputForm from "../ui/errorInputForm"

export type Inputs = {
  name: string
  email: string
  subject: string
  content: string
}

export default function Contact() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [content, setContent] = useState<string>("")

  const { showAlert } = useContext(AlertContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const { name, email, subject, content } = data
      const response = await fetch(`/api/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, content }),
      })
      const dataResponse = await response.json()
      showAlert("Success", dataResponse.message)
    } catch (error) {
      showAlert("Error", "An error occurred, please try again later.")
    }
    setName("")
    setEmail("")
    setSubject("")
    setContent("")
  }

  console.log("errors", errors)

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-row justify-between items-center min-h-[35px]">
        <label htmlFor="name">Full Name</label>
        <ErrorInputForm errors={errors} value={"name"} />
      </div>
      <CustomInput
        id={"name"}
        type={"text"}
        value={name}
        setValue={setName}
        formValidation={{
          pattern: /^[A-Za-z]+$/i,
          label: "name",
          register,
          required: true,
        }}
      />

      <div className="flex flex-row justify-between items-center min-h-[35px]">
        <label htmlFor="email">Email Address</label>
        <ErrorInputForm errors={errors} value={"email"} />
      </div>
      <CustomInput
        id={"email"}
        type={"email"}
        value={email}
        setValue={setEmail}
        formValidation={{
          label: "email",
          register,
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        }}
      />

      <div className="flex flex-row justify-between items-center min-h-[35px]">
        <label htmlFor="subject">Subject</label>
        <ErrorInputForm errors={errors} value={"subject"} />
      </div>
      <CustomInput
        id={"subject"}
        type={"text"}
        value={subject}
        setValue={setSubject}
        formValidation={{
          label: "subject",
          register,
          required: true,
        }}
      />

      <div className="flex flex-row justify-between items-center min-h-[35px]">
        <label htmlFor="content">Message</label>
        <ErrorInputForm errors={errors} value={"content"} />
      </div>
      <CustomInput
        id={"content"}
        type={"textarea"}
        value={content}
        setValue={setContent}
        formValidation={{
          label: "content",
          register,
          required: true,
        }}
      />

      <button type="submit" className="w-full py-4 px-3 rounded-md">
        SEND MESSAGE
      </button>
    </form>
  )
}
