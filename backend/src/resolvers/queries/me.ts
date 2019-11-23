import { Context, getUserId } from '../../utils'

export const me = {
  me(parent, args, ctx: Context) {
    const id = getUserId(ctx)
    return ctx.prisma.user({ id })
  }
}
