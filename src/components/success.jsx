import illustration from './../images/illustration-thank-you.svg'

const SuccessComponent = () => {
    return (<div className="flex items-center flex-col mt-[34px]">
        <img src={illustration} className="w-[144px] "/>
        <div className="w-[168px] h-[32px] rounded-[22.5px] bg-light-dark-blue flex items-center justify-center mt-6">
            <p className="text-sm text-orange ">You selected 4 out of 5</p>
        </div>
        <p className="mt-6 mb-[10px] font-bold text-2xl text-white font-overpass tracking-wide">Thank you!</p>
        <p className="text-light-gray text-sm text-center">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>);
}
 
export default SuccessComponent;