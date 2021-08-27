import { HtmlHTMLAttributes } from "react";
import { UserFeedbackBaseProps } from "@/components/UserFeedbackBase/UserFeedbackBase.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Message = {
  message: string;
};

export type UserFeedbackSocialMediaProps = {
  user: UserFeedbackBaseProps<Message>;
  isAnimation?: boolean;
} & Attributes;

export type WrapperProps = { delay: string } & Pick<
  UserFeedbackSocialMediaProps,
  "isAnimation"
>;
