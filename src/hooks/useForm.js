import { useState } from "react"
/*

handle input change receives as parameter a event
desectructured as 'target' and 
set a new value to the state 


returns a array of values
  1st: State value
  2nd: a function for changing the state
*/
export const useForm = (initialState = {} ) => {
  const [ values, setValues ] = useState(initialState);
  
  const reset = ( ) => {
    setValues(initialState);
  }

  const handleInputChange = ({ target }) => {
    
    setValues({
        ...values,
        [ target.name ]: target.value
    });
  }
  return [ values, handleInputChange, reset ]; 
}
