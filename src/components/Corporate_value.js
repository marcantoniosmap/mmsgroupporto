import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useLanguage } from '../Pages/LanguageContext'

function Corporate_value(props){
    const {isIndo}= useLanguage()

    const valueItem=[
        {
            imageUrl:'img/MMS/value/modern.svg',
            letterBold:'M',
            continutity:'odern',
            caption: 'Untuk mencapai visi misi, MMSGI selalu siap beranjak menjadi lebih baik',
            caption_en: 'To achieve its vision and mission, MMSGI must be ready to make changes for the better'
        },
        {
            imageUrl:'img/MMS/value/meaningful.svg',
            letterBold:'M',
            continutity:'eaningful',
            caption: 'Seluruh hal yang dimulai, diterapkan dan diproduksi menghasilkan dampak positif',
            caption_en: 'Everything that is initiated, implemented and produced should have a good/positive impact',
        },
        {
            imageUrl:'img/MMS/value/synergy.svg',
            letterBold:'S',
            continutity:'ynergy',
            caption: 'Berkoordinasi dan berinteraksi untuk membuahkan hasil yang lebih baik',
            caption_en:'Collaboration and interaction to get greater production'
        },
        
        {
            imageUrl:'img/MMS/value/goaloriented.svg',
            letterBold:'G',
            continutity:'oal Oriented',
            caption: <>Fokus mencapai tujuan dengan mengedepankan <i>good corporate governance</i></>,
            caption_en:'Focus on achieving goals by prioritizing good corporate governance'
        },
        {
            imageUrl:'img/MMS/value/integrity.svg',
            letterBold:'I',
            continutity:'ntegrity',
            caption: 'Konsistensi dalam kata, perbuatan, prinsip/nilai serta karakter yang kuat',
            caption_en: 'Consistent/conformity in words, actions, principles/values, strong character'
        },
    ]

    return(
    <section class="section bg-color-grey-scale-1 section-height-1 section-no-border my-0">
    <div class="container py-3">
        <div class="row">
            <div className="col text-center py-5">
                <h3 class="font-weight-bold text-color-primary text-4-5 ls-0 mb-2">{isIndo ?'Nilai Perusahaan': 'Corporate Values'}</h3>
                <h2 class="font-weight-bold text-color-dark text-lg-11 text-9 line-height-3 line-height-md-1 mb-5">MMS Group Indonesia</h2>
            </div>
        </div>

        <div class="row justify-content-center ">
            {valueItem.map((item,index)=>
                <div class="col-lg-4 col-6 mb-5" key={index}>
                    <div class="feature-box feature-box-secondary feature-box-style-4">
                        <div class="feature-box-icon mb-2">
                            <img className='h-100' style={{minHeight:'100px'}}src={item.imageUrl}/>
                        </div>
                        <div class="feature-box-info">
                            <h4 class="mb-2 text-center"><span style={{fontWeight:900}}>{item.letterBold}</span>{item.continutity}</h4>
                            <p className=' px-lg-4 px-0 text-center'>{isIndo?item.caption: item.caption_en}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
</section>)
}

export default Corporate_value;