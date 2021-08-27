import { GetStaticPropsResult } from "next";

import Home from "@/templates/Home";
import { HomeProps } from "@/templates/Home/Home.types";
import mock from "@/templates/Home/home.mock";

export function getStaticProps(): GetStaticPropsResult<HomeProps> {
  return {
    props: {
      welcome: mock.welcome,
      userFeedbackSlider: {
        feedbackCards: mock.userFeedbackSlider.feedbackCards,
      },
      socialFeedback: { comments: mock.socialFeedback.comments },
    },
  };
}

export default function Index(props: HomeProps) {
  return <Home {...props} />;
}
