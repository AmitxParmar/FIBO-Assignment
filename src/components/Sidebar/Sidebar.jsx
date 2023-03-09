import { useState } from "react";
import styles from "./sidebar.module.css";

import { navLogo } from "../../assets/index";
import { nav_links } from "../../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [active, setActive] = useState("dashboard");

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.logos}>
                    <img src={navLogo} className={styles.logo} />
                    <h2>
                        fi<span>t</span>ness
                    </h2>
                </div>
                <ul className={styles.nav_links}>
                    {nav_links.map(({ id, name, icon, path }) => (
                        <li
                            key={id}
                            onClick={() => setActive(name)}
                            className={`${styles.nav_item} ${active === name && " active"}`}
                        >
                            <img src={icon} className={styles.navIcons} />
                            <h3 className={styles.navTitle}>{name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );
};

export default Sidebar;
