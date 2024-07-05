import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { styles } from '../../style';
import { ModalContext } from '../functions/ModalPopup';

export default function Navbarmenu() {
  const { handleShow,handleClose } = useContext(ModalContext);

  return (
    <>
      <ul>
        <li className={`${styles.flexRow} gap-4 m-0 p-0 text-300`}>
          <Link onClick={handleShow}>Shop</Link>
        <Link to={"/shops/newArrivals"} onClick={handleClose}>New Arrivals</Link>
          <Link to={"/sales"} onClick={handleClose}>Sales</Link>
          <Link to={"/journal"} onClick={handleClose}>Journal</Link>
        </li>
      </ul>
    </>
  )
}
