export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve("Resolved");
    reject("Failed");
  });
}
