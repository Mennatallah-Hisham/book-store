

import React from 'react'

const Header = ({title , body}) => {
  return (
    <header className='header'>
            <h1 className="header__title">{title}</h1>
            {body &&
              <p className='header__body'>
             {body}
          </p>
            }
          
        </header>
  )
}

export default Header