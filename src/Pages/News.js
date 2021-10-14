import React, {useEffect,useState} from 'react'
import Header from '../components/Header';
import NewsContainer from '../components/NewsContainer';


function News(){
    console.log('about')
    return(
        <>
            <Header 
                imageUrl="img/MMS/Parallax4.jpg" 
                textZero="News" 
                textOne="" breadcrumb={[
                    {name :'home',url:'/'}
                ]}/>

            <NewsContainer/>

        </>
    )
}
export default News;