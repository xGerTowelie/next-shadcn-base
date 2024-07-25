import { MenuIcon } from "lucide-react";
import { Page } from "./desktop-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "./drawer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";

export default function MobileMenu(props: { pages: Page[] }) {
    return (
        <Drawer>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className="p-6">
                <Accordion type="single" collapsible>
                    {props.pages.map(page => (
                        page.subPages
                            ? <NestedItem key={page.name} page={page} />
                            : <Item key={page.name} page={page} />
                    ))}
                </Accordion>
            </DrawerContent>
        </Drawer>
    )
}

function Item({ page }: { page: Page }) {
    return (
        <AccordionItem
            className="px-4 border-b-2 border-secondary"
            key={page.name}
            value={page.name}>
            <div className="py-4 w-full">
                <a href={page.href}>{page.name}</a>
            </div>
        </AccordionItem>
    )
}

function NestedItem({ page }: { page: Page }) {
    return (
        <AccordionItem
            className="px-4 border-b-2 border-secondary"
            key={page.name}
            value={page.name}>
            <AccordionTrigger>
                <a href={page.href}>{page.name}</a>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4">
                {page.subPages?.map((subPage: any) => (
                    <a
                        className="pl-4"
                        key={subPage.name} href={subPage.href}>{subPage.name}</a>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}
