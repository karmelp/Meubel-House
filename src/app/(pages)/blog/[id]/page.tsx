import Hero from '../../../ui/components/Hero'
import InfoSection from '../../../ui/components/InfoSection'
import React from 'react'
import './blogPost.scss'

type Props = {}

const page = ({ params }: {
    params: {
        id: string
    }
}) => {

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog' },
        { text: `${ params.id }`, link: `/blog/${ params.id }`}
    ];

    return (
        <div className='blog-post'>
            <Hero 
                pageTitle= { params.id }
                breadcrumbs={breadcrumbs}
            />

            <InfoSection />
        </div>
    )
}

export default page