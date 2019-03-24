
const endPointRoot = "https://newsapi.org/v2"
const key = '086a7a7579144fe6a410f78be82dd0ff'


export async function getCanadaNews() {
  let result = await fetch(`${endPointRoot}/top-headlines?country=ca&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

// export async function getNews(country, topic, query) {
//   let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=${topic}&q=${query}&apiKey=${key}`)
//   .then(response => response.json());
// 	return result.articles;
// }


export async function getBusinessNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=business&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getEntertainmentNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=entertainment&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getHealthNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=health&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getScienceNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=science&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getTechnologyNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=technology&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}

export async function getSportsNews(country, query) {
  let result = await fetch(`${endPointRoot}/top-headlines?country=${country}&category=sports&q=${query}&apiKey=${key}`)
  .then(response => response.json());
	return result.articles;
}
export function formattedDate(date) {
  const formattedDate = new Date(Date.parse(date))
  const options = {year: 'numeric', month: 'short', day: 'numeric' }
  return (formattedDate.toLocaleString('en', options))
}

