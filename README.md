# Desafio clase 44: reformar para usar GraphQL

### Para instalar los paquetes necesarios usar:

``` npm install ```

### Para usar en local ejecutar:

``` npm run dev ``` or ``` npm start ```
### En el .env se debe cambiar el valor de la variable PERSISTENCE por MONGO o FIREBASE y luego arrancar el servidor

### Se puede probar a nivel local ingresando a `localhost:3000/graphql` se desplegará la ventana de Apollo y pulsar el botón `Query your server`

* Para implementar GraphQL en el actual proyecto REST API se utilizó `Apollo`, más específicamente la librería `apollo-server-express`
* Se desplegó la base de datos en la nube (MongoDB Atlas) llamada `ecommerce` realizando un CRUD sobre la coleccón `products`.

## Screenshots

### Crear un producto
<img src="/screenshots/create.jpg" alt="create Product" />

### Obtener un producto
<img src="/screenshots/getProduct.jpg" alt="create Product" />

### Eliminar un producto
<img src="/screenshots/delete.jpg" alt="create Product" />

### Actualizar un producto
<img src="/screenshots/update.jpg" alt="create Product" />

### Listar todos los productos
<img src="/screenshots/getAll.jpg" alt="create Product" />
