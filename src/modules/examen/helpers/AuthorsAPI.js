import axios from "axios";
import { getUrlAuthors  } from "../../API/apiUtil.js";


export const obtenerAuthors = async () => {
    console.log("findall")
    return await findAllAuthors();
}

export const obtenerAuthorsId = async (id) => {
    console.log("findId")
    return await findByIdAuthor (id);
}

export const nuevoAuthor = (author) => {
    console.log("create")
    createAuthor(author);
}

export const actualizarAuthor = (author, id) => {
    console.log("update")
    updateAuthor(author, id);
}

export const eliminarAuthor= (id) => {
    console.log("delete")
    deleteAuthor(id);
}







const findAllAuthors = async () => {
    const url=getUrlAuthors("authors")
    const data = axios.get(url).then(r => r.data);
    return data;
}

const findByIdAuthor = async (id) => {
    const url=getUrlAuthors("authors/")
    const data = axios.get(url+id).then(r => r.data);
    return data;
}

const createAuthor =  (author) => {
    const url=getUrlAuthors("authors")
    const data = axios.post(url, author).then(r => r.data);
    console.log(author)
}

const updateAuthor =  (author, id) => {
    const url=getUrlAuthors("authors/")
    const data = axios.put(url+id, author).then(r => r.data);
    console.log(data)
}

const deleteAuthor =  (id) => {
    const url=getUrlAuthors("authors/")
    const data = axios.delete(url+id).then(r => r.data);
    console.log(data)
}

