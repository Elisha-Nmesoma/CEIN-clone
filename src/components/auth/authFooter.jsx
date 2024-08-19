import React from 'react'
import { footerLogo } from '../../assets'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Navbar from '../Navigation/Navbar'

export default function AuthFooter() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
