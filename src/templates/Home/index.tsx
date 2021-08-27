import { memo } from "react";

import Seo from "@/components/PageSEO";

import Welcome from "@/components/Welcome";
import UserFeedbackSlider from "@/components/UserFeedbackCardSlider";
import SocialFeedback from "@/components/SocialFeedbackSession";
import { Container } from "@/components/Container";

import { HomeProps } from "./Home.types";
import * as S from "./Home.styles";

function Home({ welcome, userFeedbackSlider, socialFeedback }: HomeProps) {
  return (
    <S.Wrapper>
      <Seo
        title="Zapt"
        suffixTitleAplication="| Comprar junto é um barato"
        description="Junte seus vizinhos para comprar produtos únicos a preços imperdíveis. Juntou, comprou, chegou."
        shouldIndexPage
      />
      <Container>
        <Welcome isAnimation {...welcome} />
      </Container>
      <Container>
        <S.TitleSection text="O que as pessoas estão achando" />
        <UserFeedbackSlider {...userFeedbackSlider} />
      </Container>
      <Container>
        <S.TitleSection text="O que estão falando nas redes sociais" />
        <SocialFeedback {...socialFeedback} />
      </Container>
    </S.Wrapper>
  );
}

export default memo(Home);
