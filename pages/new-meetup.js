import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

export default function NewMeetup() {
  const router = useRouter();

  async function handleNewMeetup(meetup) {
    await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: { 'Content-Type': 'application/json' },
    });

    router.replace('/');
  }

  return (
    <>
      <Head>
        <title>Add a Meetup</title>
        <meta
          name='description'
          content='Create a new meetup for your community!'
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleNewMeetup} />
    </>
  );
}
