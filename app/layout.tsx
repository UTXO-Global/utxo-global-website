import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ConfigProvider } from "antd";
import { Suspense } from "react";

import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL, SITE_IMAGE_URL, GA_TRACKING_ID } from "@/configs/common";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CCCProvider from "@/providers/ccc";
import { AppProvider } from "@/providers/app-provider";
import { ReduxProvider } from "@/redux/Provider";

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
    <html lang="en" suppressHydrationWarning={true}>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <body suppressHydrationWarning={true}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: `"Satoshi", sans-serif`,
            },
            components: {
              Pagination: {
                colorPrimary: "#0d0d0d",
                colorPrimaryBgHover: "#2C2C2C",
                colorPrimaryHover: "#2C2C2C",
                itemActiveBg: "#F5F5F5",
                itemBg: "transparent",
                size: 40,
                colorText: "#0d0d0d",
                colorBgTextActive: "#0d0d0d",
                fontSize: 16,
                colorTextDisabled: "#A7A7A7",
              },
              Collapse: {
                contentPadding: "0px",
              },
            },
          }}
        >
          <ReduxProvider>
            <CCCProvider>
              <AppProvider>
                <Suspense>
                  <Header />
                  {children}
                  <Footer />
                </Suspense>
              </AppProvider>
            </CCCProvider>
          </ReduxProvider>

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
