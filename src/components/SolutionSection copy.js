import React from 'react'

function NextButton(props){
    const {className,style, onClick } = props;
    return (
        <div
            className={`customArrow ${className}`}
            style={{ ...style, display: "block", backgroundColor: "" }}
            onClick={onClick}
        />
  )
}
export default NextButton;