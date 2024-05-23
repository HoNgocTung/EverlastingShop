import React from 'react';
import './slideshow.css'
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  withS:'100%'
};
export const Slideshow = () => {
return<>
  <div className='Slideshow'>
    <Carousel  arrows infinite={false}>
    <div>
      <h3 style={contentStyle}><img src="img/slideshow/h1.jpg" alt="slideshow_1"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="img/slideshow/h2.jpg" alt="slideshow_2"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="img/slideshow/h3.png" alt="slideshow_3"/></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="img/slideshow/h1.jpg" alt="slideshow_4"/></h3>
    </div>
    </Carousel>
  </div>

</>

};
