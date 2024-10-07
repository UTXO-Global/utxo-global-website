import React from "react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import Link from "next/link";
import Button from "@/components/Common/Button";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (panelStyle) => [
  {
    key: "1",
    label: (
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-xl font-medium">Quest 1</h3>
        <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-6">
          <div className="rounded-lg px-2 sm:px-4 sm:py-2 border-dark-100 font-medium border">Oct 21 - Oct 28</div>
          <div className="flex items-center gap-2 text-base sm:text-xl font-bold">
            <img src="/icons/utxo-point.png" alt="utxo-point" className="size-6 sm:size-10" />
            300 Points
          </div>
        </div>
      </div>
    ),
    children: (
      <div className="pt-4 border-t flex flex-col sm:flex-row gap-3 justify-between items-center">
        <div className="grid gap-3">
          <h3 className="flex items-center gap-2 text-lg sm:text-2xl font-bold">
            TaskOn{" "}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.5 2.25H21.75V7.5M20.625 3.375L15 9M12.75 3.75H6C5.40326 3.75 4.83097 3.98705 4.40901 4.40901C3.98705 4.83097 3.75 5.40326 3.75 6V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V11.25"
                stroke="#FF7201"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h3>
          <div className="text-grey-200 text-base sm:text-lg">
            Complete these basic social media tasks on TaskOn to earn up to 300 points.
          </div>
        </div>
        <Button className="max-w-[120px] w-full !py-2">Go</Button>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: (
      <div className="flex items-center justify-between">
        <h3 className="text-base sm:text-xl font-medium">Quest 2</h3>
        <div className="flex items-center gap-2 text-base sm:text-xl font-bold">
          <img src="/icons/utxo-point.png" alt="utxo-point" className="size-6 sm:size-10" />
          100 Points
        </div>
      </div>
    ),
    children: (
      <div className="pt-4 border-t flex sm:flex-row flex-col justify-between items-center gap-3">
        <div className="grid gap-3">
          <h3 className="text-lg sm:text-2xl font-bold">Swap</h3>
          <div className="text-grey-200 text-base sm:text-lg">Use the UTXO Global Wallet to swap and you will receive 100 points.</div>
          <Link href="#" className="inline-block text-orange-100 text-base sm:text-lg underline hover:underline hover:text-orange-500">
            Quest Guide
          </Link>
        </div>
        <Button className="max-w-[120px] w-full !py-2">Claim</Button>
      </div>
    ),
    style: panelStyle,
  },
];

export default function Quest() {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
    fontFamily: token.fontFamily,
    padding: "24px 28px",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1", "2"]}
      expandIcon={({ isActive }) => <CaretRightOutlined size={40} rotate={isActive ? 90 : 0} />}
      ghost
      items={getItems(panelStyle)}
    />
  );
}
