import { SocialFeedbackSessionProps } from "./SocialFeedbackSession.types";
import * as S from "./SocialFeedbackSession.styles";

function SocialFeedbackSession({
  comments,
  ...props
}: SocialFeedbackSessionProps) {
  return (
    <S.Wrapper {...props}>
      {comments.map((comment) => (
        <S.SocialComments key={comment.user.name} isAnimation {...comment} />
      ))}
    </S.Wrapper>
  );
}

export default SocialFeedbackSession;
