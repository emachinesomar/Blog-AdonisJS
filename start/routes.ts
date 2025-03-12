/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Router from '@adonisjs/core/services/router'
//import Router from '@adonisjs/core/build/services/router'
//import Route from '@ioc:Adonis/Core/Route'
//import { Router } from '@adonisjs/core/build/standalone'
//import { Route } from '@adonisjs/core/build/modules/http/main'



Router.on('/').render('pages/home')
Router.on('/p').render('pages/homea')
 
//import Route from '@ioc:Adonis/Core/Route';


// Rutas Públicas
//Route.get('/', 'PostController.index').as('home')
// Route.get('/posts/:id', 'PostController.show').as('posts.show')
// Route.get('/categories/:id', 'CategoryController.show').as('categories.show')

// // Rutas de Autenticación
// Route.get('/register', 'AuthController.register').as('register').middleware('guest')
// Route.post('/register', 'AuthController.store').as('register.store').middleware('guest')
// Route.get('/login', 'AuthController.login').as('login').middleware('guest')
// Route.post('/login', 'AuthController.attempt').as('login.attempt').middleware('guest')
// Route.post('/logout', 'AuthController.logout').as('logout').middleware('auth')

// // Rutas Protegidas (Panel de Administración)
// Route.group(() => {
//   // Posts
//   Route.get('/admin/posts', 'PostController.adminIndex').as('admin.posts.index')
//   Route.get('/admin/posts/create', 'PostController.create').as('admin.posts.create')
//   Route.post('/admin/posts', 'PostController.store').as('admin.posts.store')
//   Route.get('/admin/posts/:id/edit', 'PostController.edit').as('admin.posts.edit')
//   Route.put('/admin/posts/:id', 'PostController.update').as('admin.posts.update')
//   Route.delete('/admin/posts/:id', 'PostController.destroy').as('admin.posts.destroy')

//   // Categorías
//   Route.get('/admin/categories', 'CategoryController.index').as('admin.categories.index')
//   Route.get('/admin/categories/create', 'CategoryController.create').as('admin.categories.create')
//   Route.post('/admin/categories', 'CategoryController.store').as('admin.categories.store')
//   Route.get('/admin/categories/:id/edit', 'CategoryController.edit').as('admin.categories.edit')
//   Route.put('/admin/categories/:id', 'CategoryController.update').as('admin.categories.update')
//   Route.delete('/admin/categories/:id', 'CategoryController.destroy').as('admin.categories.destroy')

//   // Comentarios
//   Route.get('/admin/comments', 'CommentController.index').as('admin.comments.index')
//   Route.delete('/admin/comments/:id', 'CommentController.destroy').as('admin.comments.destroy')

//   // usuarios
//   Route.get('/admin/users', 'UserController.index').as('admin.users.index')
//   Route.get('/admin/users/:id/edit', 'UserController.edit').as('admin.users.edit')
//   Route.put('/admin/users/:id', 'UserController.update').as('admin.users.update')
//   Route.delete('/admin/users/:id', 'UserController.destroy').as('admin.users.destroy')

// }).middleware(['auth', 'role:admin,editor']) // Protege con autenticación y roles

// //Rutas de comentarios publicos
// Route.post('/posts/:id/comments', 'CommentController.store').as('comments.store').middleware('auth')