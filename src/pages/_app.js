import 'tailwindcss/tailwind.css';

import { ToastProvider } from '@/components/Toast';

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
