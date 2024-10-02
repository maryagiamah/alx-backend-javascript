/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return promise.finally(() => {
    console.log('Got a response from the API');
  }).then(
    (result) => ({ status: 200, body: 'success' }),
  ).catch(() => new Error());
}
