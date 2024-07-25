import { Pages } from "@/components/ui/nav";

export const pages: Pages[] = [
    {
        name: "Dashboard",
        href: "/",
    },
    {
        name: "Learning",
        href: "/knowledge",
        subPages: [
            {
                name: "Add Question",
                href: "/knowledge/add",
            },
            {
                name: "Search",
                href: "/knowledge/search",
            },
            {
                name: "Exercise",
                href: "/knowledge/exercise",
            },
        ],
    },
    {
        name: "Inventory",
        href: "/inventory",
        subPages: [
            {
                name: "Add Item",
                href: "/ineventory/items/add",
            },
            {
                name: "Search",
                href: "/inventory/items/search",
            },
            {
                name: "All Lists",
                href: "/inventory/lists",
            },
            {
                name: "Current List",
                href: "/inventory/lists/current",
            },
        ],

    },
    {
        name: "Beta Test",
        href: "/beta",
        subPages: [
            {
                name: "Accordion",
                href: "/beta/accordion",
            },
        ]
    }
];

