import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
  SITE_IMAGE_URL,
} from "@/configs/common";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [{ url: SITE_IMAGE_URL }],
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    url: SITE_URL,
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: SITE_IMAGE_URL,
    site: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: `"Satoshi", sans-serif`,
            },
          }}
        >
          <Header />
          {children}
          <Footer />
          <ToastContainer
            autoClose={5000}
            closeOnClick
            draggable={false}
            hideProgressBar={true}
            newestOnTop={false}
            pauseOnFocusLoss={false}
            pauseOnHover={false}
            position="top-right"
            rtl={false}
          />
        </ConfigProvider>
      </body>
    </html>
  );
}
