import React from "react";
import "./nav.css";
import LogoImg from "../Icons/LogoImg";
import CustomButton from "../CustomButton/CustomButton";
import OverviewIcon from "../Icons/OverviewIcon";
import ChartIcon from "../Icons/ChartIcon";
import TransIcon from "../Icons/TransIcon";
import WalletIcon from "../Icons/WalletIcon";
import MailIcon from "../Icons/MailIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import LogoutIcon from "../Icons/LogoutIcon";

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="dash-header">
        <LogoImg />
        <h1 className="title">CryptX</h1>
      </div>

      <ul>
        <CustomButton svgIcon={<OverviewIcon />} name="Overview" />
        <CustomButton svgIcon={<ChartIcon />} name="Chart" />
        <CustomButton svgIcon={<TransIcon />} name="Transactions" />
        <CustomButton svgIcon={<WalletIcon />} name="Wallet" />
        <CustomButton svgIcon={<MailIcon />} name="Mail Box" />
        <CustomButton svgIcon={<SettingsIcon />} name="Settings" />
        <CustomButton svgIcon={<LogoutIcon />} name="Logout" />
      </ul>
    </div>
  );
};

export default Nav;
