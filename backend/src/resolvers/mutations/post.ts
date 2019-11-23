import { Context, getUserId } from '../../utils'

export const post = {
  async createPost(parent, args, ctx: Context, info) {
    const userId = getUserId(ctx)
    const subcategoryId = args.subcategoryId
    delete args.subcategoryId
    return await ctx.prisma.createPost({
      owner: {
        connect: { id: userId }
      },
      subcategory: {
        connect: { id: subcategoryId }
      },
      ...args
    })
  },

  async updatePost(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx)
    const postExists = await ctx.prisma.$exists.post({
      id,
      owner: { id: userId }
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the owner`)
    }

    return ctx.prisma.updatePost({
      where: { id },
      data: { published: true }
    })
  },

  async deletePost(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx)
    const postExists = await ctx.prisma.$exists.post({
      id,
      owner: { id: userId }
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the owner`)
    }

    return ctx.prisma.deletePost({ id })
  }
}
