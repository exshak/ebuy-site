import { Context, getUserId } from '../../utils'

export const post = {
  post(parent, { id }, ctx: Context) {
    return ctx.prisma.post({ id })
  },

  posts(parent, args, ctx: Context) {
    return ctx.prisma.posts({ where: { published: true } })
  },

  async search(parent, args, ctx: Context) {
    // const count = await ctx.prisma
    //   .postsConnection({
    //     where: {
    //       OR: [
    //         { title_contains: args.filter },
    //         { description_contains: args.filter }
    //       ]
    //     }
    //   })
    //   .aggregate()
    //   .count()
    const posts = await ctx.prisma.posts({
      where: {
        OR: [
          { title_contains: args.filter },
          { description_contains: args.filter }
        ],
        published: true
      },
      orderBy: args.orderBy,
      first: args.first,
      skip: args.skip
    })
    return posts
  },

  drafts(parent, args, ctx: Context) {
    const id = getUserId(ctx)

    const where = {
      published: false,
      owner: {
        id
      }
    }

    return ctx.prisma.posts({ where })
  },

  categories(parent, args, ctx: Context) {
    return ctx.prisma.categories()
  }
}
