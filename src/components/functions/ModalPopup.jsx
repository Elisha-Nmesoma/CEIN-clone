import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

  export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [shopSignUp, setShopSignUp] = useState(false);
    const [sort, setSort] = useState(false)
    const [filter, setFilter] = useState(false)
    const [bag, setBag] = useState(false)
   

    const handleShow = () => {setShowModal(true)};
    const handleClose = () => {setShowModal(false)};

    const searchOpen = () => {setShowSearch(true)};
    const searchClose = () => {setShowSearch(false)};

    const signUpShow = () => {setShopSignUp(true)};
    const signUpClose = () => {setShopSignUp(false)};

    const openSort =() =>{setSort(true)};
    const  closeSort =() =>{setSort(false)};

    const openFilter = () => {setFilter(true)};
    const closeFilter =() => {setFilter(false)};

    const openBag = () => {setBag(true)};
    const closeBag =() => {setBag(false)};

    



    return (
        <ModalContext.Provider value={{ showModal, handleShow, handleClose, bag, openBag, closeBag,  showSearch, searchOpen, searchClose,shopSignUp, signUpShow, signUpClose, sort, openSort, closeSort, filter, openFilter, closeFilter}}>
            {children}
        </ModalContext.Provider>
    );
    
};
