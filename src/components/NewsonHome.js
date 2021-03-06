import React from "react";
import { Link } from "react-router-dom";
import NewsContainer from "./NewsContainer";
import {useLanguage} from '../Pages/LanguageContext'


function NewsonHome(props){
    
    const {isIndo}=useLanguage()


    return(
        <div className="container container-xl-custom ">
            <div className="row pt-5 pb-4 my-5">
                <div className="col text-center py-2">
                    <h2 class="font-weight-bold text-color-dark text-9 line-height-3 line-height-md-1 mb-2">{isIndo ? 'Berita Terakhir' : 'Latest News'}</h2>
                </div>
                <NewsContainer 
                    showPagination={false}
                    maxNews={3}
                    status = {'home'}
                    {...props}/>
                <Link to='/newspage/1' type="button" class="btn btn-primary btn-with-arrow mb-2" href="#">{isIndo ? `Lihat semua berita` : `Explore all news`}<span><i class="fas fa-chevron-right"></i></span></Link>
        </div>
        

        </div>
)
}

export default NewsonHome;