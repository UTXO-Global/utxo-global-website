/* eslint-disable @next/next/no-img-element */
"use client";

import { CONTACT_MAIL } from "@/configs/common";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="py-[60px] relative overflow-hidden">
      <img
        src="/images/utxo.png"
        alt="utxo global"
        className="w-[400px] max-w-[unset] md:w-[60%] rotate-[35deg] absolute bottom-[200px] -left-[50px] md:left-0"
      />
      <div className="utxo-global-container text-base relative">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          Privacy Policy
        </h3>
        <div className="mt-10 grid gap-4">
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Introduction
            </h6>
            <p className="mt-3">
              <span>{`UTXO Global ("we", "our", "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              disclose information about you when you use our Website,
              accessible at `}</span>
              <Link href="/" className="text-orange-100 underline font-medium">
                utxo.global
              </Link>{" "}
              <span>{`("Website"), and the UTXO Global Wallet
              application ("Application").`}</span>
            </p>
          </div>
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Information We Collect
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Personal Information:</span>{" "}
                  When you create an account or use our services, we may collect
                  personal information such as your name, email address, and any
                  other information you provide.
                </li>
                <li>
                  <span className="font-medium">Usage Data:</span> We may
                  collect information about how you use our services, including
                  your IP address, browser type, operating system, and other
                  usage information.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              How We Use Your Information
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">
                    To Provide and Improve Our Services:
                  </span>{" "}
                  We use your information to operate, maintain, and improve our
                  services.
                </li>
                <li>
                  <span className="font-medium">To Communicate with You:</span>{" "}
                  We may use your information to send you updates, security
                  alerts, and support messages.
                </li>
                <li>
                  <span className="font-meidum">
                    To Comply with Legal Obligations:
                  </span>{" "}
                  We may use your information to comply with applicable laws and
                  regulations.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Sharing Your Information
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Service Providers:</span> We may
                  share your information with third-party service providers who
                  perform services on our behalf.
                </li>
                <li>
                  <span className="font-medium">Legal Requirements:</span> We
                  may disclose your information if required to do so by law or
                  in response to valid requests by public authorities.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Security
            </h6>
            <div className="mt-3">
              <p>
                We take reasonable measures to protect your information from
                unauthorized access, use, or disclosure. However, no internet or
                email transmission is ever fully secure or error-free.
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Your Choices
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Account Information:</span> You
                  may update or delete your account information at any time by
                  logging into your account.
                </li>
                <li>
                  <span className="font-medium">Cookies:</span> You can set your
                  browser to refuse all or some browser cookies or to alert you
                  when cookies are being sent.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Changes to This Privacy Policy
            </h6>
            <div className="mt-3">
              <p>
                We may update this Privacy Policy from time to time. If we make
                material changes to this Privacy Policy, we will notify you by
                updating the date at the top of this Privacy Policy and by
                providing notice on our Website or Application.
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Contact Us
            </h6>
            <div className="mt-3">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at{" "}
                <a
                  href={`mailto:${CONTACT_MAIL}`}
                  className="text-orange-100 font-medium underline"
                >
                  {CONTACT_MAIL}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
