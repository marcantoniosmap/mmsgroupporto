import React, {useEffect,useState} from 'react'
import Header from '../components/Header';
import NewsContainer from '../components/NewsContainer';


function News(){
    console.log('about')
    return(
        <>
            {/* <Header 
                imageUrl="img/MMS/Parallax4.jpg" 
                textZero="Berita" 
                textOne="" breadcrumb={[
                    {name :'Beranda',url:'/'}
                ]}/> */}
            <div style={{height:'100px'}}/>
            <NewsContainer 
                showPagination={true}
                maxNews={7}/>

        </>
    )
}
export default News;