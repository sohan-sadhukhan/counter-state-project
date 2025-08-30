"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounter = () => {
	const [value, setValue] = useState(0);

	const minusOne = () => {
		if (value >= 1) {
			setValue((prev) => prev - 1);
		}
	};

	const plusOne = () => {
		if (value <= 99) {
			setValue((prev) => prev + 1);
		}
	};

	const minusTen = () => {
		if (value >= 10) {
			setValue((prev) => prev - 10);
		}
	};

	const plusTen = () => {
		if (value <= 90) {
			setValue((prev) => prev + 10);
		}
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value: <span className="font-semibold">{value}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					disabled={value < 1}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					disabled={value === 100}
					className="cursor-pointer">
					<CirclePlus />
					Plus 1
				</Button>

				<Button
					onClick={minusTen}
					disabled={value < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					disabled={value > 90}
					className="cursor-pointer">
					<CirclePlus />
					Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounter;
