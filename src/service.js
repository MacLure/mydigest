
const endPointRoot = "https://newsapi.org/v2"
const key = '086a7a7579144fe6a410f78be82dd0ff'


export async function getCanadaNews() {
  let result = await fetch(`${endPointRoot}/top-headlines?country=ca&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getNews(country, topic, query) {
  let result = await fetch(`${endPointRoot}/everything?country=${country}&category=${topic}&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export function formattedDate(date) {
  const formattedDate = new Date(Date.parse(date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' }
  return (formattedDate.toLocaleString('en', options))
}
