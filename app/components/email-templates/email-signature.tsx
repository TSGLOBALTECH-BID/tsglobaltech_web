import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export const EmailSignature = () => {
  return (
    <>
      {/* <Text style={{margin:0, padding:0}}>{`Thanks & Best Regards,`}</Text>
      <Text>{`TS GLOBAL TECH`}</Text>
      <Text>{`+91 935 551 0301`}</Text>
      <Text>{`team@tsglobaltech.com`}</Text> */}
      <Section style={{ textAlign: "left" }}>
        <table style={{ width: "100%" }}>
         
         
          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 8,
                  marginBottom: 2
                }}
              >
                {`Thanks & Best Regards,`}
              </Text>
            </td>
          </tr>

           <tr style={{ width: "100%" }}>
            <td align="left">
              <Img
                src="data:image/png;base64,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"
                alt="TS GLOBAL TECH Logo"
                width="35"
                height="30"
                style={{ 
                  width: "35px", 
                  height: "30px", 
                  marginBottom: "0px",
                  display: "block",
                  border: "0px",
                  outline: "none",
                  textDecoration: "none"
                }}
              />
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 6,
                  marginBottom: 2,
                  lineHeight: "16px",
                  fontWeight: 700,
                  color:"#1bb1dc"
                }}
              >
                {`TEAM - TS GLOBAL TECH`}
              </Text>
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  lineHeight: "14px",
                }}
              >
                {`+91 935 551 0301`}
              </Text>
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  lineHeight: "16px",
                }}
              >
                {`team@tsglobaltech.com`}
              </Text>
            </td>
          </tr>
          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  lineHeight: "16px",
                }}
              >
                {`www.tsglobaltech.com`}
              </Text>
            </td>
          </tr>
        </table>
      </Section>
    </>
  );
};
