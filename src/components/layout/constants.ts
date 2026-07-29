import { ROUTES } from "@/constants";
import { UserPlus, Users, UserCog, CircleUser } from "lucide-react";

const { SUPER_ADMIN, CUSTOMERS, EMPLOYEES, PROFILE, LEADS, ACCOUNTANT } =
  ROUTES;

export const SUPER_ADMIN_NAV_TABS = [
  {
    href: `${SUPER_ADMIN}${CUSTOMERS}`,
    label: "Customers",
    icon: Users,
  },
  {
    href: `${SUPER_ADMIN}${LEADS}`,
    label: "Leads",
    icon: UserPlus,
  },
  {
    href: `${SUPER_ADMIN}${EMPLOYEES}`,
    label: "Employees",
    icon: UserCog,
  },
  {
    href: `${SUPER_ADMIN}${PROFILE}`,
    label: "Profile",
    icon: CircleUser,
  },
];

export const ACCOUNTANT_NAV_TABS = [
  { href: `${ACCOUNTANT}${CUSTOMERS}`, label: "Customers", icon: Users },
  {
    href: `${ACCOUNTANT}${LEADS}`,
    label: "Leads",
    icon: UserPlus,
  },
  { href: `${ACCOUNTANT}${PROFILE}`, label: "Profile", icon: CircleUser },
];
