"use client";
import "./JobsSlider.scss";
import "@splidejs/react-splide/css";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useRef, RefObject } from "react";

export interface JobItem {
  title: string;
  price: number;
  unit: string;
  type: string;
  location: string;
  language: string;
}

const JobsSlider: React.FC<any> = ({ jobOpenings }) => {

  const splideRef: RefObject<any> = useRef(null);

  const mainOptions = {
    type      : 'loop',
    perPage   : 2,
    perMove   : 1,
    cover     : true,
    height    : '12em',
  };

  const handleClick = (number: number) => {
    splideRef.current?.go(number);
  }

  return (
    <div className="slider">
      <Splide
        ref={splideRef}
        options={mainOptions}
        aria-label="Main"
        onMove={(splide: any, prev: number, next: number) => handleClick(prev)}
      >
        {jobOpenings.map((list: JobItem, index: number) => (
          <SplideSlide key={index}>
            {/* <JobSummary title={list.title} price={list.price} unit={list.unit} type={list.type} location={list.location} language={list.language}  /> */}
            <div className="job-summary">
              <h4>{list.title}</h4>
              <div>
                <span>{list.price}</span>{list.unit}
              </div>
              <div>{list.type}</div>
              <div>{list.location}</div>
              <div>{list.language}</div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default JobsSlider;