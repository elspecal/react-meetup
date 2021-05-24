import connectDB from '../../lib/connect-db';

export default async function handler(req, res) {
  if ('POST' === req.method) {
    try {
      const [meetupCollection, closeClient] = connectDB();

      await meetupCollection.insertOne(req.body);

      closeClient();

      res.status(201).json({ message: 'Meetup iserted.' });
    } catch (error) {
      console.error(error);
    }
  }
}
