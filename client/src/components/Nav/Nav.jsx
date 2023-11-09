import React from "react";
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/authenticate');
  };

  return (
    <div className="nav-bar">
      {/* Dashboard header with logo and title */}
      <div className="dash-header">
        <LogoImg /> {/* Logo image */}
        <h1 className="title">CryptX</h1> {/* Application title */}
      </div>

      {/* Navigation buttons */}
      <ul>
<<<<<<< HEAD
        <CustomButton svgIcon={<OverviewIcon />} name="Overview" />
        <CustomButton svgIcon={<ChartIcon />} name="Chart" />
        <CustomButton svgIcon={<TransIcon />} name="Transactions" />
        <CustomButton svgIcon={<WalletIcon />} name="Wallet" />
        <CustomButton svgIcon={<MailIcon />} name="Mail Box" />
        <CustomButton svgIcon={<SettingsIcon />} name="Settings" />
        <a href="/authenticate">
          <CustomButton svgIcon={<LogoutIcon />} name="Logout" onClick={handleLogout} />
        </a>
=======
        {/* CustomButton components for different sections */}
        <CustomButton svgIcon={<OverviewIcon />} name="Overview" />{" "}
        {/* Overview button */}
        <CustomButton svgIcon={<ChartIcon />} name="Chart" />{" "}
        {/* Chart button */}
        <CustomButton svgIcon={<TransIcon />} name="Transactions" />{" "}
        {/* Transactions button */}
        <CustomButton svgIcon={<WalletIcon />} name="Wallet" />{" "}
        {/* Wallet button */}
        <CustomButton svgIcon={<MailIcon />} name="Mail Box" />{" "}
        {/* Mail Box button */}
        <CustomButton svgIcon={<SettingsIcon />} name="Settings" />{" "}
        {/* Settings button */}
        <CustomButton svgIcon={<LogoutIcon />} name="Logout" />{" "}
        {/* Logout button */}
>>>>>>> 1e990be815df4f76213678d3718e5356a9fcd245
      </ul>
    </div>
  );
};

export default Nav;
