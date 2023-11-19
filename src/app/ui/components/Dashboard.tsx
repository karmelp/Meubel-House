'use client';
import { AuthContext } from '@/app/lib/AuthContext';
import { useContext } from 'react';
import './dashboard.scss';
import BigBtn from './BigBtn';

type Props = {}

const Dashboard = (props: Props) => {
  const context = useContext(AuthContext);

  return (
    <div className='dashboard-component'>
      <h5>Welcome to Dashboard!</h5>
      <BigBtn onClick={context.logout} title="Log out" />
    </div>
  );
};

export default Dashboard;