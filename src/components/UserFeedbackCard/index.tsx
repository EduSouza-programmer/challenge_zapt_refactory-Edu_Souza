import { UserFeedbackCardProps } from "./UserFeedbackCard.types";
import * as S from "./UserFeedbackCard.styles";

function UserFeedbackCard({ image, user, ...props }: UserFeedbackCardProps) {
  return (
    <S.Wrapper {...props}>
      <S.WrapperImage>
        <S.Image blurDataURL={image.dataBlur} src={image.src} alt={image.alt} />
      </S.WrapperImage>
      <S.Message text={user.message} />
      <S.User {...user} />
    </S.Wrapper>
  );
}

export default UserFeedbackCard;
