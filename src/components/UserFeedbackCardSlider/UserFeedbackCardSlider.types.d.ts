import { HtmlHTMLAttributes } from "react";

import { UserFeedbackCardProps } from "@/components/UserFeedbackCard/UserFeedbackCard.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type UserFeedbackCardSliderProps = {
  feedbackCards: UserFeedbackCardProps[];
} & Attributes;

export { Settings } from "react-slick";
