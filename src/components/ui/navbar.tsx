"use client"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
	return (
		// target="blank" opens a new tab - remove to open in same tab
		<NavigationMenu className="ml-3">
			<NavigationMenuList className="font-bold">
				<NavigationMenuItem className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
					<NavigationMenuLink target="_blank" href="https://ui.shadcn.com/">Shadcn UI</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
					<NavigationMenuLink target="_blank" href="https://www.nextjs.org/">NextJS</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
					<NavigationMenuLink target="_blank" href="https://www.zod.dev/">Zod</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
			<ModeToggle />
		</NavigationMenu>
	)
}
