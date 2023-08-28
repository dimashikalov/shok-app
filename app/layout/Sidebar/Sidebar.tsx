import Menu from "@/app/components/Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import { getMenu } from "@/api/menu";
// import styles from "./Sidebar.module.css";
// import cn from "classnames";

export const Sidebar = async ({ ...props }: SidebarProps): JSX.Element => {
  const menu = await getMenu(0);
  return (
    <div {...props}>
      <Menu menu={menu} />
    </div>
  );
};
