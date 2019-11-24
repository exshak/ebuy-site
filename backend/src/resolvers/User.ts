import { Context } from '../utils'

export const Post = {
  owner: ({ id }, args, ctx: Context) => {
    return ctx.prisma.post({ id }).owner()
  },

  subcategory: ({ id }, args, ctx: Context) => {
    return ctx.prisma.post({ id }).subcategory()
  }

  // category: ({ id }, args, ctx: Context) => {
  //   return ctx.prisma
  //     .post({ id })
  //     .subcategory()
  //     .category()
  // }
}

export const User = {
  posts: ({ id }, args, ctx: Context) => {
    return ctx.prisma.user({ id }).posts()
  }
}
