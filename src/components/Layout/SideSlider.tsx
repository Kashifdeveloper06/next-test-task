import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const SampleNextArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        display: "block",
        textAlign: "center",
        borderRadius: "50%",
        color: "black",
        marginRight: "50px",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<CustomArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        display: "block",
        textAlign: "center",
        borderRadius: "50%",
        marginLeft: "10px",
        color: "black",
        zIndex: "100",
      }}
      onClick={onClick}
    />
  );
};

const SideSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="m-[10px] px-5 py-8">
      <div className="flex items-center justify-between mr-[50px]">
        <h2 className="mb-3 text-[30px] font-extrabold">Convert From PDF</h2>
        <span className="flex cursor-pointer items-center justify-center gap-2 rounded-[30px] bg-gray-100 px-3 py-2 font-bold ">
          ALL
          <svg
            className=" MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root h-[20px] w-[20px]"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="ChevronRightIcon"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          </svg>
        </span>
      </div>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Slider>
    </div>
  );
};

export default SideSlider;
