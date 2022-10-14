import illustration from "./../images/illustration-thank-you.svg";

const SuccessComponent = (props) => {
  return (
    <div className="flex items-center flex-col mt-[34px] xl:mt-[45px]">
      <img src={illustration} className="w-[144px] xl:w-[162px]" />
      <div className="w-[168px] h-[32px] rounded-[22.5px] bg-light-dark-blue flex items-center justify-center mt-6 xl:mt-8 xl:w-[193px]">
        <p className="text-sm text-orange xl:text-[15px]">
          You selected {props.selecedValue} out of 5
        </p>
      </div>
      <p className="mt-6 mb-[10px] font-bold text-2xl text-white font-overpass tracking-wide xl:mt-8 xl:text-[28px] xl:mb-2">
        Thank you!
      </p>
      <p className="text-light-gray text-sm text-center xl:text-[15px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default SuccessComponent;
