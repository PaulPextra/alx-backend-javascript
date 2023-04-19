import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), signUpUser(fileName)])
    .then((res) => {
      res.map((output) => ({
        status: output.status,
        value: output.status === 'fulfilled' ? output.value : String(output.reason),
      }))
    });
}
