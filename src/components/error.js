import React from "react";

const Error = (props)=>{
    return(
        <span style={{fontSize: '11px', color: 'red', display: 'block'}}>
            {props.text}
        </span>
    )
};

export default Error;