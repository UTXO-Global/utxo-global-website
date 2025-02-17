/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ccc } from "@ckb-ccc/connector-react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { reset } from "@/redux/features/storage/action";
import IcnChevron from "@/public/icons/icn-chevron.svg";
import IcnLogout from "@/public/icons/icn-logout.svg";
import { Popover } from "antd";
import { selectStorage } from "@/redux/features/storage/reducer";
import { shortAddress } from "@/utils/helpers";
import cn from "@/utils/cn";

interface AccountModalProps {
  className?: string;
  chevronClassName?: string;
  popupLabel?: string;
  popupClassName?: string;
  avatar?: React.ReactNode;
}

const AccountModal = ({ className, chevronClassName, popupLabel = "Logout", popupClassName, avatar }: AccountModalProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { disconnect } = ccc.useCcc();
  const { addressLogged } = useAppSelector(selectStorage);

  const dispatch = useAppDispatch();

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const logout = () => {
    disconnect();
    router.refresh();
    dispatch(reset());
    hide();
  };

  const content = (
    <div className="rounded-lg w-[180px] overflow-hidden">
      <button onClick={logout} className={cn("text-base w-full flex font-medium items-center gap-2 py-3 px-4", popupClassName)}>
        <IcnLogout className="w-6 text-black" fill={"black"} />
        <span>{popupLabel}</span>
      </button>
    </div>
  );

  return (
    <div>
      <Popover content={content} placement="bottom" trigger="click" open={open} onOpenChange={handleOpenChange} arrow={false}>
        <button
          className={cn(
            "bg-dark-100 flex rounded-lg items-center gap-2 py-2 px-4 border-dark-100 text-white hover:enabled:text-white",
            className
          )}
        >
          {avatar ? avatar : <div className="size-8 rounded-full bg-gradient-to-t from-[#FF862E] to-[#000000]"></div>}
          <span>{shortAddress(addressLogged, 5)}</span>
          <IcnChevron className={cn("w-4", chevronClassName)} />
        </button>
      </Popover>
    </div>
  );
};

export default AccountModal;
