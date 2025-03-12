import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    if (!auth.isAuthenticated) {
      return response.redirect().toRoute('login')
    }
    await next()
  }
}