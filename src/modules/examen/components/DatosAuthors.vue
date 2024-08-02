<template>
    <div class="contenedor">
        <h1>Administración Autores</h1>

        <div class="barra">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Seleccion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="author in listaAuthors" :key="author.id">
                        <td>{{ author.id }}</td>
                        <td>{{ author.firstName }}</td>
                        <td>{{ author.lastName }}</td>
                        <td>
                            <button @click="mostrarActualizar(author)" class="btn edit-btn">Actualizar</button>
                            <button @click="deleteAuthor(author.id)" class="btn delete-btn">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="form-container" v-if="mostrarCampos"> 
            <h2>Actualizar Autor</h2>
            <label>ID</label>
            <input v-model="id" type="text" disabled />
            <label>Nombre</label>
            <input v-model="nombre" type="text" />
            <label>Apellido</label>
            <input v-model="apellido" type="text" />
            <button @click="updateAuthor" class="btn guardar-btn">Actualizar</button>
        </div>

        <div class="form-container" v-if="mostrarCamposNuevo"> 
            <h2>Insertar Autor</h2>
            <label>Nombre</label>
            <input v-model="newNombre" type="text" />
            <label>Apellido</label>
            <input v-model="newApellido" type="text" />
            <button @click="insertarAuthor" class="btn guardar-btn">Guardar</button>
        </div>
    
        <button @click="agregarAuthor" class="btn crear-btn">Crear Autor</button>
    </div>
</template>

<script>
import { obtenerAuthors, eliminarAuthor, actualizarAuthor, nuevoAuthor } from "../helpers/AuthorsAPI.js"

export default {
    data() {
        return {
            listaAuthors: [],
            id: null,
            nombre: null,
            apellido: null,
            newNombre: null,
            newApellido: null,
            mostrarCampos: false,
            mostrarCamposNuevo: false,
        };
    },
    methods: {
        async obtenerAuthorsAll() {
            const data = await obtenerAuthors();
            this.listaAuthors = data;
        },
        async deleteAuthor(id) {
            await eliminarAuthor(id);
            this.obtenerAuthorsAll();
        },
        async updateAuthor() {
            const data = {
                id: this.id,
                firstName: this.nombre,
                lastName: this.apellido,
            }
            await actualizarAuthor(data, this.id);
            this.mostrarCampos = false;
            this.obtenerAuthorsAll();
        },
        mostrarActualizar(author) {
            this.mostrarCampos = !this.mostrarCampos;
            this.id = author.id;
            this.nombre = author.firstName;
            this.apellido = author.lastName;
        },
        agregarAuthor() {
            this.mostrarCamposNuevo = !this.mostrarCamposNuevo;
        },
        async insertarAuthor() {
            const data = {
                firstName: this.newNombre,
                lastName: this.newApellido,
            };
            await nuevoAuthor(data);
            this.mostrarCamposNuevo = false;
            this.obtenerAuthorsAll();
        }
    },
    mounted() {
        //this.obtenerAuthorsAll();
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
