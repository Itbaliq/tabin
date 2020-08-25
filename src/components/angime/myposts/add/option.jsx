import React  from 'react';




const Option=(props) =>{
  if(props.id!=0){
return(<option>{props.option}</option>)
}
else{
  return("")
}
}


export default Option
