import Image from "next/image";
import React from "react";
import bountyContestBanner from "@/public/images/bounty-contest-banner.png";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { BOUNTY_CONTEST_ACTIVE, BUG_REPORT_LINK, BUG_REPORT_RESULT_LINK, CHROME_EXTENSION_LINK, CKBCCC_DEMO_LINK } from "@/configs/common";
import BountyResult from "@/components/BountyContest/BountyResult";
import LeaderBoard from "@/components/BountyContest/LeaderBoard";

export default function BountyPage() {
  return (
    <div>
      <div className="mt-16 text-center px-4">
        <Image src={bountyContestBanner} alt="banner" width={530} height={125} className="mx-auto" />
        {BOUNTY_CONTEST_ACTIVE ? (
          <>
            <p className="text-xl font-medium mt-8 text-grey-200">
              Hunt for vulnerabilities, earn rewards, & help us build a more secure future.
            </p>
            <p className="text-orange-100 text-xl font-medium mt-3">
              Period: August 20, 2024 10:00:00 AM (UTC) - Sep 03, 2024 10:00:00 AM (UTC)
            </p>
            <Link href={BUG_REPORT_LINK} target="_blank">
              <Button kind="primary" className="min-w-[225px] mt-8">
                Submit Bug
              </Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-xl mt-8 text-grey-200">
              Check out the leaderboard to see who&apos;s leading the charge in making our platform more secure
            </p>
            <p className="text-orange-100 text-xl mt-3">
              <span className="text-grey-200">Bug Report: </span>
              <Link href={BUG_REPORT_RESULT_LINK} target="_blank" className="font-medium">
                {BUG_REPORT_RESULT_LINK}
              </Link>
            </p>
          </>
        )}
      </div>
      {BOUNTY_CONTEST_ACTIVE && (
        <div className="utxo-global-container mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="col-span-1 lg:col-span-3 grid gap-6">
              <div className="rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-gradient-to-b from-[#D3D1CE] via-[#E0DFDE] to-[#EFEFEF]">
                  <h2 className="text-dark-100 text-2xl font-bold uppercase">How to participate</h2>
                </div>
                <div className="p-6 bg-lightGrey-100">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                  <h5 className="text-xl font-bold mt-6">Download UTXO Global Wallet</h5>
                  <p className="mt-4 text-grey-200">Participants download the wallet from Chrome Store:</p>
                  <Link href={CHROME_EXTENSION_LINK} className="text-orange-100" target="_blank">
                    {CHROME_EXTENSION_LINK}
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="p-6 bg-lightGrey-100 ">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h5 className="text-xl font-bold mt-6">Test Wallet in Testing Zone</h5>
                  <p className="my-4 text-grey-200">Users test the wallet within the testing zone in UTXO Wallet Extension (dApp):</p>
                  <div className="space-y-2">
                    <h6 className="font-medium">Wallet Management</h6>
                    <p className="text-grey-200">
                      Create / import / export a wallet from recovery phase and private key. <br />
                      Create and manage multiple wallets. <br />
                      Create and manage multiple accounts within a single wallet.
                    </p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">CKB Native Coin Management</h6>
                    <p className="text-grey-200">Send and receive CKB to and from different addresses</p>
                  </div>
                  <div className="space-y-2 mt-3">
                    <h6 className="font-medium">Sign Message + Transaction</h6>
                    <p className="text-grey-200">
                      Use the CKB CCC demo to test. The valid testing zone: Sign, Transfer, Transfer with Lumos, Transfer xUDT, Transfer
                      xUDT (SUS), and Issue xUDT
                    </p>
                    <div className="text-grey-200">
                      <div className="size-[10px] mr-4 bg-[#EBECEC] inline-block"></div>
                      CCC:{" "}
                      <Link href={CKBCCC_DEMO_LINK} className="text-orange-100" target="_blank">
                        {CKBCCC_DEMO_LINK}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="p-6 bg-lightGrey-100">
                  <div className="size-10 bg-dark-100 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                  <h5 className="text-xl font-bold mt-6">Submit Bug Report</h5>
                  <p className="mt-4 text-grey-200">
                    If a bug is found, the participant submits a report detailing the issue via: <br />
                    <Link href={BUG_REPORT_LINK} className="text-orange-100" target="_blank">
                      {BUG_REPORT_LINK}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <LeaderBoard />
            </div>
          </div>
        </div>
      )}
      {!BOUNTY_CONTEST_ACTIVE && <BountyResult />}
    </div>
  );
}
