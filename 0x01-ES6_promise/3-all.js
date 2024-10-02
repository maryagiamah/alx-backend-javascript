import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then(
    (values) => {
      let res = '';
      for (const obj of values) {
        for (const [key, val] of Object.entries(obj)) {
          if (key !== 'status') {
            res = res.concat(res ? ' ' : '', val);
          }
        }
      }
      console.log(res);
    },
  ).catch(() => console.log('Signup system offline'));
}
