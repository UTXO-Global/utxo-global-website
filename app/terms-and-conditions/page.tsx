/* eslint-disable @next/next/no-img-element */
"use client";

import { CONTACT_MAIL } from "@/configs/common";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="py-[60px] relative overflow-hidden">
      <img
        src="/images/utxo.png"
        alt="utxo global"
        className="w-[400px] max-w-[unset] md:w-[60%] rotate-[35deg] absolute bottom-[200px] -left-[50px] md:left-0"
      />
      <div className="utxo-global-container text-base relative">
        <h3 className="text-[36px] leading-[44px] md:text-[50px] md:leading-[58px] lg:text-[64px] lg:leading-[72px] text-dark-100 font-medium text-center">
          Terms and Conditions
        </h3>
        <div className="mt-10 grid gap-4">
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Introduction
            </h6>
            <p className="mt-3">
              <span>{`Welcome to UTXO Global. These Terms and Conditions ("Terms") govern your use of our website, accessible at `}</span>
              <Link href="/" className="text-orange-100 underline font-medium">
                utxo.global
              </Link>{" "}
              <span>{`("Website") and the UTXO Global Wallet application ("Application"). By accessing or using our Website and Application, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website or Application.`}</span>
            </p>
          </div>
          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Use of Our Services
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Eligibility:</span> You must be
                  at least 18 years old to use our services. By using our
                  services, you represent and warrant that you meet this age
                  requirement.
                </li>
                <li>
                  <span className="font-medium">Account Registration:</span> To
                  access certain features of our Application, you may be
                  required to create an account. You agree to provide accurate
                  and complete information during the registration process and
                  to update such information to keep it accurate and complete.
                </li>
                <li>
                  <span className="font-medium">Account Security:</span> You are
                  responsible for maintaining the confidentiality of your
                  account credentials and for all activities that occur under
                  your account. You agree to notify us immediately of any
                  unauthorized use of your account.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              User Conduct
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Prohibited Activities:</span>{" "}
                  You agree not to engage in any activity that interferes with
                  or disrupts our services, including but not limited to
                  transmitting any viruses or harmful code, or attempting to
                  gain unauthorized access to our systems.
                </li>
                <li>
                  <span className="font-medium">Compliance with Laws:</span> You
                  agree to comply with all applicable laws and regulations in
                  connection with your use of our services.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Intellectual Property
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">Ownership:</span> All content
                  and materials on our Website and Application, including but
                  not limited to text, graphics, logos, and software, are the
                  property of UTXO Global or its licensors and are protected by
                  intellectual property laws.
                </li>
                <li>
                  <span className="font-medium">License:</span> Subject to these
                  Terms, we grant you a limited, non-exclusive,
                  non-transferable, and revocable license to access and use our
                  services for personal, non-commercial purposes.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Disclaimers
            </h6>
            <div className="mt-3">
              <ul className="list-decimal grid gap-2 ml-5">
                <li>
                  <span className="font-medium">No Warranty:</span>{" "}
                  {`Our services
                  are provided on an "as-is" and "as-available" basis. We make
                  no warranties or representations about the accuracy or
                  completeness of our services or the content on our Website or
                  Application.`}
                </li>
                <li>
                  <span className="font-medium">Limitation of Liability:</span>{" "}
                  To the fullest extent permitted by law, UTXO Global shall not
                  be liable for any indirect, incidental, special, or
                  consequential damages arising out of or in connection with
                  your use of our services.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Termination
            </h6>
            <div className="mt-3">
              <p>
                We may terminate or suspend your access to our services at any
                time, without prior notice or liability, for any reason
                whatsoever, including if you breach these Terms.
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Governing Law
            </h6>
            <div className="mt-3">
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the jurisdiction in which UTXO Global is based,
                without regard to its conflict of law principles.
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Changes to These Terms
            </h6>
            <div className="mt-3">
              <p>
                We reserve the right to modify these Terms at any time. If we
                make material changes to these Terms, we will notify you by
                updating the date at the top of these Terms and by providing
                notice on our Website or Application. Your continued use of our
                services after any such changes constitutes your acceptance of
                the new Terms.
              </p>
            </div>
          </div>

          <div>
            <h6 className="text-[18px] leading-[26px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[40px] text-dark-100 font-medium">
              Contact Us
            </h6>
            <div className="mt-3">
              <p>
                f you have any questions about these Terms, please contact us at{" "}
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
