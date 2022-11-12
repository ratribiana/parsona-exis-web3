import Link from 'next/link';
import React from 'react';

const Hero_6 = () => {
	return (
		<>
			{/* <!-- Hero --> */}
			<section className="relative pb-32 pt-20 lg:pt-48">
				<picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 dark:hidden">
					<img src="/images/gradient.jpg" alt="gradient" />
				</picture>
				<picture className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden dark:block">
					<img src="/images/gradient_dark.png" alt="gradient dark" />
				</picture>

				<div className="ml-auto mr-auto h-full max-w-[91rem] px-4">
					<div className="grid h-full items-center gap-4 lg:grid-cols-12">
						<div className="col-span-6 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
			 
							<h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white lg:text-left lg:text-6xl">
								First Metaverse Persona <br/> NFT Powered by AI
							</h1>
							<p className="mb-8 max-w-md text-center text-lg dark:text-jacarta-200 lg:text-left">
								The world of blockchain-based digital identities or "Personas", ntersects with the metaverse, which allows players to create their own avatars.
							</p>
							<div className="flex space-x-4">
								<Link href="/collection/explore_collection">
									<a className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
										Contact Us
									</a>
								</Link>
								<Link href="/collection/explore_collection">
									<a className="rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
										Learn More
									</a>
								</Link>
							</div>
						</div>

						{/* <!-- Hero image --> */}
						<div className="col-span-6">
							<div className="relative text-center lg:pl-10 lg:text-right">
								<div className="absolute -left-[0%] bottom-1/4 inline-block animate-fly rounded-2lg bg-[#EAF7E1] p-6 shadow-2xl sm:left-[0%] md:left-0">
									<div className="flex gap-4">
										<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white">
											<svg
												viewBox="0 0 24 24"
												width="24"
												height="24"
												className="fill-green"
												preserveAspectRatio="xMidYMid meet">
												<g transform="translate(0.000000,24) scale(0.100000,-0.100000)"
												fill="#10b981" stroke="none">
												<path d="M24 207 c-2 -8 -4 -52 -2 -98 l3 -84 95 0 95 0 0 95 0 95 -93 3 c-71
												2 -94 0 -98 -11z m176 -62 c0 -52 -1 -55 -19 -46 -14 8 -22 7 -31 -4 -11 -14
												-15 -14 -30 0 -21 19 -39 19 -62 -2 -17 -15 -18 -14 -18 45 l0 62 80 0 80 0 0
												-55z m-69 -75 c8 0 20 5 27 12 13 13 42 -6 42 -28 0 -11 -19 -14 -80 -14 -44
												0 -80 3 -80 7 0 4 10 17 22 30 19 21 23 21 38 8 9 -8 23 -15 31 -15z"/>
												<path d="M130 164 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3
												32 -7 9 -16 16 -20 16 -4 0 -13 -7 -20 -16z"/>
												</g>
											</svg>
										</span>
										<div className="text-left">
											<span className="block font-display text-3xl text-green">20x</span>
											<span className="block font-display text-sm text-jacarta-600">
												Upload Photos
											</span>
										</div>
									</div>
								</div>
								<img
									src="/images/hero/hero_consultant_main.png"
									alt="crypto consultant hero"
									className="inline-block rounded-2.5xl"
								/>

								<div className="absolute top-0 -right-[5%] inline-block animate-fly rounded-2lg bg-white p-8 shadow-2xl sm:top-10 sm:right-[5%] lg:-right-[17%]">
									<div className="text-left">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											width="24"
											height="24"
											className="absolute right-6 top-6 fill-red"
										>
											<path fill="none" d="M0 0H24V24H0z" />
											<path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
										</svg>
										<span className="block font-display text-3xl text-[#737EF2]">+18k</span>
										<span className="mb-5 block font-display text-sm text-jacarta-600">
											Followers
										</span>
										<img
											src="/images/crypto-consultant/happy_customers.png"
											alt="happy customers"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- end hero --> */}
		</>
	);
};

export default Hero_6;
