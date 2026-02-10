import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { EmailSignature } from "./email-signature";

type props = {
  fullName: string;
  email: string;
};
export const EmailTemplateContactUsThankyou = ({ fullName, email }: props) => {
  const displayName = fullName && fullName.trim() ? 
    fullName.trim().split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ') : 'Guest';

  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>{"Thank You for Contacting TS GLOBAL TECH"}</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Text style={textStyle.base}>{`Dear ${displayName},`}</Text>
          <Text
            style={textStyle.base}
          >{`Thank you for contacting TS GLOBAL TECH. Our team will respond to your query/message shortly.`}</Text>

          <Text></Text>
          <EmailSignature/>
        </Container>
      </Body>
    </Html>
  );
};
