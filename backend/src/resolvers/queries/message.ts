import { Context, getUserId } from "../../utils";

export const message = {
  message(parent, { id }, ctx: Context) {
    return ctx.prisma.message({ id });
  },

  messages(parent, args, ctx: Context) {
    const id = getUserId(ctx);

    const where = {
      author: {
        id
      }
    };

    return ctx.prisma.messages({ where });
  }

  // drafts(parent, args, ctx: Context) {
  //   const id = getUserId(ctx);

  //   const where = {
  //     published: false,
  //     author: {
  //       id
  //     }
  //   };

  //   return ctx.prisma.messages({ where });
  // }
};
