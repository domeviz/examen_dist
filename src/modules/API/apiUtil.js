const URL_book = "http://4.249.152.149:8080";
const URL_authors = "http://4.249.152.122:8080";


export function getUrlBook(endpoint) {
    return `${URL_book}/${endpoint}`;
}


export function getUrlAuthors(endpoint) {
  return `${URL_authors}/${endpoint}`;
}

