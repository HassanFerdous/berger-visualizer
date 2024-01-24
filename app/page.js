"use client";
import Image from "next/image";
import {useState} from "react";

export default function Home() {
	const [pathId, setPathId] = useState(null);

	const hanldeMouseover = (e) => {
		const pathId = e.target.dataset.code;
		setPathId(pathId);
	};
	const hanldeMouseLeave = (e) => {
		setPathId(null);
	};

	const handleClick = (e) => {
		var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		const target = e.target;
		target.style.fill = `#${randomColor}`;
	};

	return (
		<main>
			<div className="relative inline-block">
				<svg width={451} height={357}>
					<g transform="scale(0.877431906614786) translate(0, 0.9345898004434668)">
						<path
							d="M208.55 95.04L209.27 280.72L383.94 322.05L440.13 334.42L451.32 337.03L470.90 341.80L473.56 342.71L475.16 62.48"
							data-code="id1"
							fill="#812e40"
							fillOpacity={1}
							stroke={pathId === "id1" ? "blue" : "none"}
							strokeWidth={pathId === "id1" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
						<path
							d="M157.46 102.39L157.50 100.31L170.90 97.88L204.57 93.31L208.22 94.53L209.00 280.67L194.08 277.17L170.74 275.47L157.50 273.67"
							data-code="id2"
							fill="#ddd6c6"
							fillOpacity={1}
							stroke={pathId === "id2" ? "blue" : "none"}
							strokeWidth={pathId === "id2" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
						<path
							d="M0.00 65.75L156.60 100.03L157.17 297.66L0.00 372.18"
							data-code="id3"
							fill="#812e40"
							fillOpacity={1}
							stroke={pathId === "id3" ? "blue" : "none"}
							strokeWidth={pathId === "id3" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
						<path
							d="M514.00 57.55L211.57 94.43L206.70 92.60L173.23 96.86L157.31 99.75L0.00 65.25L0.00 0.00L514.00 0.00"
							data-code="id4"
							fill="#ddd6c6"
							fillOpacity={1}
							stroke={pathId === "id4" ? "blue" : "none"}
							strokeWidth={pathId === "id4" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
						<path
							d="M475.40 62.48L474.00 354.92L476.37 362.98L507.92 368.69L514.00 374.75L514.00 57.86"
							data-code="id5"
							fill="#ddd6c6"
							fillOpacity={1}
							stroke={pathId === "id5" ? "blue" : "none"}
							strokeWidth={pathId === "id5" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
						<path
							d="m0.5,352.453125c0,0 154,-80 155,-80c1,0 298,87 300,86c2,-1 11,-15 12,-15c1,0 49,12 48.5,11.546875c0.5,0.453125 -1.5,53.453125 -2,53c0.5,0.453125 -515.5,0.453125 -515,0c-0.5,0.453125 1.5,-55.546875 1.5,-55.546875z"
							data-code="id6"
							fill="#f9f6e1"
							fillOpacity={1}
							stroke={pathId === "id6" ? "blue" : "none"}
							strokeWidth={pathId === "id6" ? 1 : "none"}
							strokeOpacity={1}
							fillRule="evenodd"
							onMouseOver={hanldeMouseover}
							onMouseLeave={hanldeMouseLeave}
							onClick={handleClick}
						/>
					</g>
					<g />
				</svg>
				<Image className="pointer-events-none" fill src="/assets/overlay.png" alt="overlay" />
			</div>
		</main>
	);
}
