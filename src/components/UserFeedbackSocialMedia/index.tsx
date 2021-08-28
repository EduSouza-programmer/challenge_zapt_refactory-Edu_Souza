import { useRef } from "react";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";

import { UserFeedbackSocialMediaProps } from "./UserFeedbackSocialMedia.types";
import * as S from "./UserFeedbackSocialMedia.styles";

function UserFeedbackSocialMedia({
  user,
  isAnimation = false,
  ...props
}: UserFeedbackSocialMediaProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isIntesaction = useIntersectionObserver(
    wrapperRef,
    { threshold: 0.3 },
    false
  );

  /*  const randowDelay = useCallback((max: number, min: number) => {
    return String(Number(Math.random() * (max - min) + min).toFixed(1));
  }, []); */

  return (
    <S.Wrapper
      delay=""
      ref={wrapperRef}
      isAnimation={isAnimation && isIntesaction}
      {...props}
    >
      <S.Message text={user.message} />
      <S.User {...user} />
    </S.Wrapper>
  );
}

export default UserFeedbackSocialMedia;
