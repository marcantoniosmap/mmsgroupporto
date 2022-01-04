import React, {useEffect,useState} from 'react'
import Header from '../components/Header';
import HomeSliderSlick from '../components/HomeSliderSlick';

function CSR(){

    const sliderContent=[

        {imageUrl: '/img/MMS/CSR/slider-1.jpg',
        Textline1 : 'Meningkatkan kesejahteraan masyarakat',
        Textline2 : 'di Sekitar Wilayah Pasca Tambang',
        Paragraph : 'MMS Group Indonesia melalui Yayasan Life After Mine terus mengembangkan program untuk kesejahteraan hidup masyarakat',
        CTA : null,
        },

        {imageUrl: '/img/MMS/CSR/slider-2.jpg',
        Textline1 : 'Melalui 3 Pilar Usaha ',
        Textline2 : 'Kami Mengabdi Kepada Negeri',
        Paragraph : 'Bermula dari usaha batubara, MMSGI mewujudkan bakti pada negeri melalui 3 pilar usaha: MMS Resources, MMS Land, dan MMS Solution',
        CTA : null,
        },

        {imageUrl: '/img/MMS/CSR/slider-3.jpg',
        Textline1 : 'Lewat Berbagai Inisiatif,',
        Textline2 : 'Kami Bersumbangsih Pada Negeri',
        Paragraph : 'Kami mendukung kemajuan masyarakat yang berkesinambungan melalui berbagai insiatif guna menciptakan silih asih antar sesama',
        CTA : null,
        },
        {imageUrl: '/img/MMS/CSR/slider-4.jpg',
        Textline1 : 'Lewat Berbagai Inisiatif,',
        Textline2 : 'Kami Bersumbangsih Pada Negeri',
        Paragraph : 'Kami mendukung kemajuan masyarakat yang berkesinambungan melalui berbagai insiatif guna menciptakan silih asih antar sesama',
        CTA : null,
        },
    ]
    
    return(
        <>
           <HomeSliderSlick sliderContent={sliderContent}/>
                {/* <div style={{height:'100px'}}/> */}
         
        </>
    )
}
export default CSR;