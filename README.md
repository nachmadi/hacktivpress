# progressive-tamvan

Aplikasi sederhana CRUD berisi 2 table user dan articles
# Aplikasi Log-in#
Demo aplikasi dengan rest-api

REST-API ini berisi modul yang dapat digunakan untuk berkomunikasi dengan aplikasi dengan mengikuti aturan sebagai berikut:

| Route           | Http          | Description  |
| -------------   |:-------------:| -----:|
|*/users*     | **GET**           | Mendapat seluruh daftar user |
|*/users/:id* | **GET**           | Mendapatkan satu user |
|*/users*     | **POST**          | Create User |
|*/users/:id* | **DELETE**        | Mengapus satu User |
|*/users/:id* | **PUT**           | Update User dengan data baru |

|*/articles*     | **GET**           | Mendapat seluruh daftar article |
|*/articles/:id* | **GET**           | Mendapatkan satu article |
|*/articles*     | **POST**          | Create article |
|*/articles/:id* | **DELETE**        | Mengapus satu article |
|*/articles/:id* | **PUT**           | Update articel dengan data baru |

# perangkat yang digunakan
- npm init
- npm install --save express body-parser morgan dotenv jsonwebtoken
- copy app.js
- create folder routers
- create folder controllers
