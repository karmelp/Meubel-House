import Dashboard from '../../ui/components/Dashboard';
import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import LoginRegisterForms from '../../ui/components/LoginRegisterForm';
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