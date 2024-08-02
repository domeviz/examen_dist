import axios from "axios";
import { getUrlBook  } from "../../API/apiUtil.js";


export const obtenerBooks = async () => {
    console.log("findall")
    return await findAllBooks();

}

export const obtenerBookId = async (id) => {
    console.log("findid")
    return await findByIdBook (id);

}

export const nuevoBook = (book) => {
    console.log("create")
    createBook(book);
}

export const actualizarBook = (book, id) => {
    updateBook(book, id);
}

export const eliminarBook = (id) => {
    deleteBook(id);
}







const findAllBooks = async () => {
    const url=getUrlBook("books")
    const data = axios.get(url).then(r => r.data);
    return data;
}

const findByIdBook = async (id) => {
    const url=getUrlBook("books/")
    const data = axios.get(url+id).then(r => r.data);
    return data;
}

const createBook =  (book) => {
    const url=getUrlBook("books")
    const data = axios.post(url, book).then(r => r.data);
    console.log(data)
}

const updateBook =  (book, id) => {
    const url=getUrlBook("books/")
    const data = axios.put(url+id, book).then(r => r.data);
    console.log(data)
}

const deleteBook =  (id) => {
    const url=getUrlBook("books/")
    const data = axios.delete(url+id).then(r => r.data);
    console.log(data)
}