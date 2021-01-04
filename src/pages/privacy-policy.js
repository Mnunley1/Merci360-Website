/** @jsx jsx */
import React from "react";
import { jsx, Box, Container, Text, Heading, ThemeProvider } from "theme-ui";
import SectionHeader from "components/section-header";
import privacyData from "../data/privacyData";

export default function PrivacyPolicy() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader title="Privacy Policy" />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          {privacyData.map((item, index) => (
            <div>
              <Heading sx={{ color: "#000000" }}>{item.title}</Heading>
              <text>{item.contents}</text>
              <br />
            </div>
          ))}
        </Box>
      </Container>
    </section>
  );
}
