import React, {useState} from 'react'
import TemparatureInput from './TemparatureInput'

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>water is boilling</p>
    }else{
        return <p>what is not boilling</p>
    }

}

function toCelsius(fahrenheit){
    return((fahrenheit -32)*5)/9;

}

function toFahrenheit(celsius){
    return(celsius*9)/5+32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) /1000;
    return rounded.toString();
}


function Calculator(props) {
    const [temperature, setTemparature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemparature(temperature);
        setScale("c");
        
    };

    const handleFahrenheitChange = (temperature) => {
        setTemparature(temperature);
        setScale("f");
    }
    const celsius = 
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit =
    scale === "c" ? tryConvert(temperature,toFahrenheit) : temperature;

  return (
    <div>
      <TemparatureInput
      scale = "c"
      temperature = {celsius}
      onTemperatureChange = {handleCelsiusChange}
      
      
      />
      <TemparatureInput
      scale = "f"
      temperature = {fahrenheit}
      onTemperatureChange = {handleFahrenheitChange}
      
      />
      <BoilingVerdict celsius ={parseFloat(celsius)}/>
    </div>
  )
}

export default Calculator
