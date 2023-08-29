import Menu from "@/app/components/Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import { getMenu } from "@/api/menu";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Logo from "../logo.svg";

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
  const menu = await getMenu(0);
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>search</div>
      <Menu menu={menu} />
    </div>
  );
};
