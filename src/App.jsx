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
						<li className="hover:text-red-400 text-indigo-500 hover:translate-y-0.5 transition-all">
							<a href="/resume.pdf">Resume</a>
						</li>
						<li className="hover:text-slate-800">
							<a href="#works">Works</a>
						</li>
						<li className="hover:text-slate-800">
							<a href="https://www.linkedin.com/in/mohamed-suhail-987b12193">
								Linkedin
							</a>
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
							className="px-8 py-2 border rounded-full font-bold bg-indigo-500 text-slate-100 hover:bg-indigo-400"
							href="mailto:mohamedsuhail113@gmail.com"
							download
						>
							📧 Mail Me
						</a>
						<a
							className="px-5 py-2 border rounded-full font-bold hover:text-indigo-500"
							href="tel:+919688588047"
						>
							☎️ Call Me
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

			{/*  Certification and skills */}

			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="projects">
					Certification and skills
					<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">
					Here are some of the skills I have honed
				</p>
				<div className="flex w-full justify-start gap-12 items-center max-w-6xl mt-8">
					<div
						id="project1"
						// className="border-2 border-slate-200 shadow-md p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
						className="flex items-start"
					>
						<img
							src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?w=740&t=st=1709788071~exp=1709788671~hmac=0334316df2da1cc46ef4e147297b6499c1610cd2a7f8330706a7c40058935805"
							alt="project"
							width="400"
							className="rounded-md h-[1/2] w-[1/3]"
						/>
						<div className="p-5 my-7">
							<ul>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Advanced Excel data management
											Certified
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Team management Certified
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											SQL and Redash usage knowledge
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											SAP EWM Extended warehouse
											management Certified -2024
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Financial Budgeting and Planning
											Certified
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Snowflake and Power BI usage
											knowledge
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											SQL and Redash usage knowledge
										</h1>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* AREAS OF EXPERTISE */}

			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="projects">
					Area Of Expertise<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">~</p>
				<div className="flex w-full justify-start gap-12 items-center max-w-6xl mt-8">
					<div
						id="project2"
						// className="border-2 border-slate-200 shadow-md p-2 rounded-lg max-w-[270px] overflow-hidden h-[29rem] group hover:border-indigo-500"
						className="flex items-start"
					>
						<img
							src="https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?w=740&t=st=1709793453~exp=1709794053~hmac=2fd38994c6c2053f302dfcad749e4b78f7d1ab808be8432a84bbb0fc685456b2"
							alt="project"
							width="400"
							className="rounded-md h-[1/2] w-[1/3]"
						/>
						<div className="p-5 my-7">
							<ul>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Supply Chain Management
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Logistics & Shipping
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Technology & Automation
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Customer Experience
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Sustainability
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Compliance & Security
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Cost Management
										</h1>
									</div>
								</li>
								<li className="list-disc">
									<div className="mt-4 flex flex-col gap-3 text-ellipsis">
										<h1 className="text-xl font-bold text-slate-700">
											Omnichannel Operations
										</h1>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Education */}
			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="works">
					Education
					<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">
					What I learned done so far
				</p>
				<div className="flex w-full gap-24 p-8">
					<div className="w-full p-3" id="leftSide">
						<div className="grid grid-cols-1 grid-rows-2 gap-5">
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10">
								<h1 className="text-4xl font-bold text-slate-700">
									Batchelor of engineering "CSE"
								</h1>
								<h2 className="font-semibold text-slate-500 my-2">
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
									src="/mba.jpg"
									alt="MBA"
									height={200}
									width={200}
								/>
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-solid border-l-blue-900 ml-2"></div>
							</div>
						</div>
					</div>
					<div
						id="divider"
						className="absolute mt-28 w-2 h-[1000px] bg-slate-200 left-1/2 flex justify-center"
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
						<div className="grid grid-cols-1 grid-rows-2 gap-5">
							<div className="flex items-center justify-start">
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-solid border-r-blue-900"></div>
								<img
									src="/college.jpeg"
									alt="College"
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
						</div>
					</div>
				</div>
			</section>

			{/* Experience */}
			<section className="w-full max-w-6xl mt-28">
				<h1 className="text-5xl font-bold text-gray-900" id="works">
					Experience
					<span className="text-indigo-500">;</span>
				</h1>
				<p className="max-w-xl mt-2 font-semibod text-slate-400">
					What I have done so far
				</p>
				<div className="flex w-full gap-24 p-8">
					<div className="w-full p-3" id="leftSide">
						<div className="grid grid-cols-1 grid-rows-4 gap-14">
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10">
								<h1 className="text-4xl font-bold text-slate-700">
									Business Manager"
								</h1>
								<h2 className="font-semibold text-slate-500 my-2">
									Deci-ltd Ireland | Nov 2024 - Present
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Frieght Forwarding | Procurement |
										Expedite | Planning | Global & Domestic
										Logistics | Inventory management.
									</li>
								</ul>
							</div>
							<div className="flex justify-end items-center">
								<img
									src="/Pharmarack.avif"
									alt="Pharmarack.avif"
									height={200}
									width={200}
								/>
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-solid border-l-blue-900 ml-2"></div>
							</div>
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10 my-5">
								<h1 className="text-4xl font-bold text-slate-700">
									Station/Cluster Manager (North Tamil Nadu)"
								</h1>
								<h2 className="font-semibold text-slate-500 my-2">
									Delhivery" | Feb 2021 to Apr 2023
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Global & Domestic Logistics | E-commerce
										= B2C = D2C = B2B Logistics & Supply
										Chain | Warehousing
									</li>
								</ul>
							</div>
							<div className="flex justify-end items-center">
								<img
									src="/Swiggy.png"
									alt="Swiggy"
									height={200}
									width={200}
								/>
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-solid border-l-blue-900 ml-2"></div>
							</div>
						</div>
					</div>
					<div
						id="divider"
						className="absolute mt-16 w-2 h-[1500px] bg-slate-200 left-1/2 flex justify-center"
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
						<div className="grid grid-cols-1 grid-rows-4 gap-5">
							<div className="flex items-center justify-start my-10">
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-solid border-r-blue-900"></div>
								<img
									src="/DECI Ltd.png"
									alt="DECI Ltd"
									width={200}
									height={200}
								/>
							</div>
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10">
								<h1 className="text-4xl font-bold text-slate-700">
									Zonal Business Manager South-2 Customer
									growth (Tamil Nadu and Kerala) "
								</h1>
								<h2 className="font-semibold text-slate-500">
									Awacs/Pharmarack" | July 2023 to Oct 2024
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Operations | B2B | D2C | Sales |
										Customer relationship
									</li>
								</ul>
							</div>
							<div className="flex items-center justify-start my-10">
								<div className="border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-solid border-r-blue-900"></div>
								<img
									src="/delhivery.png"
									alt="delhivery"
									width={200}
									height={200}
								/>
							</div>
							<div className="rounded-lg px-6 border-b-2 bg-slate-100 py-10">
								<h1 className="text-4xl font-bold text-slate-700">
									Fleet Operation Manager(North TamilNadu)"
								</h1>
								<h2 className="font-semibold text-slate-500">
									Swiggy | Feb 2019 - July 2020
								</h2>
								<ul className="list-disc list-outside ml-4 mt-4">
									<li>
										Fleet handling | Operations | Vendor
										management | Sourcing | On-boarding |
										War room | Data analysis | Finance.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
