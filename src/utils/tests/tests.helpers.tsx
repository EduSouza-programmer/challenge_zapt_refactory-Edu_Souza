import { ReactNode } from "react";
import {
  render,
  RenderResult,
  screen,
  ByRoleMatcher,
} from "@testing-library/react";
import ThemeProvider from "@/components/ThemeProvider";

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider>{children}</ThemeProvider>);

export const renderGet = (element: JSX.Element, getByRole: ByRoleMatcher) => {
  const { container } = renderWithTheme(element);

  return { el: screen.getByRole(getByRole), container };
};
