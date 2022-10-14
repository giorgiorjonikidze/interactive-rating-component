import { Fragment } from "react";
import star from "./../images/icon-star.svg";

const SubmitComponent = () => {
  return (
    <Fragment>
      <div className="rounded-full bg-light-dark-blue w-10 h-10 flex justify-center items-center mt-6 mb-4">
        <img src={star} className="w-3.5 h-3.5" />
      </div>
      <p className="font-bold text-white text-2xl mb-2.5 font-overpass">
        How did we do?
      </p>
      <p className="font-normal text-light-gray mb-6 text-sm">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mb-6">
        <div className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full hover:bg-medium-gray hover:text-white active:text-white active:bg-orange cursor-pointer">
          1
        </div>
        <div className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full  hover:bg-medium-gray hover:text-white active:text-white active:bg-orange cursor-pointer">
          2
        </div>
        <div className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full  hover:bg-medium-gray hover:text-white active:text-white active:bg-orange cursor-pointer">
          3
        </div>
        <div className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full  hover:bg-medium-gray hover:text-white active:text-white active:bg-orange cursor-pointer">
          4
        </div>
        <div className="flex justify-center items-center text-medium-gray bg-light-dark-blue h-[42px] w-[42px] rounded-full  hover:bg-medium-gray hover:text-white active:text-white active:bg-orange cursor-pointer">
          5
        </div>
      </div>
      <button className="h-[45px] bg-orange text-white font-bold font-overpass tracking-[1.87px] rounded-[22.5px] active:text-orange active:bg-white cursor-pointer">
        SUBMIT
      </button>
    </Fragment>
  );
};

export default SubmitComponent;
