import {
  FaHome,
  FaUserInjured,
  FaCalendarCheck,
  FaClipboardCheck,
  FaBug,
  FaTasks,
  FaFileAlt,
  FaChartBar,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { FaHospital } from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const menus = [
  {
    title: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },

  {
    title: "Patients",
    icon: <FaUserInjured />,
    path: "/patients",
  },

  {
    title: "Appointments",
    icon: <FaCalendarCheck />,
    path: "/appointments",
  },

  {
    title: "Inspections",
    icon: <FaClipboardCheck />,
    path: "/inspections",
  },

  {
    title: "Defects",
    icon: <FaBug />,
    path: "/defects",
  },

  {
    title: "CAPA",
    icon: <FaTasks />,
    path: "/capa",
  },

  {
    title: "Reports",
    icon: <FaFileAlt />,
    path: "/reports",
  },

  {
    title: "Analytics",
    icon: <FaChartBar />,
    path: "/analytics",
  },

  {
    title: "Notifications",
    icon: <FaBell />,
    path: "/notifications",
  },

  {
    title: "Profile",
    icon: <FaUserCircle />,
    path: "/profile",
  },
  {
  title: "Departments",
  icon: <FaHospital />,
  path: "/departments",
},
{
    title: "Staff",
    icon: <FaUserMd />,
    path: "/staff",
},
{
    title: "Roles",
    icon: <FaUserShield />,
    path: "/roles",
},
{
  title: "Permissions",
  icon: <FaKey />,
  path: "/permissions",
},
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-900 text-white min-h-screen shadow-lg">

      <div className="text-2xl font-bold p-6 border-b border-blue-700">
        HQIS
      </div>

      <div className="mt-5">

        {menus.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-4 transition-all duration-200 ${
                isActive
                  ? "bg-blue-700 border-r-4 border-yellow-400"
                  : "hover:bg-blue-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>

            <span>{item.title}</span>

          </NavLink>

        ))}

      </div>

    </aside>
  );
}