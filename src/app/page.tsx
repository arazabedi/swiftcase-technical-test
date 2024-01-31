import Image from "next/image";
import ProductForm from "@/components/ui/product-form";
import Navbar from "@/components/ui/navbar";
import { Separator } from "@/components/ui/separator"

// Root url
// Product-form, navbar, modal are the main components
// The other components are from shadcn ui/next-themes
export default function Home() {
	return (
		<>
			<Navbar />
			<Separator className="mb-3" />
			<div className="flex flex-col items-center">
				<h1 className="p-4 font-semibold text-2xl">Non-cancelled Orders</h1>
				<div className="p-8">
					<ProductForm />
				</div>
			</div>
			<div className="absolute bottom-0 right-0">
				<Image
					layout="responsive"
					height={456}
					width={525}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
					alt={"The React Logo"}
				/>
			</div>
		</>
	);
}
