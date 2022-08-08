import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>HomePage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					obcaecati praesentium ipsum dolorem pariatur, soluta accusantium
					sapiente ipsam totam ex odit facere, esse illo sit amet fuga deleniti
					possimus. Qui.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					obcaecati praesentium ipsum dolorem pariatur, soluta accusantium
					sapiente ipsam totam ex odit facere, esse illo sit amet fuga deleniti
					possimus. Qui.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
					obcaecati praesentium ipsum dolorem pariatur, soluta accusantium
					sapiente ipsam totam ex odit facere, esse illo sit amet fuga deleniti
					possimus. Qui.
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
