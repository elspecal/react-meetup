import Head from 'next/head';

import connectDB from '../lib/connect-db';
import MeetupList from '../components/meetups/MeetupList';

export default function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>React Meetup</title>
        <meta name='description' content='The place where communities born.' />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const [meetupCollection, closeClient] = await connectDB();
  const meetups = await meetupCollection.find().toArray();

  closeClient();

  return {
    props: {
      meetups: meetups.map(({ title, image, address, _id }) => ({
        id: _id.toString(),
        title,
        image,
        address,
      })),
    },
    revalidate: 60,
  };
}
