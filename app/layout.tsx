import type { Metadata } from 'next';
import './globals.css';
import { ModalProvider } from '@/context/ModalContext';
import { ToastProvider } from '@/context/ToastContext';
import InquiryModal from '@/components/shared/InquiryModal';
import Toast from '@/components/shared/Toast';

export const metadata: Metadata = {
  title: 'Mohammod Air International Travels — Your Trusted Travel & Visa Partner in Bangladesh',
  description: 'Mohammod Air International Travels is Bangladesh\'s trusted travel agency offering Manpower Recruitment, Indian Visa, Tourist Visa, Air Ticketing, Hajj & Umrah, Work Permit and more.',
  keywords: 'travel agency bangladesh, manpower recruitment, indian visa, hajj umrah, air ticket dhaka, tourist visa bangladesh',
  icons: { icon: '/images/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <ModalProvider>
            {children}
            <InquiryModal />
            <Toast />
            <a className="whatsapp-float" href="https://wa.me/880XXXXXXXXXX" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
              💬
            </a>
          </ModalProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
