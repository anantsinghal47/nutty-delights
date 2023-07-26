import React from 'react'
import { Outlet } from 'react-router-dom'

const Cart = () => {
    return (
        <div>
            <Outlet />
            "This is the cart"
        </div>
    )
}

export default Cart
