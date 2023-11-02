import Hero from '@/app/ui/components/Hero';
import InfoSection from '@/app/ui/components/InfoSection';
import React from 'react'
import './blog.scss'

type Props = {}

const Contact = (props: Props) => {

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog' },
    ];

    return (
        <div className='blog-page'>
            <Hero 
                pageTitle="Blog"
                breadcrumbs={breadcrumbs}
            />

            <InfoSection />
        </div>
    )
}

export default Contact