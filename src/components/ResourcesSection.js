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
                        return  value%4===0 ? value + ' mio' : ''
                    }
                }
            },
            x:{
                grid:{

                    display:false
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
            align : 'top',
            font: {
                size: 14,
                weight:400,
                color : 'black'
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
            label: 'Sales',
            data: [3.3,5.4,10.5,14.2,14.5],
            backgroundColor: '#953735',
        }],
    };

    const [chosenState,setChosenState]=useState('Jakarta')
    const sliderRef = useRef();



 
    return(
        <section class=" section-height-1 section-no-border my-5">
            <div className='container container-xl-custom pb-5'>
               <div className='row'>
                   <div className='col-lg-6'>
                       <div>
                       <Bar options={options} data={data}  />
                       </div>
                    </div>

                   <div className='col-lg-6'>
                        <div className='h-100 px-3'>
                            <div className=''>
                                <p class="font-weight-semibold mb-1 mt-2 text-primary text-uppercase">Penjualan</p>
                                <p class="text-7 text-color-dark font-weight-bold negative-ls-2 mb-2">Pertumbuhan Pesat Dalam Penjualan</p>
                                <p class=" mb-4 text-4">KHS merupakana sektor properti MMSGI. Kegiatan usaha MMS Land meliputi pengelolaan pengembangan dan pengelolaan properti residensial dan komersial seperti komplek perumahan (minicity), hotel, gedung perkantoran. Selain itu, MMS Land juga mengembangkan dan mengelola data center sebagai upaya untuk penyediaan infrastruktur digital</p>
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