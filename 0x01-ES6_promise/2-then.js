export default function getFullResponseFromAPI(success){
  return success
    .then(() => ({status: 200, body: 'Success'}))
    .catch(() => new Error())
    .finally(() => console.log("Got a response from the API"));
}
