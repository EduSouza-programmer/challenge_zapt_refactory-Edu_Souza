import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type WelcomeProps = {
  userName: string;
  message: string;
  isAnimation?: boolean;
} & Attributes;

export type WrapperProps = Pick<WelcomeProps, "isAnimation">;
