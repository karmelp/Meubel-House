import axiosConfig from '@/app/config/axiosConfig';

export const login = async (login: string, password: string) => {
  try {
    const response = await axiosConfig.post('/auth/login', {
      login,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Login Error: ', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosConfig.post('/auth/logout');
    return response.data;
  } catch (error) {
    console.error('Logout Error: ', error);
    throw error;
  }
};