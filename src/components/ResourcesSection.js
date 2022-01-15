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
        scales: {
            y: {
                grid:{
                    display:false
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return  value%4===0 ? value + ' MT' : ''
                    },
                    font:{
                        size:12,
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
                        size:12,
                        color: '#777',
                        family : 'poppins'
                    }
                }
            }
        },
        plugins: {
          title: {
            display: false,
            text: 'Penjualan Dalam Jutaan Ton',
          },
          legend:{
            display: true
          },
          datalabels: {
            display: true,
            anchor : 'end',
            align : 'bottom',
            color : '#FFFFFF',
            font: {
                size: 14,
                family: 'poppins',
                weight:600,
            },
            formatter: (ctx, data) => {
              return `${ctx} mio`;
            }},
            
        },
      };

    const labels = [ '2017', '2018', '2019', '2020', '2021'];
    
    const data = {
        labels,
        datasets: [{
            label: 'Produksi',
            data: [3.5,5.5,9.1,11.0,13.9],
            backgroundColor: '#953735',
        }],
    };

    const [chosenState,setChosenState]=useState('Jakarta')
    const sliderRef = useRef();



 
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-6 mb-3 mb-lg-0'>
                       <Bar options={options} data={data}  />
                    </div>

                   <div className='col-lg-6'>
                        <div className='h-100 px-3'>
                            <div className=''>
                                <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">Penjualan</p>
                                <p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">Pertumbuhan Pesat sejak akuisisi MHU oleh MMSGI </p>
                                <p class=" mb-4 text-4">Pasca akuisisi MHU oleh MMSGI pada 2017, MHU mengalami peningkatan volume produksi batu bara yang signifikan. Terjadi peningkatan sebesar [xx]% atau setara dengan xx ton per tahun dalam 3 tahun. Hal ini membuktikan kemampuan MMSGI dalam memberikan nilai tambah untuk pengoperasian tambang batu bara.</p>
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