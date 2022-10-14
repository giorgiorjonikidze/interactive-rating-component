import CardWrapper from "./components/cardWrapper";
import SubmitComponent from "./components/submit";
import SuccessComponent from "./components/success";
import { useState } from 'react';

function App() {
  const [selecedValue, setSelecedValue] = useState('')
  const [isSubmited, setIsSubmited] = useState(false)

  const ratingSelectHandler =(e) => {
    setSelecedValue(e.target.value)

  }

  const submitHandler = () => { 
    if(selecedValue.length !== 0) {
      setIsSubmited(true)
      console.log('submited')
    }
  }
  return (
    <CardWrapper>
      {!isSubmited && <SubmitComponent submitHandler={submitHandler} ratingSelectHandler={ratingSelectHandler} />}
     {isSubmited && <SuccessComponent selecedValue={selecedValue} />}
    </CardWrapper>
  );
}

export default App;
