import { useState } from "react";
import { Fragment } from "react";
import star from "./../images/icon-star.svg";

const SubmitComponent = (props) => {
  const array = [1, 2, 3, 4, 5];
  const list = array.map((item) => (
    <input
      onClick={props.ratingSelectHandler}
      type="button"
      key={item}
      value={item}
      className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full focus:bg-medium-gray focus:text-white hover:text-white hover:bg-orange cursor-pointer xl:text-medium xl:w-[51px] xl:h-[51px]"
    />
  ));
  return (
    <Fragment>
      <div className="rounded-full bg-light-dark-blue w-10 h-10 flex justify-center items-center mt-6 mb-4 xl:mt-8 xl:mb-6 xl:w-12 xl:h-12 ">
        <img src={star} className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
      </div>
      <p className="font-bold text-white text-2xl mb-2.5 font-overpass xl:mb-2 xl:text-[28px]">
        How did we do?
      </p>
      <p className="font-normal text-light-gray mb-6 text-sm xl:text-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-8">{list}</div>
      <button
        onClick={props.submitHandler}
        type="sumbit"
        className="h-[45px] bg-orange text-white font-bold font-overpass tracking-[1.87px] rounded-[22.5px] active:text-orange active:bg-white cursor-pointer xl:text-[15px]"
      >
        SUBMIT
      </button>
    </Fragment>
  );
};

export default SubmitComponent;
