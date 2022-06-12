import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';


import './Navbar.css';

const Navbar = () =>  {

  const menu = useRef(null);
  const navigate = useNavigate();

  const items = [
    {
        label: 'Options',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
              navigate('/')
            }
          },
          {
            label: 'Favorites',
            icon: 'pi pi-star',
            command: () => {
              navigate('/favorites')
            }
          }
        ]
    },
];

  return (
    <>
      <Menu model={items} popup ref={menu} id="popup_menu" />
      <Button className="p-button-danger" icon="pi pi-bars" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
    </>
  );

}

export default Navbar;