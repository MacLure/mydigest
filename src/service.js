
const endPointRoot = "https://newsapi.org/v2"
const key = '086a7a7579144fe6a410f78be82dd0ff'


export async function getUSANews() {
  let result = await fetch(`${endPointRoot}/top-headlines?country=us&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}