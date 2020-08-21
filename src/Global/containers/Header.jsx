import React from 'react'
import MockWindowButtons from '../components/MockWindowButtons'
import Logo from '../components/Logo'

const Header = () => {
    return (
        <>
            <div className="mock-window-btns">
                <MockWindowButtons />
            </div>
            <div className="logo m-auto text-white text-xs">
                <Logo />
            </div>
        </>
    )
}

export default Header
