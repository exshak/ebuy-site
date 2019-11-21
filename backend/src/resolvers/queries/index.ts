import { me } from "./me";
import { message } from "./message";
import { post } from "./post";

export default {
  ...me,
  ...message,
  ...post
};
