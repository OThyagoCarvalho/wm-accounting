import * as React from 'react';
import Footer from '../components/footer/Footer';
import FormComponent from '../components/form/Form';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import '../styles/global.scss';

const IndexPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Services />
            <FormComponent />
            <Footer />
        </>
    );
};

export default IndexPage;

export const Head = () => <title>WWM Contabilidade</title>;
