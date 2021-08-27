import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

export type QuotesProps = {
  children: React.ReactNode;
  isAnimation?: boolean;
} & Attributes;

export type WrapperProps = Pick<QuotesProps, "isAnimation">;
