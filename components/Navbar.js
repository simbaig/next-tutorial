import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Image src="/logo.png" height={77} width={128} alt="" />
			</div>
			<div>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<Link href="/ninjas">
					<a>Ninja Listing</a>
				</Link>
				<a></a>
				<a></a>
			</div>
		</nav>
	);
};

export default Navbar;
