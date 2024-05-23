import { MenuFoldOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Dropdown} from 'antd';
import React, { useState } from 'react';
import './header.css'
const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="/login">
          Login
        </a>
      ),
    },
    // {
    //   key: '2',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="#">
    //       Đăng nhập
    //     </a>
    //   ),
    // },
    // {
    //   key: '3',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="#">
    //       3rd menu item
    //     </a>
    //   ),
    // },
  ];
  const itemss = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Đồng hồ Rado
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="#">
          Đồng hồ Casio
        </a>
      ),
    },
    // {
    //   key: '3',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="#">
    //       3rd menu item
    //     </a>
    //   ),
    // },
  ];
export const Header = () => {
    const [activeIndex, setActiveIndex] = useState(null);   
    const menuItems = [
        'Trang Chủ',
        'Sản Phẩm',
        'Blog',
        'Về Everlasting',
        'Liên Hệ'
    ];

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return<>
        <header>
        <div class="header-container">
            <div class="menu-icon">
            <MenuFoldOutlined />
             
            </div>
            <div class="logo">
                <img src="img/logo/logo.png" alt="Logo"/>
            </div>
            <div class="icons">
                <i class="fas fa-search"><SearchOutlined /></i>
                <Space direction="vertical" size={14}>
                <Dropdown
                     menu={{
                        items,
                        }}
                    placement="bottomLeft"
                >
                    <Avatar size="large" icon={<UserOutlined />} />
                </Dropdown>
                </Space>
                <i class="fas fa-shopping-cart"><ShoppingCartOutlined /></i>
            </div>
           
        </div>
        <div className="header-menu">
        <Space direction="vertical" size={14}>
        <Dropdown
        menu={{
            items,
        }}
        placement="bottomLeft"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <h3><a href='#'>Thương Hiệu</a></h3>
      </Dropdown>
      </Space>
         
            {menuItems.map((item, index) => (
                
                <div key={index}>
                    <h3            
                        className={activeIndex === index ? 'active'  : ''} 
                        onClick={() => handleClick(index)}
                    >
                        <a href="#">{item}</a>
                    </h3>
                </div>
            ))}
        </div>
    </header>
    
    </>
}
