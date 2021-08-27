import { renderWithTheme } from "@/utils/tests/tests.helpers";

import theme from "@/styles/themes/main.theme";
import { Container } from ".";

describe("<Container />", () => {
  it("should render with correctly grid", () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Test</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      "max-width",
      theme.gridLayout.container
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: calc(10rem * 1.1);
}

@media print {

}

<section
  class="c0"
>
  <span>
    Test
  </span>
</section>
`);
  });
});
