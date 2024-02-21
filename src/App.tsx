import React, { ReactNode, useState, useEffect } from 'react';
import './App.css';
import DateTimePicker from './component/DateTimePicker';
import TextInput from './component/TextInput';
import Button from './component/Button';
import { CalculateDeliveryFee } from './utils/util';

function InputComponent({title, children, symble}:{title:string;children:ReactNode;symble?:string;}) {
  return (
    <div className='Input-component'>
      <div className='Input-component-title-container'>
        <h2 className='Input-component-title'>{title}</h2>
      </div>
      <div className='Input-component-input-container'>
        {children}
      </div>
      <div className='Input-component-symbol-container'>
        {symble && <h2 className='Input-component-symble'>{symble}</h2>}
      </div>
    </div>
  );
}
function App() {
  const[cartValue,setCartValue] = useState<string>();
  const[deliveryDistance,setDeliveryDistance] = useState<string>();
  const[itemAmount,setItemAmount] = useState<string>();
  const[finalFee,setFinalFee] = useState<number>(0);
  const[selectedDateTime, setSelectedDateTime] = useState<Date>(new Date());
  const[isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    console.log();
    if(cartValue && deliveryDistance && itemAmount) {
      setIsDisable(false);
    }
  }, [cartValue, deliveryDistance, itemAmount]);
  
  const CalculateFinalFee = () =>{
    if(cartValue && deliveryDistance && itemAmount ){
      setFinalFee(CalculateDeliveryFee({cartValue, deliveryDistance, itemAmount,selectedDateTime}));
    }   
  };
  return (
    <div className="App">
      <div className='Delivery-fee-calculator'>
        <div className='Title'>
          <span>Delivery Fee Calculator</span>
        </div>
        <InputComponent title='Cart Value' symble ='€' >
          <TextInput 
            onInputChange={(value: string) => setCartValue(value)} 
            accessibilityLabel={'Input Cart value'} 
            accessible={true} 
            inputType={'number'}
            placeHolder='Cart value'
          />
        </InputComponent>
        <InputComponent title='Delivery distance' symble ='m' >
          <TextInput
            onInputChange={(value: string) => setDeliveryDistance(value)}
            accessibilityLabel={'Input Delivery distance'}
            accessible={true}
            inputType={'number'}
            placeHolder='Delivery distance'
          />
        </InputComponent>
        <InputComponent title='Amount of items' >
          <TextInput
            onInputChange={(value: string) => setItemAmount(value)}
            accessibilityLabel={'Input Amount of items'}
            accessible={true}
            inputType={'number'}
            placeHolder='Amount of items'
          />
        </InputComponent>
        <InputComponent title='Time' >
          <DateTimePicker
            onDateTimeChange={setSelectedDateTime}
            selectedDateTime={selectedDateTime}
            accessibilityLabel={'Pick date time'}
            accessible={true}
          />
        </InputComponent>
        <div className='Button-container'>
          <Button 
            onClick={CalculateFinalFee}
            title="Calculate"
            style={styles.calculateButton}
            isDisable={isDisable}
            accessibilityLabel ={'Calculate'}
          />
          <label  aria-label={`Delivery price: ${finalFee} €`} aria-required={true} className='Price-container'>Delivery price: {finalFee} €</label>
        </div>
       
      </div>
    </div>
  );
}

export default App;

const styles = {
  calculateButton: {
    padding: '10px',
    paddingVertical: '30px',
    fontSize: '15px',
    marginTop: '10px'
  }
};