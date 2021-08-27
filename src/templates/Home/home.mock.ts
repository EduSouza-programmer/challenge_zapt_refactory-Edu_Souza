import welcome from "@/components/Welcome/Welcome.mock";
import feedbackCards from "@/components/UserFeedbackCardSlider/UserFeedbackCardSlider.mock";
import comments from "@/components/SocialFeedbackSession/SocialFeedbackSession.mock";

import { HomeProps } from "./Home.types";

export default {
  welcome,
  userFeedbackSlider: { feedbackCards },
  socialFeedback: { comments },
} as HomeProps;
