import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
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

            <div className="blog-section">
                <div className="blog-posts">

                </div>
                <div className="blog-navi">
                    
                </div>
            </div>

            <InfoSection />
        </div>
    )
}

export default Contact