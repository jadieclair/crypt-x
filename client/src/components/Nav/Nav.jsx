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

/**
 * Nav component represents the sidebar navigation bar of the application.
 *
 * @returns {ReactElement} Nav component with logo, title, and navigation buttons.
 */
const Nav = () => {
  return (
    <div className="nav-bar">
      {/* Dashboard header with logo and title */}
      <div className="dash-header">
        <LogoImg /> {/* Logo image */}
        <h1 className="title">CryptX</h1> {/* Application title */}
      </div>

      {/* Navigation buttons */}
      <ul>
        {/* CustomButton components for different sections */}
        <CustomButton svgIcon={<OverviewIcon />} name="Overview" />
        <CustomButton svgIcon={<ChartIcon />} name="Chart" />
        <CustomButton svgIcon={<TransIcon />} name="Transactions" />
        <CustomButton svgIcon={<WalletIcon />} name="Wallet" />
        <CustomButton svgIcon={<MailIcon />} name="Mail Box" />
        <CustomButton svgIcon={<SettingsIcon />} name="Settings" />
        
        {/* Use anchor tag for logout */}
        <li>
          <a href="/authenticate" className="logout-link">
            <CustomButton svgIcon={<LogoutIcon />} name="Logout" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
