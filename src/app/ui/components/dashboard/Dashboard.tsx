import { AuthProvider, useAuth } from '@/app/lib/AuthContext';
import BigBtn from '@/app/ui/components/bigBtn/BigBtn';

import './dashboard.scss';

const Dashboard: React.FC = () => {
  const { signout } = useAuth();

  return (
    <AuthProvider>
      <div className='dashboard-component'>
        <h5>Welcome to Dashboard!</h5>
        <BigBtn title='Log out' onClick={signout} />
      </div>
    </AuthProvider>
  );
};

export default Dashboard;
