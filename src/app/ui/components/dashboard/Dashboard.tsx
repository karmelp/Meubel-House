'use client';
import { useContext } from 'react';

import { AuthContext } from '@/app/lib/AuthContext';

import BigBtn from '../bigBtn/BigBtn';

import './dashboard.scss';

const Dashboard = () => {
  const context = useContext(AuthContext);

  return (
    <div className='dashboard-component'>
      <h5>Welcome to Dashboard!</h5>
      <BigBtn onClick={context.logout} title="Log out" />
    </div>
  );
};

export default Dashboard;