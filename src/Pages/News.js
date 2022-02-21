import React, {useEffect,useState} from 'react'
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import NewsContainer from '../components/NewsContainer';


function News(props){
    return(
        <>
            {/* <Header 
                imageUrl="img/MMS/Parallax4.jpg" 
                textZero="Berita" 
                textOne="" breadcrumb={[
                    {name :'Beranda',url:'/'}
                ]}/> */}
            <div style={{height:'100px'}}/>
            <Helmet>
            <title>Berita | MMS Group Indonesia</title>
        </Helmet>

            <NewsContainer 
                showPagination={true}
                maxNews={6}
                status = {'news'}
                {...props}
                />

        </>
    )
}
export default News;