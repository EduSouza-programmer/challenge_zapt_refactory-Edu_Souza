import { WelcomeProps } from "@/components/Welcome/Welcome.types";
import { UserFeedbackCardSliderProps } from "@/components/UserFeedbackCardSlider/UserFeedbackCardSlider.types";
import { SocialFeedbackSessionProps } from "@/components/SocialFeedbackSession/SocialFeedbackSession.types";

export type HomeProps = {
  welcome: WelcomeProps;
  userFeedbackSlider: UserFeedbackCardSliderProps;
  socialFeedback: SocialFeedbackSessionProps;
};
