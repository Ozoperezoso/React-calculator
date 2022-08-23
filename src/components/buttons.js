import React from 'react';
import '../stylesheets/Buttons.css'

function Button(props) {

  const esOperador = value =>{
    return isNaN(value) && (value != '.') && (value != '=');
  };

  return(
    <div className={`button-container ${esOperador(props.children)? 'operator' :''}`.trimEnd()}
      onClick={()=>props.handleClick(props.children)}>
      {props.children}
    </div>



  )

}

export default Button;