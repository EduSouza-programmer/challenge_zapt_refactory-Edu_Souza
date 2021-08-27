import { HtmlHTMLAttributes } from "react";

type Attributes = Pick<HtmlHTMLAttributes<HTMLDivElement>, "className">;

type Image = {
  src: string;
  alt?: string;
  dataBlur?: string;
};

type Size = "xsmall" | "small" | "medium" | "large";

type BorderColor = "white" | "blue";

type Color = "white" | "blue";

type Region = {
  city: string;
  state: string;
};

export type UserFeedbackBaseProps<T = unknown> = {
  image?: Image;
  size?: Size;
  borderColor?: BorderColor;
  name?: string;
  region?: Region;
  color?: Color;
} & Attributes &
  T;

export type WrapperImageProps = Pick<
  UserFeedbackBaseProps,
  "size" | "borderColor"
>;

export type TextsProps = Pick<UserFeedbackBaseProps, "size" | "color">;
