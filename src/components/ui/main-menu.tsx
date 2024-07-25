"use client"

import { useMediaQuery } from "@/hooks/use-media-query"
import DesktopMenu, { Page } from "./desktop-menu"
import MobileMenu from "./mobile-menu"

export default function Menu(props: { pages: Page[] }) {
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return <DesktopMenu pages={props.pages} />
    } else {
        return <MobileMenu pages={props.pages} />
    }
}
