// import type { HttpContext } from '@adonisjs/core/http'

//export default class PostsController {
//}
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import Category from 'App/Models/Category'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class PostController {
  // ... (Implementa los métodos index, show, create, store, edit, update, destroy)
  public async adminIndex({ view }: HttpContextContract){
    const posts = await Post.all();
    return view.render('admin/posts/index', {posts})
  }

  public async index({ view }: HttpContextContract) {
    const posts = await Post.all();
    return view.render('posts/index', {posts})
  }
}