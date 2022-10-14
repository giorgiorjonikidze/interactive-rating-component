
const CardWrapper = (props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark-blue">
      <div className="main-block h-[360px] w-[327px] rounded-2xl bg-white flex flex-col item-center box-border pl-6 pr-6 xl:w-[412px] xl:h-[416px] xl:pl-8 xl:pr-9" >
        {props.children}
      </div>
    </div>
  );
};

export default CardWrapper;
