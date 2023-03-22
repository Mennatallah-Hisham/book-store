

import React from 'react'

const Header = ({title , body}) => {
  return (
    <section>
            <h1>{title}</h1>
            {body &&
              <p>
             {body}
          </p>
            }
          
        </section>
  )
}

export default Header