"use client";
import "./JobsSlider.scss";
import "@splidejs/react-splide/css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useRef, RefObject, useState, useEffect } from "react";

export interface JobItem {
  area: string;
  contract: string;
  description: string;
  id: number;
  language: string;
  title: string;
  unit_price: number;
  unit?: string;
}

const JobsSlider: React.FC<any> = ({ jobOpenings }) => {
  const breakPoint = 450; // 450はスマートフォンの幅を仮定
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakPoint);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleClick(1);
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const splideRef: RefObject<any> = useRef(null);

  const pcOptions = {
    type: "loop",
    perPage: 2,
    perMove: 1,
    cover: true,
    height: "12em",
  };
  
  const spOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    cover: true,
    height: "12em",
  };

  const handleClick = (number: number) => {
    splideRef.current?.go(number);
  };

  return (
    <div className="slider">
      <Splide
        ref={splideRef}
        options={isMobile ? spOptions : pcOptions}
        aria-label="Main"
        onMove={(splide: any, prev: number, next: number) => handleClick(prev)}
      >
        {jobOpenings.map((list: JobItem, index: number) => (
          <SplideSlide key={index}>
            <div className="job-summary">
              <h4>{list.title}</h4>
              <div>
                <span>{list.unit_price}</span>
                {list.unit != null ? list.unit : "万円/月"}
              </div>
              <div>{list.contract}</div>
              <div>{list.area}</div>
              <div>{list.language}</div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default JobsSlider;
