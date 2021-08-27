import { HtmlHTMLAttributes } from "react";

import { UserFeedbackSocialMediaProps } from "@/components/UserFeedbackSocialMedia/UserFeedbackSocialMedia.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type SocialFeedbackSessionProps = {
  comments: UserFeedbackSocialMediaProps[];
} & Attributes;
