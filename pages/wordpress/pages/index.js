import Head from 'next/head';
import Link from 'next/link';
//import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps({ params }) {

  //asynchronus to execute when receiving param from the getAllIds()
  const allData = await getSortedList(); //changed to asyn function so using await
  return {
    props: {
      allData
    },
    revalidate: 60
  };
}

export default function Home({ allData }) {
  return (
    <>
      <h1 className="m-3">Lists</h1>
      <div className="list-group mx-3">
        {allData.map(({ id, character }) => (
          <Link key={id} href={`/${id}`}>
            <a className='list-group-item'>{character}</a>
          </Link>
        ))}
      </div>
    </>
  )
}
