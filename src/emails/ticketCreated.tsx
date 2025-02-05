import * as React from "react"
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface TicketCreatedProps {
  username: string
  ticketID: string
  subject: string
  email: string
  content: string
}

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
          <Text>
            Name:<i>{username}</i>
          </Text>
          <Text>Subject:{subject}</Text>
          <Text>Message: </Text>
          <Text>{content}</Text>
          <Text>Sent via Portfolio/Contact</Text>
        </Container>
      </Body>
    </Html>
  )
}

export default TicketCreated
