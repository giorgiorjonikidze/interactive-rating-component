
const CardWrapper = (props) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-dark-blue">
      <div className="main-block h-[360px] w-[327px] rounded-2xl bg-white flex flex-col item-center box-border pl-6 pr-6" >
        {props.children}
      </div>
    </div>
  );
};

export default CardWrapper;
