import Hero from '@/app/ui/components/Hero';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react'
import './contact.scss'

type Props = {}

const Contact = (props: Props) => {

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'Contact', link: '/contact' },
    ];

    return (
        <div className='contact-page'>
            <Hero 
                pageTitle="Contact"
                breadcrumbs={breadcrumbs}
            />

            <InfoSection />
        </div>
    )
}

export default Contact