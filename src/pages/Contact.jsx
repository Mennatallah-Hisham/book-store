import React from 'react'
import ContactForm from '../components/contact/ContactForm';
import KeepInTouch from '../components/contact/KeepInTouch';

import Header from '../components/layout/Header';
const Contact = () => {
  return (
    <React.Fragment>
    <Header title="contact us" body="There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.
    "/>
    <div className="flex m-5">
    <KeepInTouch/>

<ContactForm/>
    </div>

    <section>

</section>

</React.Fragment>
  )
}

export default Contact