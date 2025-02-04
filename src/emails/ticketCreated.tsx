import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
  Tailwind,
} from "@react-email/components"

interface TicketCreatedProps {
  username: string
  ticketID: string
  subject: string
  email: string
  content: string
}

const baseUrl = process.env.VERCEL_URL || "http://localhost:3000"

export const TicketCreated = ({
  username,
  subject,
  email,
  content,
  ticketID,
}: TicketCreatedProps) => {
  return (
    <Html>
      <Head />
      <Preview>Portfolio Message</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container>
          <Hr />

          <Text>
            From:<i>{email}</i>
          </Text>
          <Text>{subject}</Text>
          <Text>{content}</Text>
          <Text>
            Sent via Portfolio/Contact
            <br />
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

TicketCreated.PreviewProps = {
  username: "alanturing",
  ticketID: "9083475",
} as TicketCreatedProps

export default TicketCreated
