import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import React from 'react'
import './checkout.scss'

type Props = {}

const Checkout = (props: Props) => {

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'Checkout', link: '/checkout' },
    ];

    return (
        <div className='checkout-page'>
            <Hero 
                pageTitle="Checkout"
                breadcrumbs={breadcrumbs}
            />

            <InfoSection />
        </div>
    )
}

export default Checkout