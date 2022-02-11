import React, { useReducer, useRef, useState } from 'react'
import Slider from 'react-slick';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
function ResourcesSection(props){

    const [windowSize,setWindowSize]=useState(window.innerWidth>992)

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        ChartDataLabels,
        Tooltip,
        Title,
      );

    const options = {
        responsive: true,
        maintainAspectRatio:false,
        scales: {
            y: {
                grid:{
                    display:false
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return (value%4===0) ? value  : ''
                    },
                    font:{
                        size:14,
                        color: '#777',
                        family : 'poppins'
                    }
                }
            },
            x:{
                grid:{
                    display:false
                }, ticks :{
                    font:{
                        size:14,
                        color: '#777',
                        family : 'poppins'
                    }
                }
            }
        },
        plugins: {

        tooltip:{
            enabled:false,
        },
          title: {
            display: windowSize,
            text: 'Penjualan Konsolidasi MMS Resources Dalam Jutaan Ton',
            padding:{
                top:0
            },
            font:{
                size:14,
                color: '#953735',
                family : 'poppins'
            },
          },
          legend:{
            display: true
          },
          datalabels: {
            display: true,
            anchor : 'end',
            align : 'bottom',
            padding:'10',
            color : '#FFFFFF',
            font: {
                size: 16,
                family: 'poppins',
                weight:500,
            },
            formatter: (ctx, data) => {
              return `${ctx.toFixed(1)}`;
            }},
            
        },
      };

    const labels = [ '2017', '2018', '2019', '2020', '2021'];
    
    const data = {
        labels,
        datasets: [{
            label: 'Penjualan',
            data: [7.7,9.7,13.0,15.6,17.5],
            backgroundColor: '#953735',
        }],
    };

    const text=`Diawali dengan PT Mitra Maju Sukses (MMS) sebagai pemasok batu bara untuk pasar domestik, MMS tumbuh menjadi perusahaan yang terpercaya. dan memperluas wilayah operasinya ke pasar ekspor.

    Dengan keahlian dan kepercayaan yang dibangun, MMSGI memperluas usahanya dengan mendirikan MMS Resources dan melakukan akuisisi beberapa tambang di Kalimantan Timur (PT Multi Harapan Utama, PKP2B) dan Kalimantan Selatan sehingga menjelma menjadi perusahaan tambang batu bara terintegrasi. 
    
    MMS Resources adalah salah satu perusahaan dengan peningkatan pertumbuhan tertinggi mencapai 126% dalam 4 tahun terakhir.
    `
 
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-6 mb-3 mb-lg-0'>
                       <div className=' h-100 '>

                            <Bar options={options} data={data}  />
                       </div>
                    </div>

                   <div className='col-lg-6'>
                        <div className='h-100 px-3'>
                            <div className=''>
                                <p class="font-weight-semibold mb-1 text-primary text-uppercase">Perdagangan Batu Bara</p>
                                <p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">Mitra Energi Terpercaya Indonesia</p>
                                <p class="text-4 mb-0" style={{whiteSpace:'pre-line'}}>
                                    {text}
                                    
                                </p>
                                {/* <p class=" mb-4 text-4">{points.description}</p> */}

                            </div>
                        </div>

                       
                   </div>
               </div>
            </div>
        </section>
    )
}
export default ResourcesSection;