import cors from 'cors';

const acceptedOrigins = ['*']; // TODO: Add accepted origins

export default cors({
  origin: acceptedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true
});
