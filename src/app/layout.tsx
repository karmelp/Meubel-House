import '@/app/globals.scss';
import type { Metadata } from 'next';
import { poppins } from './ui/fonts';
import Header from './ui/components/Header';
import Footer from './ui/components/Footer';
import AuthProvider from './lib/AuthContext';
import { CartProvider } from './lib/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Meubel House',
    default: 'Meubel House',
  },
  description: 'Boutique furniture store',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className}`}>
        <CartProvider>
          <Header />
          <AuthProvider>{children}</AuthProvider>
          <Footer />
        </CartProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
