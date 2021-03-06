import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

import { TypographyProps } from "@/components/Typography/Typography.types";

import { RadioColor } from "@/types";

type RadioValue = string | ReadonlyArray<string> | number | undefined;

export type LabelProps = Pick<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

type Attributes = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "className" | "value" | "name" | "checked" | "disabled"
>;

export type RadioProps = {
  onValue?: (value: RadioValue) => void;
  label?: TypographyProps<LabelProps>;
  color?: RadioColor;
} & Attributes;

export type InputProps = Pick<RadioProps, "color" | "disabled">;
