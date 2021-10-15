import React from "react";
import Header from "../components/Header";

function Subholding(props){

    return(
        <>
        <Header
            imageUrl="img/MMS/Parallax4.jpg" 
            textZero="MMS" 
            textOne="Resources" 
            breadcrumb={[
                {name :'home',url:'/'},
                {name :'business',url :'/business'}
        ]}/>
        <h1> Hello there</h1>
        </>
    )
}
export default Subholding