'use client'

import Image from "next/image";
import { useState } from "react";

const products = [
	{
		name: "Gummy Bears",
		price: "$1.00 / bag",
		description:
			"Colorful, chewy gummy bears. Perfect for a sweet snack at school!",
	},
	{
		name: "Lollipops",
		price: "$0.50 / each",
		description: "Classic fruity lollipops in assorted flavors.",
	},
	{
		name: "Chocolate Bar",
		price: "$1.50 / bar",
		description: "Rich milk chocolate bars for chocolate lovers.",
	},
	{
		name: "SIgma BOy",
		price: "22",
		description: "The ultimate candy",
	},
];

export default function Home() {
	const [selected, setSelected] = useState<null | typeof products[0]>(null);

	return (
		<main className="flex flex-col items-center px-4 py-8 bg-green-50 min-h-screen">
			{/* Hero Section */}
			<section className="text-center mb-10">
				<h1 className="text-4xl font-extrabold text-green-700 mb-2 drop-shadow">
					Super Snack Bros
				</h1>
			</section>

			{/* Candy Catalog */}
			<section className="w-full max-w-4xl mb-12">
				<h2 className="text-2xl text-center font-semibold text-red-600 mb-6">
					Candy Selection
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{products.map((product) => (
						<button
							key={product.name}
							className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center h-40 focus:outline-none hover:bg-green-100 transition"
							onClick={() => setSelected(product)}
							type="button"
						>
							<h3 className="text-lg font-bold text-green-700">
								{product.name}
							</h3>
							<p className="text-red-600">{product.price}</p>
						</button>
					))}
				</div>
			</section>

			{/* Contact Section */}
			<section className="w-full max-w-xl bg-white rounded-xl shadow-lg p-6 text-center">
				<h2 className="text-xl font-semibold text-green-700 mb-2">
					Contact
				</h2>
				<p className="text-red-600 mb-4">
					Want to ask about a candy or place an order at school?
				</p>
			</section>

			{/* Modal Popup */}
			{selected && (
				<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
					<div className="bg-white rounded-xl shadow-2xl p-8 max-w-xs w-full relative border-2 border-red-200">
						<button
							className="absolute top-2 right-2 text-green-400 text-2xl font-bold hover:text-green-700"
							onClick={() => setSelected(null)}
							aria-label="Close"
							type="button"
						>
							×
						</button>
						<h3 className="mt-4 text-xl font-bold text-green-700">
							{selected.name}
						</h3>
						<p className="text-red-600 mb-2">{selected.price}</p>
						<p className="text-gray-700">{selected.description}</p>
					</div>
				</div>
			)}
		</main>
	);
}