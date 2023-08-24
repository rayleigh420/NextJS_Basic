"use client";

export default function Home() {
	const handleClickButton = () => {
		console.log("Click Button");
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>Hello Le Nhat Duy </div>
			<div>Test 2</div>
			<div>Test 3</div>
			<button onClick={() => handleClickButton()}>Click</button>
		</main>
	);
}
