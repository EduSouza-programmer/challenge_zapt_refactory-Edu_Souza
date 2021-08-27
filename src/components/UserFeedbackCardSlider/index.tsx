import UserFeedbackCard from "@/components/UserFeedbackCard";

import {
  UserFeedbackCardSliderProps,
  Settings,
} from "./UserFeedbackCardSlider.types";
import * as S from "./UserFeedbackCardSlider.styles";

const settings: Settings = {
  dots: true,
  arrows: true,
  slidesToShow: 2,

  vertical: false,
  verticalSwiping: false,
  infinite: false,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1.2,
      },
    },

    {
      breakpoint: 990,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        arrows: false,
        slidesToShow: 1.7,
      },
    },
    {
      breakpoint: 1220,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
      },
    },
  ],
  nextArrow: <S.Next />,
  prevArrow: <S.Previous />,
};

function UserFeedbackCardSlider({
  className,
  feedbackCards,
}: UserFeedbackCardSliderProps) {
  return (
    <S.Slider settings={settings} className={className}>
      {feedbackCards?.map((card) => (
        <UserFeedbackCard key={card.user.name} {...card} />
      ))}
    </S.Slider>
  );
}

export default UserFeedbackCardSlider;
