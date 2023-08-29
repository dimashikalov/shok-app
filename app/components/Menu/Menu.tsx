"use client";

import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { firstLevelMenu } from "@/helpers/helpers";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";

export default function Menu({ menu }: { menu: MenuItem[] }) {
  const firstCategory = TopLevelCategory.Courses;
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menuState.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route} aria-expanded={m.id == firstCategory}>
            <Link href={`/${m.route}`} legacyBehavior>
              <a>
                <div
                  className={cn(styles.firstLevel, {
                    [styles.firstLevelActive]: m.id == firstCategory,
                  })}
                >
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menuState.map((m) => {
          if (m.pages.map((p) => p.alias).includes(pathname.split("/")[2])) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>

              <div
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: m.isOpened,
                })}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link href={`/${route}/${p.alias}`} key={p.alias} legacyBehavior>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
          })}
        >
          {p.category}
        </a>
      </Link>
    ));
  };

  return <div>{menu && buildFirstLevel()}</div>;
}
