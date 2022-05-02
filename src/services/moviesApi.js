function moviesApi() {
 return fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=a4a29fffc470fecd93a30cf31010c680`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По Вашому запиту нічого не знайдено!`));
  });
}
const api = {
    moviesApi
}

export default api