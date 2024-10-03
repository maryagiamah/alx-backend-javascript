/* eslint-disable no-unused-vars */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const newArr = values.map((promise) => {
        if (promise.status === 'fulfilled') {
          return ({ status: promise.status, value: promise.value });
        }
        return ({ status: promise.status, value: `${promise.reason}` });
      });
      return newArr;
    });
}
