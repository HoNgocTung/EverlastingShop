import './sanpham.css'
import React, { useState, useEffect } from 'react';
import { ShoppingCartOutlined, HeartOutlined, CaretLeftOutlined, CaretRightOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from 'antd';

export const Sanpham = () => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block',width:'40px',height:'40px', background: 'gray', borderRadius: '50%' }}
            onClick={onClick}
          >
            <CaretRightOutlined style={{ color: '#f2f2f2', fontSize: '40px' }} />
          </div>
        );
      }
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', width:'40px',height:'40px',background: 'gray', borderRadius: '50%' }}
            onClick={onClick}
          >
            <CaretLeftOutlined  style={{ color: '#f2f2f2', fontSize: '40px' }} />
          </div>
        );
      }
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const products = [
        { id: 1, img: "img/sanpham/h1.png", name: "Product 1", price: "250.000 đ" },
        { id: 2, img: "img/sanpham/h2.jpg", name: "Product 2", price: "250.000 đ" },
        { id: 3, img: "img/sanpham/h3.jpg", name: "Product 3", price: "250.000 đ" },
        { id: 4, img: "img/sanpham/h1.png", name: "Product 4", price: "250.000 đ" },
        { id: 5, img: "img/sanpham/h3.jpg", name: "Product 5", price: "250.000 đ" },
        { id: 6, img: "img/sanpham/h2.jpg", name: "Product 6", price: "250.000 đ" },
      ];
      const products_sell = [
        { id: 1, img: "img/sanpham/h1.png", name: "Product 1", price: "250.000 đ" },
        { id: 2, img: "img/sanpham/h2.jpg", name: "Product 2", price: "250.000 đ" },
        { id: 3, img: "img/sanpham/h3.jpg", name: "Product 3", price: "250.000 đ" },
        { id: 4, img: "img/sanpham/h1.png", name: "Product 4", price: "250.000 đ" },
        { id: 5, img: "img/sanpham/h2.jpg", name: "Product 5", price: "250.000 đ" },
        { id: 6, img: "img/sanpham/h3.jpg", name: "Product 6", price: "250.000 đ" },
      ];
    const initialTime = 48 * 60 * 60; // 48 hours in seconds

    const [time, setTime] = useState(initialTime);
    useEffect(() => {
        const timer = setInterval(() => {
          setTime(prevTime => (prevTime > 0 ? prevTime - 1 : initialTime));
        }, 1000);
    
        return () => clearInterval(timer);
      }, [initialTime]);

      const formatTime = (time) => {
        const hours = String(Math.floor(time / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
      };    
    return<>
    <div className='product-name'> 
        <h1>Đồng hồ bán chạy</h1>

    </div>
    <div className="product-slider">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Image 
                width={200}
                src={product.img} alt={product.name}
            />
           
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <div className="btn-group">
              <button className="buy-btn"><ShoppingCartOutlined /></button>
              <button className="wishlist-btn"><HeartOutlined /></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <div className='product-name'> 
        <h1>Đồng Hồ Khuyến Mãi</h1>
        <div className="countdown">
          <span><ClockCircleOutlined />: {formatTime(time)}</span>
        </div>
    
    
    </div>
    <div className="product-slider">
      <Slider {...settings}>
        {products_sell.map(product => (
          <div key={product.id} className="product-card">
            <Image
                width={200}
                src={product.img} alt={product.name}
            />
            <h3>{product.name}</h3>
            <h4>{product.price}</h4>
            <div className="btn-group">
              <button className="buy-btn"><ShoppingCartOutlined /></button>
              <button className="wishlist-btn"><HeartOutlined /></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
    </>

}
export default Sanpham