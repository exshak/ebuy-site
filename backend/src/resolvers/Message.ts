import { Context } from '../utils'

export const Message = {
  user: ({ id }, args, ctx: Context) => {
    return ctx.prisma.message({ id }).user()
  }
}
