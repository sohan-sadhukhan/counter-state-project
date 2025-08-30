"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounter = () => {
	const [value, setValue] = useState(0);

	const minusOne = () => {
		setValue((prev) => prev - 1);
	};

	const plusOne = () => {
		setValue((prev) => prev + 1);
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				Counter Value: <span className="font-semibold">{value}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					className="cursor-pointer">
					<CirclePlus />
					Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounter;
