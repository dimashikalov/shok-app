import Menu from "@/app/components/Menu/Menu";
import { SidebarProps } from "./Sidebar.props";
import { getMenu } from "@/api/menu";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import Logo from "../logo.svg";
import Search from "@/app/components/Search/Search";

export const Sidebar = async ({ className, ...props }: SidebarProps) => {
  const menu = await getMenu(0);

  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <Search />
      <Menu menu={menu} />
    </div>
  );
};
