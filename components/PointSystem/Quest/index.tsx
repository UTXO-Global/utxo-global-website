import React, { useEffect } from "react";
import type { CSSProperties } from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, theme } from "antd";
import Link from "next/link";
import Button from "@/components/Common/Button";
import { useTranslation } from "next-export-i18n";
import useResizable from "@/hooks/useResizeable";

export default function Quest() {
  const { token } = theme.useToken();
  const { t } = useTranslation();
  const { width } = useResizable();

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (panelStyle) => [
    {
      key: "1",
      label: (
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-2xl font-medium">Quest 1</h3>
          <div className="flex items-center gap-2 sm:gap-6">
            <div className="rounded-lg px-4 py-2 sm:block hidden border-dark-100 font-medium border">Oct 21 - Oct 28</div>
            <div className="flex items-center gap-2 text-base md:text-2xl font-bold">
              <img src="/icons/utxo-point.png" alt="utxo-point" className="size-6 sm:size-10" />
              300 {t("pointSystem.point")}
            </div>
          </div>
        </div>
      ),
      children: (
        <div className="mx-4 py-4 mb-0  border-t flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
          <div className="grid gap-3 w-full">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl md:text-3xl font-bold">
                TaskOn{" "}
                <Link href="#">
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.5 2.25H21.75V7.5M20.625 3.375L15 9M12.75 3.75H6C5.40326 3.75 4.83097 3.98705 4.40901 4.40901C3.98705 4.83097 3.75 5.40326 3.75 6V18C3.75 18.5967 3.98705 19.169 4.40901 19.591C4.83097 20.0129 5.40326 20.25 6 20.25H18C18.5967 20.25 19.169 20.0129 19.591 19.591C20.0129 19.169 20.25 18.5967 20.25 18V11.25"
                      stroke="#FF7201"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </h3>
              <span className="sm:hidden">(Oct 21 - Oct 28)</span>
            </div>
            <div className="text-grey-200 text-base sm:text-lg">
              Complete these basic social media tasks on TaskOn to earn up to 300 points.
            </div>
          </div>
          <Button className="max-w-[120px] w-full !py-2">{t("pointSystem.go")}</Button>
        </div>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <div className="flex items-center justify-between">
          <h3 className="text-base md:text-2xl font-medium">Quest 2</h3>
          <div className="flex items-center gap-2 text-base md:text-2xl font-bold">
            <img src="/icons/utxo-point.png" alt="utxo-point" className="size-6 sm:size-10" />
            100 {t("pointSystem.point")}
          </div>
        </div>
      ),
      children: (
        <div className="mx-4 py-4 mb-0 border-t flex sm:flex-row flex-col justify-between gap-3 items-start sm:items-center">
          <div className="grid gap-3 w-full">
            <h3 className="text-xl md:text-3xl font-bold">Swap</h3>
            <div className="text-grey-200 text-base sm:text-lg">Use the UTXO Global Wallet to swap and you will receive 100 points.</div>
            <Link href="#" className="inline-block text-orange-100 text-base sm:text-lg underline hover:underline hover:text-orange-500">
              Quest Guide
            </Link>
          </div>
          <Button className="max-w-[120px] w-full !py-2">{t("pointSystem.claim")}</Button>
        </div>
      ),
      style: panelStyle,
    },
  ];

  const panelStyle: React.CSSProperties = {
    marginBottom: width > 640 ? "24px" : "16px",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
    fontFamily: token.fontFamily,
    padding: width > 640 ? "24px" : "0px",
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
