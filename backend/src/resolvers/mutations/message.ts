import { Context, getUserId } from "../../utils";

export const message = {
  async createMessage(parent, { title, content }, ctx: Context, info) {
    const userId = getUserId(ctx);
    return await ctx.prisma.createMessage({
      title,
      content,
      author: {
        connect: { id: userId }
      }
    });
  },

  async deleteMessage(parent, { id }, ctx: Context, info) {
    const userId = getUserId(ctx);
    const messageExists = await ctx.prisma.$exists.message({
      id,
      author: { id: userId }
    });
    if (!messageExists) {
      throw new Error(`Message not found or you're not the author`);
    }

    return ctx.prisma.deleteMessage({ id });
  }

  // async publish(parent, { id }, ctx: Context, info) {
  //   const userId = getUserId(ctx);
  //   const messageExists = await ctx.prisma.$exists.message({
  //     id,
  //     author: { id: userId }
  //   });
  //   if (!messageExists) {
  //     throw new Error(`Message not found or you're not the author`);
  //   }

  //   return ctx.prisma.updateMessage({
  //     where: { id },
  //     data: { published: true }
  //   });
  // }
};
