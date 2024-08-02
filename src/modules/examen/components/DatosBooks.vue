<template>
    <div class="contenedor">
        <h1> Administración Libros </h1>

        <div class="barra">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ISBN</th>
                        <th>Título</th>
                        <th>Precio</th>
                        <th>Autor</th>
                        <th>Seleccion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="book in listaBooks" :key="book.id">
                        <td>{{ book.id }}</td>
                        <td>{{ book.isbn }}</td>
                        <td>{{ book.title }}</td>
                        <td>{{ book.price }}</td>
                        <td>{{ book.authorName }}</td>
                        <td>
                            <button @click="mostrarActualizar(book)" class="btn edit-btn">Actualizar</button>
                            <button @click="deleteBook(book.id)" class="btn delete-btn">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="form-container" v-if="mostrarCampos"> 
            <h2>Actualizar Libro</h2>
            <label>ID</label>
            <input v-model="id" type="text" disabled />
            <label>ISBN</label>
            <input v-model="isbn" type="text" />
            <label>Nombre</label>
            <input v-model="nombre" type="text" />
            <label>Precio</label>
            <input v-model="precio" type="number" />
            <label>Autor</label>
            <input v-model="author" type="text" />
            <button @click="updateBook" class="btn guardar-btn">Actualizar</button>
        </div>

        <div class="form-container" v-if="mostrarCamposNuevo"> 
            <h2>Insertar Libro</h2>
            <label>ISBN</label>
            <input v-model="newIsbn" type="text" />
            <label>Nombre</label>
            <input v-model="newName" type="text" />
            <label>Precio</label>
            <input v-model="newPrice" type="number" />
            <label>Autor</label>
            <input v-model="newAuthor" type="text" />
            <button @click="insertarBook" class="btn guardar-btn">Guardar</button>
        </div>
    
        <button @click="agregarBook" class="btn crear-btn">Crear Libro</button>
    </div>
</template>

<script>
import { obtenerBooks, eliminarBook, actualizarBook, nuevoBook } from "../helpers/BooksAPI.js"

export default {
    data() {
        return {
            listaBooks: [],
            id: null,
            isbn: null,
            nombre: null,
            precio: null,
            author: null,
            newIsbn: null,
            newName: null,
            newPrice: null,
            newAuthor: null,
            mostrarCampos: false,
            mostrarCamposNuevo: false,
        };
    },
    methods: {
        async obtenerBooksAll() {
            const data = await obtenerBooks();
            this.listaBooks = data;
        },
        async deleteBook(id) {
            await eliminarBook(id);
            this.obtenerBooksAll();
        },
        async updateBook() {
            const data = {
                id: this.id,
                isbn: this.isbn,
                title: this.nombre,
                price: this.precio,
                authorId: this.author,
            }
            await actualizarBook(data, this.id);
            this.mostrarCampos = false;
            this.obtenerBooksAll();
        },
        mostrarActualizar(book) {
            this.mostrarCampos = !this.mostrarCampos;
            this.id = book.id;
            this.isbn = book.isbn;
            this.nombre = book.title;
            this.precio = book.price;
            this.author = book.authorName;
        },
        agregarBook() {
            this.mostrarCamposNuevo = !this.mostrarCamposNuevo;
        },
        async insertarBook() {
            const data = {
                isbn: this.newIsbn,
                title: this.newName,
                price: this.newPrice,
                authorId: this.newAuthor,
            };
            await nuevoBook(data);
            this.mostrarCamposNuevo = false;
            this.obtenerBooksAll();
        }
    },
    mounted() {
        this.obtenerBooksAll();
    },
}
</script>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #BDE0FE;
    margin-top: 80px; 
}

h1 {
    text-align: center;
    color: black;
    font-size: 2.5em;
    margin-bottom: 20px;
}

.barra {
    width: 80%;
    max-width: 800px;
    margin: 20px auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: black;
}

th {
    background-color: #ce90f2;
}

td {
    background-color: #FFC8DD;
}

.btn {
    padding: 8px 12px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin: 5px;
    transition: background-color 0.3s ease;
}

.edit-btn {
    background-color: #CDB4DB;
}

.delete-btn {
    background-color: #f497a9;
}

.crear-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #8093f1;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.2em;
}

.guardar-btn {
    background-color: #f24d89;
}

.form-container {
    width: 80%;
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background-color: #FFC8DD;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin: 10px 0 5px;
    color: black;
    font-weight: bold;
}

input[type="text"], input[type="number"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1em;
}
</style>
