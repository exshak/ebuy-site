import { auth } from './auth';
import { message } from './message';
import { post } from './post';

export default {
  ...auth,
  ...message,
  ...post
};
