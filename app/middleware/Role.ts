import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Role {
  public async handle ({ auth, response }: HttpContextContract, next: () => Promise<void>, allowedRoles: string[]) {
    if (!auth.user || !allowedRoles.includes(auth.user.role)) {
      return response.unauthorized('Unauthorized')
    }
    await next()
  }
}