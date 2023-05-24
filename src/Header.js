import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
    <Link to='/'>
    <img className='header__logo'  src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'  alt='amazon img'/>

    </Link>
    
    <div className='header__search'>
    <input className='header__searchinput' type='text'/>
    <SearchIcon className='header__searchicon'/>
    </div>
    <div className='header__nav'>
    <div className='header__option'>
        <span className='header__optionlineone'>
           Hello, Guest
        </span>
         <span className='header__optionlineTwo'>
            Sigh In
        </span>

    </div>
       <div className='header__option'>
       <span className='header__optionlineone'>
         Return
        </span>
        <span className='header__optionlineTwo'>
          & Orders
        </span>
    </div>
    <div className='header__option'>
        <span className='header__optionlineone'>
            Your
        </span>
        <span className='header__optionlineTwo'>
           Prime
        </span>
    
    </div>
    </div>
    <Link to="/checkout">
    <div className='header__shoppingbasket'>
    <ShoppingBasketIcon/>
    <span className='header__optionlineTwo  header__basketcount'>0</span>
    </div>
    </Link>
   
    
    
    </div>
  )
}

export default Header