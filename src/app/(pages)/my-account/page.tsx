// import Dashboard from '@/app/ui/components/Dashboard';
import Hero from '@/app/ui/components/Hero';
import InfoSection from '@/app/ui/components/InfoSection';
import LoginRegisterForms from '@/app/ui/components/LoginRegisterForm';
import React from 'react'

type Props = {}

const MyAccount = (props: Props) => {
    // const { isAuthenticated } = useAuth();

    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'My Account', link: '/my-account' },
    ];

    return (
        <div>
            <Hero 
                pageTitle="My Account"
                breadcrumbs={breadcrumbs}
            />
            
            <LoginRegisterForms />

            {/* {isAuthenticated ? (
                <Dashboard />
            ) : (
                <LoginRegisterForms />
            )} */}

            <InfoSection />
        </div>
    )
}

export default MyAccount