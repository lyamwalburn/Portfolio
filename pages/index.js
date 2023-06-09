import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Software development is a passion I hope to follow into a lifelong career. I enjoy challenge, problem solving and career long development.</p>
        <p>
          This website is a place to showcase my current and future projects in software development.{' '}
          <Link href="/posts/first-post">My First Post</Link>
        </p>
      </section>
    </Layout>
  );
}