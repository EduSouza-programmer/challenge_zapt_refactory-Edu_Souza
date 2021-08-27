import { QuotesProps } from "./Quotes.types";
import * as S from "./Quotes.styles";

function Quotes({ children, isAnimation = false, ...props }: QuotesProps) {
  return (
    <S.Wrapper isAnimation={isAnimation} {...props}>
      <S.QuotesTop />
      {children}
      <S.QuotesBottom />
    </S.Wrapper>
  );
}

export default Quotes;
