import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export type Page = {
    name: string
    href: string
    subPages?: Page[]
}

export default function DesktopMenu(props: { pages: Page[] }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {props.pages.map((page: any) => (
                    <NavigationMenuItem key={page.name}>
                        {
                            page.subPages
                                ? (
                                    <>
                                        <NavigationMenuTrigger>{page.name}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="p-4 flex flex-col w-full 2xl:min-w-[600px]">
                                            {page.subPages?.map((subPage: any) => (
                                                <NavigationMenuLink
                                                    key={subPage.name}
                                                    className="rounded-md hover:bg-secondary text-sm font-medium leading-none">
                                                    <a href={subPage.href}>
                                                        <div className="w-full p-4">
                                                            {subPage.name}
                                                        </div>
                                                    </a>
                                                </NavigationMenuLink>
                                            ))}
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <Link href={page.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {page.name}
                                        </NavigationMenuLink>
                                    </Link>
                                )
                        }
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>

    )
}
