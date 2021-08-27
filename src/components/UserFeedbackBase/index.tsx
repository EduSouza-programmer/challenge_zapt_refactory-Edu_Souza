import Image from "next/image";

import { UserFeedbackBaseProps } from "./UserFeedbackBase.types";
import * as S from "./UserFeedbackBase.styles";

function UserFeedbackBase({
  image,
  size = "small",
  borderColor = "white",
  name,
  region,
  color = "white",
  ...props
}: UserFeedbackBaseProps) {
  return (
    <S.Wrapper {...props}>
      <S.WrapperImage size={size} borderColor={borderColor}>
        <Image
          placeholder="blur"
          blurDataURL={image?.dataBlur || ""}
          src={image ? image.src : "/img/users/no-avatar.jpg"}
          alt={image?.alt}
          layout="fill"
          objectFit="cover"
        />
      </S.WrapperImage>
      <div>
        <S.UserName color={color} size={size} text={name || "desconhecido"} />

        {!!region && (
          <S.Region
            color={color}
            text={
              <>
                {region.city} &bull; {region.state}
              </>
            }
          />
        )}
      </div>
    </S.Wrapper>
  );
}

export default UserFeedbackBase;
