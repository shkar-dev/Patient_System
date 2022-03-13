import React from "react";

function Button(props) {
    const classes  = "btn btn-dark mx-2 "+props.class;
    const iconClasses = " mx-2 "+ props.icon ; 
    const type = props.type;
    
  return (
    <button class={classes} type={type} onClick={props.onClick}>
      {props.title} <i class={iconClasses}></i>
    </button>
  );
}

export default Button;
// const app = initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);