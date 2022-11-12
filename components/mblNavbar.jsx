import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { closeMblMenu } from '../redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import UserId from './userId';
import { Metamask_comp_text, Metamask_comp_icon } from './metamask/Metamask';

const MblNavbar = ({ theme }) => {
	const { mblMenu } = useSelector((state) => state.counter);
	const dispatch = useDispatch();
	const [profileShow, setProfileShow] = useState(false);
	const router = useRouter();
	const [navItemValue, setNavItemValue] = useState(1);
	const [navText, setnavText] = useState('');

	const handleItemDropdown = (e) => {
		const target = e.target.closest('li');

		if (!target.classList.contains('show')) {
			target.classList.add('show');
		} else {
			target.classList.remove('show');
		}
	};

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 1024) {
				dispatch(closeMblMenu());
			}
		});

		if (router.asPath === '/') {
			localStorage.setItem('navItemValue', 1);
		}
		if (router.asPath === '/home/home_2') {
			localStorage.setItem('navItemValue', 2);
		}
		if (router.asPath === '/home/home_3') {
			localStorage.setItem('navItemValue', 3);
		}
		if (router.asPath === '/home/home_4') {
			localStorage.setItem('navItemValue', 4);
		}
		if (router.asPath === '/home/home_5') {
			localStorage.setItem('navItemValue', 5);
		}
		if (router.asPath === '/home/home_6') {
			localStorage.setItem('navItemValue', 6);
		}
		if (router.asPath === '/home/home_7') {
			localStorage.setItem('navItemValue', 7);
		}
		if (router.asPath === '/home/home_8') {
			localStorage.setItem('navItemValue', 8);
		}
		if (router.asPath.includes('case-studies')) {
			localStorage.setItem('navItemValue', 9);
		}
		if (router.asPath.includes('case-studies/case_study')) {
			localStorage.setItem('navItemValue', 10);
		}
		if (router.asPath.includes('careers')) {
			localStorage.setItem('navItemValue', 11);
		}
		if (router.asPath.includes('item')) {
			localStorage.setItem('navItemValue', 12);
		}
		if (router.asPath === '/collection/explore_collection') {
			localStorage.setItem('navItemValue', 13);
		}
		if (router.asPath.includes('collection/avatar')) {
			localStorage.setItem('navItemValue', 14);
		}
		if (router.asPath.includes('activity')) {
			localStorage.setItem('navItemValue', 15);
		}
		if (router.asPath.includes('ranking')) {
			localStorage.setItem('navItemValue', 16);
		}
		if (router.asPath.includes('user')) {
			localStorage.setItem('navItemValue', 17);
		}
		if (router.asPath.includes('profile')) {
			localStorage.setItem('navItemValue', 18);
		}
		if (router.asPath.includes('about')) {
			localStorage.setItem('navItemValue', 19);
		}
		if (router.asPath.includes('contact')) {
			localStorage.setItem('navItemValue', 20);
		}
		if (router.asPath.includes('wallet')) {
			localStorage.setItem('navItemValue', 21);
		}
		if (router.asPath.includes('login')) {
			localStorage.setItem('navItemValue', 22);
		}
		if (router.asPath.includes('404')) {
			localStorage.setItem('navItemValue', 23);
		}
		if (router.asPath.includes('tarms')) {
			localStorage.setItem('navItemValue', 24);
		}

		if (router.asPath.includes('help_center')) {
			localStorage.setItem('navItemValue', 25);
		}
		if (router.asPath.includes('partners')) {
			localStorage.setItem('navItemValue', 27);
		}
		if (router.asPath.includes('blog')) {
			localStorage.setItem('navItemValue', 28);
		}
		if (router.asPath.includes('single_post')) {
			localStorage.setItem('navItemValue', 29);
		}
		if (router.asPath.includes('newsletter')) {
			localStorage.setItem('navItemValue', 30);
		}
		if (router.asPath.includes('create')) {
			localStorage.setItem('navItemValue', 33);
		}

		const value = localStorage.getItem('navItemValue');
		setNavItemValue(+value);

		if (navItemValue > 0 && navItemValue <= 8) {
			setnavText('home');
		} else if (navItemValue > 8 && navItemValue <= 24) {
			setnavText('pages');
		} else if (navItemValue > 24 && navItemValue <= 30) {
			setnavText('resources');
		} else if (navItemValue === 32) {
			setnavText('collection');
		} else if (navItemValue === 33) {
			setnavText('create');
		}
	}, [dispatch, navItemValue, router]);

	const homenavData = [
		{
			id: 1,
			text: 'home',
			url: '/',
			New: false,
		},
		{
			id: 2,
			text: 'home 2',
			url: '/home/home_2',
			New: false,
		},
		{
			id: 3,
			text: 'home 3',
			url: '/home/home_3',
			New: false,
		},
		{
			id: 4,
			text: 'home 4',
			url: '/home/home_4',
			New: false,
		},
		{
			id: 5,
			text: 'home 5',
			url: '/home/home_5',
			New: false,
		},
		{
			id: 6,
			text: 'home 6',
			url: '/home/home_6',
			New: false,
		},
		{
			id: 7,
			text: 'home 7',
			url: '/home/home_7',
			New: true,
		},
		{
			id: 8,
			text: 'home 8',
			url: '/home/home_8',
			New: true,
		},
	];

	const pageTextData = [
		{
			id: 9,
			text: 'Case Studies',
			href: '/case-studies',
			New: true,
		},
		{
			id: 10,
			text: 'Single Case Study',
			href: '/case-studies/case_study_1',
			New: true,
		},
		{
			id: 11,
			text: 'Careers',
			href: '/careers',
			New: true,
		},
		{
			id: 12,
			text: 'Item Details',
			href: '/item/item_20',
			New: false,
		},
		{
			id: 13,
			text: 'Explore Collections',
			href: '/collection/explore_collection',
			New: false,
		},
		{
			id: 14,
			text: 'Collection',
			href: '/collection/avatar_1',
			New: false,
		},
		{
			id: 15,
			text: 'Activity',
			href: '/activity',
			New: false,
		},
		{
			id: 16,
			text: 'Rankings',
			href: '/rankings',
			New: false,
		},
		{
			id: 17,
			text: 'User',
			href: '/user/avatar_6',
			New: false,
		},
		{
			id: 18,
			text: 'Edit Profile',
			href: '/profile/user_avatar',
			New: false,
		},
		{
			id: 19,
			text: 'About',
			href: '/about',
			New: false,
		},
		{
			id: 20,
			text: 'Contact',
			href: '/contact',
			New: false,
		},
		{
			id: 21,
			text: 'Wallet',
			href: '/wallet',
			New: false,
		},
		{
			id: 22,
			text: 'Login',
			href: '/login',
			New: false,
		},
		{
			id: 23,
			text: 'Page 404',
			href: '/404',
			New: false,
		},
		{
			id: 24,
			text: 'Terms Of Service',
			href: '/tarms',
			New: false,
		},
	];

	const resourcesData = [
		{
			id: 25,
			text: 'Help Center',
			href: '/help_center',
		},
		{
			id: 26,
			text: 'Platform Status',
			href: '/platform_status',
		},
		{
			id: 27,
			text: 'Partners',
			href: '/partners',
		},
		{
			id: 28,
			text: 'Blog',
			href: '/blog',
		},
		{
			id: 29,
			text: 'Single Post',
			href: '/single_post/post_1',
		},
		{
			id: 30,
			text: 'Newsletter',
			href: '/newsletter',
		},
	];

	return (
		<div
			className={
				mblMenu
					? 'js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent nav-menu--is-open'
					: 'js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent'
			}
		>
			{/* <!-- Mobile Logo / Menu Close --> */}
			<div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
				{/* <!-- Mobile Logo --> */}

				<Link href="/">
					<a>
						<img
							src="/images/logo.png"
							className="max-h-7 dark:hidden"
							alt="Persona Exis | NFT Marketplace"
						/>

						<img
							src="/images/logo_white.png"
							alt="Persona Exis | NFT Marketplace"
							className="max-h-7 dark:block hidden"
						/>
					</a>
				</Link>

				{/* <!-- Mobile Menu Close --> */}
				<button
					className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
					onClick={() => dispatch(closeMblMenu())}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
					>
						<path fill="none" d="M0 0h24v24H0z"></path>
						<path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
					</svg>
				</button>
			</div>

 
			{/* <!-- Mobile Connect Wallet / Socials --> */}
			<div className="mt-10 w-full lg:hidden">
				<Metamask_comp_text />

				<hr className="dark:bg-jacarta-600 bg-jacarta-100 my-5 h-px border-0" />

				{/* <!-- Socials --> */}
				<div className="flex items-center justify-center space-x-5">
					<a href="#" className="group">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="facebook"
							className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
						</svg>
					</a>
					<a href="#" className="group">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="twitter"
							className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
						</svg>
					</a>
					<a href="#" className="group">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="discord"
							className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
						>
							<path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
						</svg>
					</a>
					<a href="#" className="group">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="instagram"
							className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
						</svg>
					</a>
					<a href="#" className="group">
						<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="tiktok"
							className="group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512"
						>
							<path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path>
						</svg>
					</a>
				</div>
			</div>

			{/* <!-- Actions --> */}
			<div className="ml-8 hidden lg:flex xl:ml-12">
				{/* <!-- Wallet --> */}

				<Metamask_comp_icon prop={router} />

				{/* <!-- Profile --> */}
				<div className="js-nav-dropdown group-dropdown relative">
					{router.asPath === '/home/home_3' ? (
						<button
							className="dropdown-toggle border-jacarta-100 focus:bg-accent group hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent border-transparent bg-white/[.15]"
							onMouseEnter={() => setProfileShow(true)}
							onMouseLeave={() => setProfileShow(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className=" h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white fill-white"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
							</svg>
						</button>
					) : (
						<button
							className="dropdown-toggle border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
							onMouseEnter={() => setProfileShow(true)}
							onMouseLeave={() => setProfileShow(false)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
							>
								<path fill="none" d="M0 0h24v24H0z"></path>
								<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
							</svg>
						</button>
					)}

					<div
						className={
							profileShow
								? 'dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl show lg:visible lg:opacity-100'
								: 'dropdown-menu dark:bg-jacarta-800 group-dropdown-hover:opacity-100 group-dropdown-hover:visible !-right-4 !top-[85%] !left-auto z-10 min-w-[14rem] whitespace-nowrap rounded-xl bg-white transition-all will-change-transform before:absolute before:-top-3 before:h-3 before:w-full lg:absolute lg:grid lg:!translate-y-4 lg:py-4 lg:px-2 lg:shadow-2xl hidden lg:invisible lg:opacity-0'
						}
						onMouseEnter={() => setProfileShow(true)}
						onMouseLeave={() => setProfileShow(false)}
					>
						<UserId
							classes="js-copy-clipboard font-display text-jacarta-700 my-4 flex select-none items-center whitespace-nowrap px-5 leading-none dark:text-white"
							userId="0x7a86c0b064171007716bbd6af96676935799a63e"
							shortId={true}
						/>

						<div className="dark:border-jacarta-600 border-jacarta-100 mx-5 mb-6 rounded-lg border p-4">
							<span className="dark:text-jacarta-200 text-sm font-medium tracking-tight">
								Balance
							</span>
							<div className="flex items-center">
								<svg className="icon icon-ETH -ml-1 mr-1 h-[1.125rem] w-[1.125rem]">
									<use xlinkHref="/icons.svg#icon-ETH"></use>
								</svg>
								<span className="text-green text-lg font-bold">10 ETH</span>
							</div>
						</div>
						<Link href="/user/avatar_6">
							<a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M11 14.062V20h2v-5.938c3.946.492 7 3.858 7 7.938H4a8.001 8.001 0 0 1 7-7.938zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"></path>
								</svg>
								<span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
									My Profile
								</span>
							</a>
						</Link>
						<Link href="/profile/user_avatar">
							<a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
								</svg>
								<span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
									Edit Profile
								</span>
							</a>
						</Link>
						<Link href="/login">
							<a className="dark:hover:bg-jacarta-600 hover:text-accent focus:text-accent hover:bg-jacarta-50 flex items-center space-x-2 rounded-xl px-5 py-2 transition-colors">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
									className="fill-jacarta-700 h-4 w-4 transition-colors dark:fill-white"
								>
									<path fill="none" d="M0 0h24v24H0z"></path>
									<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM7 11V8l-5 4 5 4v-3h8v-2H7z"></path>
								</svg>
								<span className="font-display text-jacarta-700 mt-1 text-sm dark:text-white">
									Sign out
								</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MblNavbar;
