import React from 'react';
import '../stylesheets/buttons.css'

function Button(props) {

  const esOperador = value =>{
    return isNaN(value) && (value != '.') && (value != '=');
  };


  return(
    <div className={`button-container ${esOperador(props.children)? 'operator' :''}`.trimEnd()}>
      {props.children}
    </div>



  )

}

export default Button;