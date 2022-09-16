import "../assests/css/sideBar.css";
import DownArrow from "../assests/svg/DownArrow";
import AddIcon from "./../assests/svg/AddIcon";
import DeckIcon from "./../assests/svg/DeckIcon";
import UptimeIcon from "./../assests/svg/UptimeIcon";
import ServiceMonitorIcon from "./../assests/svg/ServiceMonitorIcon";
import ProductMonitoringIcon from "./../assests/svg/ProductMonitoringIcon";
import WorkFlowsIcon from "./../assests/svg/WorkFlowsIcon";
import NotificationIcon from "./../assests/svg/NotificationIcon";
import SettingsIcon from "./../assests/svg/SettingsIcon";
import QuestionMarkIcon from "../assests/svg/QuestionMarkIcon";
import DocsIcon from "./../assests/svg/DocsIcon";
import InviteMemberIcon from "./../assests/svg/InviteMemberIcon";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="side-bar">
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/dashboard">
            <div>
              <DeckIcon />
              <span>Deck</span>
            </div>
            <div>
              <AddIcon />
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/uptime">
            <div>
              <UptimeIcon />
              <span>Uptime</span>
            </div>
            <div>
              <DownArrow />
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/service-monitoring">
            <div>
              <ServiceMonitorIcon />
              <span>Service Monitoring</span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/product-monitoring">
            <div>
              <ProductMonitoringIcon />
              <span>Product Monitoring</span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/dashboard/workflow">
            <div>
              <WorkFlowsIcon />
              <span>Workflows</span>
            </div>
            <div>
              <DownArrow />
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/notifications">
            <div>
              <NotificationIcon />
              <span>Notifications</span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/settings">
            <div>
              <SettingsIcon />
              <span>Settings</span>
            </div>
          </NavLink>
        </li>
      </ul>

      <ul className="nav-items extra">
        <li className="nav-item">
          <NavLink to="/faq">
            <div>
              <QuestionMarkIcon />
              <span>FAQ</span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/api-docs">
            <div>
              <DocsIcon />
              <span>API Docs</span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/invite-member">
            <div>
              <InviteMemberIcon />
              <span>Invite Members</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
