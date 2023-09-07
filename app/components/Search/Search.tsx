"use client";

import { useState } from "react";
import { SearchProps } from "./Search.props";
import { useRouter } from "next/navigation";
import { Button } from "..";
import GlassIcon from "./glass.svg";
import cn from "classnames";
import styles from "./Search.module.css";
import { Input } from "../Input/Input";

export default function Search({
  className,
  ...props
}: SearchProps): JSX.Element {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = () => {
    router.push("/search", {
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </div>
  );
}

// export default Search;
