"use client";

import { darkMenu } from "@/data/MenuRenderer/menu-dark";
import { lightMenu } from "@/data/MenuRenderer/menu-light";
import { useIsDarkRoute } from "@/hooks/useIsDarkRoute";
import { MenuItem } from "@/types/menu-dt";

export default function HeaderMenu() {
    const isDark = useIsDarkRoute();
    const menu: MenuItem[] = isDark ? darkMenu : lightMenu;

    return (
        <ul>
            {menu.map((item) => {
                const hasDropdown =
                    item.type === "mega" ||
                    (item.type === "dropdown" && !!item.links?.length);

                return (
                    <li
                        key={item.label}
                        className={`${hasDropdown ? 'has-dropdown' : ''} ${item.isLastMenu ? 'tp-menu-last' : ''}`}
                    >
                        <a
                            href={item.href}
                            onClick={(e) => {
                                if (item.href === "#" || item.href === "/#" || item.href === "javascript:void(0)" || !item.href) {
                                    e.preventDefault();
                                }
                            }}
                            style={{ marginRight: "4px" }}
                        >
                            {item.label}
                        </a>

                        {item.type === "mega" && item.columns && (
                            <div className="tp-submenu submenu px-megamenu">
                                <div className="row">
                                    {item.columns.map((col, index) => (
                                        <div className="col-xl-6" key={`${col.title}-${index}`}>
                                            <div className="px-megamenu-box">
                                                <div className="px-megamenu-title-wrap">
                                                    <span className="px-megamenu-title">{col.title}</span>
                                                </div>
                                                <ul>
                                                    {col.links.map((link, index) => (
                                                        <li key={`${link.href}-${index}`}>
                                                            <a href={link.href}>{link.label}</a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {item.type === "dropdown" && item.links && item.links.length > 0 && (
                            <ul className="tp-submenu submenu">
                                {item.links.map((link, index) => (
                                    <li key={`${link.href}-${index}`}>
                                        <a href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}
