import React from "react";

function App() {
	return (
		<>
			<nav className="flex w-full justify-center px-16 py-3 bg-gray-100">
				<div className="flex w-full max-w-6xl justify-between items-center">
					<h1 className="text-5xl font-bold text-gray-900">
						Profile<span className="text-indigo-500">.</span>
					</h1>
					<ul className="flex gap-7 font-semibold text-xl text-slate-500">
						<li className="hover:text-slate-800">
							<a href="#Certification">Certification</a>
						</li>
						<li className="hover:text-slate-800">
							<a href="#works">Works</a>
						</li>
						<li className="hover:text-slate-800">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</nav>

			{/* Hero Section */}

			<section className="flex w-full justify-between items-center max-w-6xl mt-24">
				<div className="flex flex-col gap-3">
					<h3 className="text-sm text-slate-500 ml-2">
						Operation Manager
					</h3>
					<h1 className="text-6xl font-bold">Mohamed Suhail</h1>
					<p className="max-w-xl mt-2 font-semibod text-slate-600">
						Experienced professional with expertise in Freight
						Forwarding & Logistics, Procurement, Business Management
						& Development, Sales & Marketing, and Supply Chain
						Operations. Skilled in optimizing logistics and
						procurement processes for both domestic and global
						markets, while formulating strategies to drive business
						growth and achieve revenue targets. Proven track record
						in the FMCG sector (Food, Non-Food, OTC, Health &
						Nutrition), with strong capabilities in e-commerce and
						supply chain management, delivering operational
						efficiency and market expansion.
					</p>
					<div className="flex gap-4 mt-5">
						<a
							className="px-5 py-2 border rounded-full font-bold bg-indigo-500 text-slate-100 hover:bg-indigo-400"
							href="/resume.pdf"
							download
						>
							Get Resume
						</a>
						<a
							className="px-5 py-2 border rounded-full font-bold hover:text-indigo-500"
							href="mailto:mohamedsuhail113@gmail.com"
						>
							Mail Me
						</a>
						<a
							className="px-5 py-2 border rounded-full font-bold hover:text-indigo-500"
							href="tel:+919688588047"
						>
							Call Me
						</a>
						<a
							className="px-5 py-2 border rounded-full font-bold hover:text-indigo-500"
							href="https://www.linkedin.com/in/mohamed-suhail-987b12193"
						>
							Linkedin
						</a>
					</div>
				</div>
				<div>
					<img
						src="/programmer.svg"
						alt="programmer"
						height="400"
						width="400"
						className="bounce drop-shadow-[0_0_25px_rgba(145,94,255,1)]"
					/>
				</div>
			</section>

			{/* Certification */}

			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="projects">
					Skills<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">
					Here are some of my Skill
				</p>
				<div className="flex w-full justify-start gap-12 items-center max-w-6xl mt-8">
					<div
						id="project1"
						className="border-2 border-slate-200 shadow-md p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
					>
						{/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
						<div className="w-[250px] absolute z-10 flex justify-end translate-y-1 group/git">
							<a
								href="https://shortener.garrycodes.co.in/"
								target="_blank"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 496 512"
									className="size-10 rounded-lg p-2 bg-slate-200 group-hover/git:bg-slate-300 mr-2"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
								</svg>
							</a>
						</div>
						<img
							src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1709788071~exp=1709788671~hmac=0334316df2da1cc46ef4e147297b6499c1610cd2a7f8330706a7c40058935805"
							alt="project"
							height="450"
							width="250"
							className="object-cover aspect-square rounded-md scale-95 group-hover:scale-100 transition-all"
						/>
						<div className="my-2 p-1">
							<div className="mt-4 flex flex-col gap-3 text-ellipsis">
								<h1 className="text-3xl font-bold text-slate-500 group-hover:text-slate-800">
									Shortener
								</h1>
								<p className="font-semibold text-slate-600">
									A compact tool to shorten long urls or use
									it as a redirection tool.
								</p>
							</div>
							<div className="flex gap-2 mt-2">
								<h2 className="bg-red-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#NextJs
								</h2>
								<h2 className="bg-green-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#React
								</h2>
								<h2 className="bg-blue-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#TailwindCSS
								</h2>
							</div>
						</div>
					</div>

					<div
						id="project2"
						className="border-2 border-slate-200 shadow-md p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
					>
						{/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
						<a href="https://vegibuy.vercel.app/" target="_blank">
							<div className="w-[250px] absolute z-10 flex justify-end translate-y-1  group/git">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 496 512"
									className="size-10 rounded-lg p-2 bg-slate-200 group-hover/git:bg-slate-300 mr-2"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
								</svg>
							</div>
						</a>
						<img
							src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?w=740&t=st=1709793453~exp=1709794053~hmac=2fd38994c6c2053f302dfcad749e4b78f7d1ab808be8432a84bbb0fc685456b2"
							alt="project"
							height="450"
							width="250"
							className="object-cover aspect-square rounded-md scale-95 group-hover:scale-100 transition-all"
						/>
						<div className="my-2 p-1">
							<div className="mt-4 flex flex-col gap-3 text-ellipsis">
								<h1 className="text-3xl font-bold text-slate-500 group-hover:text-slate-800">
									Vegibuy
								</h1>
								<p className="font-semibold text-slate-600">
									A small frontend project for a ecommerce
									site with some example products
								</p>
							</div>
							<div className="flex gap-2 mt-2">
								<h2 className="bg-red-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#NextJs
								</h2>
								<h2 className="bg-green-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#React
								</h2>
								<h2 className="bg-blue-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#TailwindCSS
								</h2>
							</div>
						</div>
					</div>

					<div
						id="project3"
						className="border-2 border-slate-200 shadow-md p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
					>
						{/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
						<a
							href="https://github.com/Silent0bserv3r/vegibuy-graphql"
							target="_blank"
						>
							<div className="w-[250px] absolute z-10 flex justify-end translate-y-1 group/git">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 496 512"
									className="size-10 rounded-lg p-2 bg-slate-200 group-hover/git:bg-slate-300 mr-2"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
								</svg>
							</div>
						</a>
						<img
							src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?w=996&t=st=1709793480~exp=1709794080~hmac=b549901e4549c5e4f21aab24949fb56d8b05bcf7337faeb2379731356783891d"
							alt="project"
							height="450"
							width="250"
							className="object-cover aspect-square rounded-md scale-95 group-hover:scale-100 transition-all"
						/>
						<div className="my-2 p-1">
							<div className="mt-4 flex flex-col gap-3 text-ellipsis">
								<h1 className="text-3xl font-bold text-slate-500 group-hover:text-slate-800">
									Vegibuy-Nest
								</h1>
								<p className="font-semibold text-slate-600">
									A NestJS backend for Auth, creation and
									deletion of products
								</p>
							</div>
							<div className="flex gap-2 mt-2">
								<h2 className="bg-red-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#NestJs
								</h2>
								<h2 className="bg-green-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#OAuth
								</h2>
								<h2 className="bg-blue-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
									#GraphQl
								</h2>
							</div>
						</div>
					</div>

					{/* <div
                        id="project4"
                        className="border-2 border-slate-200 p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
                    >
                        <div className="w-1/6 absolute z-10 flex justify-end translate-y-1 group/git">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                className="size-10 rounded-lg p-2 bg-slate-200 group-hover/git:bg-slate-300 mr-2"
                            >
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </div>
                        <img
                            src="https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?w=740&t=st=1709793498~exp=1709794098~hmac=06932f2fb39f21c809700acf7596f3d30456a15389fefa520864d7dde63aa508"
                            alt="project"
                            height="450"
                            width="250"
                            className="object-cover aspect-square rounded-md scale-95 group-hover:scale-100 transition-all"
                        />
                        <div className="my-2 p-1">
                            <div className="mt-4 flex flex-col gap-3 text-ellipsis">
                                <h1 className="text-3xl font-bold text-slate-500 group-hover:text-slate-800">
                                    VegiBuy
                                </h1>
                                <p className="font-semibold text-slate-600">
                                    Uploads the file and folder to user drive
                                    using api using outh2.0 authentication
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <h2 className="bg-red-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
                                    #React
                                </h2>
                                <h2 className="bg-green-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
                                    #JavaScript
                                </h2>
                                <h2 className="bg-blue-400 text-xs py-1 px-2 text-slate-700 font-semibold rounded-full">
                                    #CSS
                                </h2>
                            </div>
                        </div>
                    </div> */}
				</div>
			</section>

			{/* Experience */}
			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="works">
					Education & Experience{" "}
					<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">
					What I have done so far
				</p>
				<div className="flex w-full gap-24 p-8">
					<div className="w-full p-3" id="leftSide">
						<div className="grid grid-cols-1 grid-rows-3 gap-5">
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10 row-start-2">
								<h1 className="text-4xl font-bold text-slate-700">
									Batchelor of engineering "CSE"
								</h1>
								<h2 className="font-semibold text-slate-500">
									Hindusthan College of engineering and
									technology | 2014 - 2018
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										I learned programming basics, data
										structures, algorithms, and core
										computer science principles.
									</li>
									<li>
										I honed my expertise in various domains
										such as software engineering, web
										technologies, artificial intelligence.
									</li>
									<li>
										I also focused on cultivating soft
										skills, ethical practices, and teamwork,
										ensuring I'm well-prepared for a
										successful career in the dynamic field.
									</li>
								</ul>
							</div>
							<div className="flex justify-end items-center">
								<img
									src="/college.png"
									alt="LPU"
									height={200}
									width={200}
								/>
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-solid border-l-blue-900 ml-2"></div>
							</div>
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10 row-start-3">
								<h1 className="text-4xl font-bold text-slate-700">
									Software Engineer
								</h1>
								<h2 className="font-semibold text-slate-500">
									Syscloud Technologies Pvt. Ltd. | 2022 -
									2024
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Proficient in PHP and JavaScript, I
										contribute to building robust and
										scalable applications.
									</li>
									<li>
										Skilled in identifying and fixing code
										bugs, I ensure software reliability. I
										utilize Grafana, Elasticsearch, and
										Fluentd for proactive system monitoring.
									</li>
									<li>
										I manage AWS resources like FSx, EC2,
										and ECS for optimized performance.
										Additionally, I proficiently administer
										PostgreSQL databases, ensuring data
										security and integrity while providing
										prompt user support.
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div
						id="divider"
						className="absolute mt-28 w-2 h-[900px] bg-slate-200 left-1/2 flex justify-center"
					>
						<div
							id="traveler"
							className="size-[30px] sticky top-[70%] z-20"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								className="size-6 rotate-90"
							>
								{/* !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
								<path
									fill="#6366f1"
									d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
								/>
							</svg>
						</div>
					</div>
					<div className="w-full p-3" id="rightSide">
						<div className="grid grid-cols-1 grid-rows-3 gap-5">
							<div className="flex items-center justify-start">
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-solid border-r-blue-900"></div>
								<img
									src="/dsvn.png"
									alt="DSVN"
									width={200}
									height={200}
								/>
							</div>
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10 row-start-2">
								<h1 className="text-4xl font-bold text-slate-700">
									MBA "Logistics and supply chain"
								</h1>
								<h2 className="font-semibold text-slate-500">
									Bharathiyaar Univercity "Correspondence" |
									2020 - 2022
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Developed the ability to design,
										implement, and manage end-to-end supply
										chain strategies that optimize
										efficiency, reduce costs, and enhance
										overall business performance.
									</li>
									<li>
										Gained expertise in managing logistics
										operations, including transportation,
										inventory management, and distribution,
										to ensure timely delivery and
										cost-effective solutions in both local
										and global contexts.
									</li>
									<li>
										Acquired skills in utilizing advanced
										analytics, ERP systems, and supply chain
										technologies to make informed decisions,
										streamline processes, and improve
										forecasting, procurement, and inventory
										management.
									</li>
								</ul>
							</div>
							<div className="flex items-center justify-start">
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-solid border-r-blue-900"></div>
								<img
									src="/syscloud.png"
									alt="syscloud"
									width={200}
									height={200}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			{/* <section className="w-full max-w-6xl mt-28">
                <div className="flex w-full p-8 justify-between">
                    <div className="flex flex-col justify-center w-full max-w-[29rem]">
                        <h1
                            className="text-5xl font-bold text-gray-900"
                            id="contact"
                        >
                            Contact <span className="text-indigo-500">Me</span>
                        </h1>
                        <p className="max-w-xl mt-2 font-semibod text-slate-400">
                            Let me know what you think
                        </p>
                        <form
                            id="contact-form"
                            className="flex flex-col gap-2 mt-14"
                        >
                            <input
                                type="hidden"
                                name="contact_number"
                                value={requestId}
                            />
                            <label className="font-bold text-slate-600">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                className="border-2 rounded-xl py-4 px-6 focus:outline-indigo-500"
                                placeholder="What's your name?"
                            />
                            <label className="font-bold text-slate-600">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                className="border-2 rounded-xl py-4 px-6 focus:outline-indigo-500"
                                placeholder="What's your email?"
                            />
                            <label className="font-bold text-slate-600">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                className="border-2 rounded-xl py-4 px-6 focus:outline-indigo-500"
                                rows={10}
                                placeholder="Say what you like"
                            ></textarea>
                            <input
                                type="submit"
                                value="Send"
                                className="rounded-xl py-4 px-6 shadow-black shadow-2xl font-bold bg-gradient-to-t from-indigo-600 to-indigo-500 text-white hover:shadow-sm active:shadow-md"
                            />
                        </form>
                    </div>
                    <img
                        src="/contact.svg"
                        alt="contact us"
                        height="450"
                        width="450"
                        className="drop-shadow-[0_0_15px_rgba(145,94,255,1)]"
                    />
                </div>
            </section> */}

			{/* Footer */}
			<footer className="flex justify-center items-center font-bold text-slate-600 mt-3 w-full p-3">
				<div className="text-sm">
					Made with{" "}
					<a
						href="https://vitejs.dev/guide/"
						target="_blank"
						className="text-[#ffd62e]"
					>
						Vite
					</a>{" "}
					and{" "}
					<a
						href="https://tailwindcss.com/docs/installation"
						target="_blank"
						className="text-[#38bdf8]"
					>
						Tailwind
					</a>
					. SVGs aquired from&nbsp;
					<a
						href="https://undraw.co/"
						target="_blank"
						className="text-indigo-500"
					>
						UnDraw
					</a>
					<a
						href="https://github.com/Silent0bserv3r/silent0bserv3r.github.io"
						target="_blank"
					>
						{"  "}Github Code
					</a>
				</div>
			</footer>
		</>
	);
}

export default App;
