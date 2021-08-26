import React from 'react'

import './header.css'

export const Header = () => {

    const headerTitle = 'Pokedex';
    
    return <header className='header'><h1 className='header-title'>{ headerTitle }</h1></header>
}