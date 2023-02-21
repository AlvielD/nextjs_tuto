import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                // Strategy controls when to load the third-party script
                // onLoad runs JS code inmediately after loading the script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy='lazyOnload'
                onLoad={() =>
                    console.log('Script loaded correctly, windows.FB has been populated')
                }
            />
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}