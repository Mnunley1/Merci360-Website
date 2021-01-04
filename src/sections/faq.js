/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "What is Merci?",
    contents: (
      <div>
        Merci is the only platform that rewards users for reviewing their everyday
        experiences directly with the people who take care of them.
      </div>
    ),
  },
  {
    title: "Can I have more than one account?",
    contents: (
      <div>
        No. Each user’s account is unique to their phone number and email address. If
        you would like a second account, because you work at more than one job,
        please email us contact@merci360.comand we’ll help you out.
      </div>
    ),
  },
  {
    title: `Are there any fees or costs for using Merci?`,
    contents: (
      <div>
        At this time there are no fees or costs. The service is free for all our
        users to enjoy and reward great customer service.
      </div>
    ),
  },
  {
    title: `Can I give a review to an employee who is not on Merci yet?`,
    contents: (
      <div>
        <div>
          Yes! If an employee does not come up when searching for a business, you
          have the ability to enter a name, and even a description of the employee,
          or add where in the store they worked.
        </div>
        <br />
        <div>
          We will then follow up with that business to pass along your review so they
          get it.
        </div>
      </div>
    ),
  },
  {
    title: `Can I review a business or store and not an individual?`,
    contents: (
      <div>
        Absolutely. We would encourage you to select a manager to tell them directly,
        or if they aren’t listed, select “Employee not listed” and leave your review
        about the business or store.
      </div>
    ),
  },
  {
    title: ` How long will it take for Merci to share my review to the employee?`,
    contents: (
      <div>
        <div>
          If you selected the employee during the review process, they will receive
          it instantly on their phone once you submit the review.
        </div>
        <br />
        <div>
          If you did not select an employee, but fill in their name and/or
          description, we will reach out to the business to pass this on within 30
          days of the review submission.
        </div>
      </div>
    ),
  },
  {
    title: `What will you share with the business?`,
    contents: (
      <div>
        We will share your entire review post along with any media you include. We
        will share your first name and email address so they can reach out to you,
        unless you choose to be anonymous, which then we will not share any
        information about you.
      </div>
    ),
  },
  {
    title: `Can I share my experience with a business if they do not show up in the list?`,
    contents: (
      <div>
        As of now, you can not. However, please email us at contact@merci360.comand
        share the review along with the business and any information and we will let
        the business know.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: "section.faq" }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answered"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
