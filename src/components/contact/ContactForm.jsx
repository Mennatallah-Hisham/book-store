import React from 'react'

const ContactForm = () => {
  return (
    <form className='form'>
        <div className="form__gp">
            <label
             className='form__label'
              htmlFor="name">
                name
            </label>
            <input
             type="txt" 
             name="name" 
             id="name" 
             className='form__input'
             required/>
        </div>



        <div className="form__gp">
            <label
             className='form__label'
             htmlFor="email">
                email
            </label>
            <input
             type="email" 
             name="email" 
             id="email" 
             className='form__input'
             required/>
        </div>

        <div className="form__gp">
            <label
             className='form__label'
             htmlFor="tel">
                phone
            </label>
            <input
             type="tel" 
             name="tel" 
             id="tel" 
             className='form__input'
             required/>
        </div>
        <div className="form__gp">
            <label className='form__label'>message</label>
            <textarea  className='form__input'></textarea>
        </div>

<div className="form__gp">
    <input 
    
    type="checkbox"
    id="msg" required />
    <label htmlFor="msg">
        keep me up to date with news and offers from time to time
    </label>
</div>

        <button className='btn btn--filled'>
            send message
        </button>
        </form>
  )
}

export default ContactForm