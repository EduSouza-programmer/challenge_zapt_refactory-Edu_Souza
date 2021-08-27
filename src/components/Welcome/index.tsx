import Quotes from "@/components/Quotes";
import MediaMatch from "@/components/MediaMatch";

import Image from "./Image/index";
import { WelcomeProps } from "./Welcome.types";
import * as S from "./Welcome.styles";

function Welcome({
  userName,
  message,
  isAnimation = false,
  ...props
}: WelcomeProps) {
  return (
    <S.Wrapper isAnimation={isAnimation} {...props}>
      <Quotes isAnimation={isAnimation}>
        <S.Content>
          <div>
            <S.Title text={`Bem vindo ${userName}`} />
            <S.Message text={message} />
            <S.Question text="O que você prefere?" />
            <S.Container>
              <S.Button
                href="replace"
                label={{ text: "Criar um grupo", size: "xsmall" }}
              />
              <S.Button
                href="replace"
                label={{ text: "Entrar em um grupo", size: "xsmall" }}
              />
            </S.Container>
          </div>
          <MediaMatch greaterThan="945">
            <S.WrapperImage>
              {/*  <Image layout="fill" objectFit="cover" src="/img/welcome.svg" /> */}
              <Image isAnimation={isAnimation} />
            </S.WrapperImage>
          </MediaMatch>
        </S.Content>
      </Quotes>
      <S.MessageFooter
        text={
          <p>
            Qualquer dúvida que você tiver é só nos chamar no nosso número de
            &nbsp;
            <S.Link
              href="replace"
              label={{ text: "whatsApp", color: "blue" }}
            />
            .
          </p>
        }
      />
    </S.Wrapper>
  );
}

export default Welcome;
