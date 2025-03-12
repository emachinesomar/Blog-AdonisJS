// import type { HttpContext } from '@adonisjs/core/http'

//export default class AuthController {
// }
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async register ({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store ({ request, response, auth }: HttpContextContract) {
    const userSchema = schema.create({
      username: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'username' })]),
      email: schema.string({ trim: true }, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      password: schema.string({}, [rules.confirmed()]),
      role: schema.enum(['user', 'editor', 'admin'] as const)
    })

    const payload = await request.validate({ schema: userSchema })

    const user = await User.create(payload)

    await auth.login(user)

    return response.redirect().toRoute('home')
  }

  public async login ({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async attempt ({ request, response, auth, session }: HttpContextContract) {
    const { email, password } = request.all()

    try {
      await auth.attempt(email, password)
      return response.redirect().toRoute('home')
    } catch {
      session.flash('errors.login', 'Invalid credentials')
      return response.redirect().back()
    }
  }

  public async logout ({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toRoute('home')
  }
}