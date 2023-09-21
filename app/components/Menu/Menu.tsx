"use client";

import { TopLevelCategory } from "@/interfaces/page.interface";
import cn from "classnames";
import styles from "./Menu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { firstLevelMenu } from "@/helpers/helpers";
import {
  FirstLevelMenuItem,
  MenuItem,
  PageItem,
} from "@/interfaces/menu.interface";
import { motion, useReducedMotion } from "framer-motion";
import { getMenu } from "@/api/menu";

export default function Menu() {
  const [firstCategory, setFirstCategory] = useState(TopLevelCategory.Courses);
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<MenuItem[]>([]);
  const [newMenu, setNewMenu] = useState<MenuItem[]>([]);

  const fetchMenu = async (firstCategory) => {
    const m = await getMenu(firstCategory);
    setNewMenu(m);
    setMenuState(m);
  };

  useEffect(() => {
    fetchMenu(firstCategory);
  }, [firstCategory]);

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  };

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
                  onClick={() => setFirstCategory(m.id)}
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

              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <motion.li key={p._id} variants={variantsChildren}>
        <Link href={`/${route}/${p.alias}`} key={p.alias} legacyBehavior>
          <a
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname,
            })}
          >
            {p.category}
          </a>
        </Link>
      </motion.li>
    ));
  };

  return <div>{menuState && buildFirstLevel()}</div>;
}
