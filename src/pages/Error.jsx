import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Header from "../components/layout/Header";
const Error = () => {
  return (
    <React.Fragment>
    <Header title="Error page"/>

   
    <section className='error'>
      <p className='error__num'>404</p>
      <p className='txt--sec'>page not found</p>
      <p className='txt--pri'>
      The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
      </p>
    <button className="btn btn--filled">
      <Link to="/"> Home</Link>
    </button>

</section>
<Footer/>

</React.Fragment>
  )
}

export default Error