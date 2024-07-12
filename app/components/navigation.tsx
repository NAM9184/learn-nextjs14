"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  // const [count, setCount] = useState(0);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "fire" : ""}
        </li>
        <li>
          <Link href="/about-us">About-us</Link>{" "}
          {path === "/about-us" ? "sad" : ""}
        </li>
        {/* <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li> */}
      </ul>
    </nav>
  );
}
