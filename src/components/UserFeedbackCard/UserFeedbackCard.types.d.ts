import { HtmlHTMLAttributes } from "react";

import { UserFeedbackBaseProps } from "@/components/UserFeedbackBase/UserFeedbackBase.types";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Image = {
  src: string;
  alt?: string;
  dataBlur?: string;
};

type Message = {
  message: string;
};

export type UserFeedbackCardProps = {
  image: Image;
  user: UserFeedbackBaseProps<Message>;
} & Attributes;
