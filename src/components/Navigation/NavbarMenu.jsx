import React, { useContext, useState } from 'react'
import { styles } from '../../style';
import { ModalContext } from '../functions/ModalPopup';
import { useLocation, Link } from 'react-router-dom';
import { shops } from '../Database/landingPageData';
import DropDown from './dropdown';
export default function Navbarmenu() {
  const location = useLocation();
  const { handleShow, handleClose } = useContext(ModalContext);
const [toggleShop, setToggleShop] = useState(false);
const shop = () => {
  setToggleShop(!toggleShop)
};
const closeShop = () => {
  setToggleShop(false)
};


  return (
    <>
      <ul>
        <li className={`${styles.flexRow} gap-4 m-0 p-0 text-300`}>
          <button onClick={shop} >Shop</button>
          <Link to={"/shops/newArrivals"} onMouseEnter={ closeShop}>New Arrivals</Link>
          <Link to={"/sales"} onClick={handleClose} onMouseEnter={ closeShop}>Sales</Link>
          <Link to={"/journal"} onClick={handleClose} onMouseEnter={ closeShop}>Journal</Link>
        </li>
      </ul> 
{toggleShop && <DropDown closeShop={closeShop} />}
     
    </>
  )
}
