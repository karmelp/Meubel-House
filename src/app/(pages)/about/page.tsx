import Hero from '@/app/ui/components/Hero';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react'
import './about.scss'

type Props = {}

const About = (props: Props) => {

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
    ];

    return (
        <div className='about-page'>
            <Hero 
                pageTitle="About"
                breadcrumbs={breadcrumbs}
            />

            <InfoSection />
        </div>
    )
}

export default About