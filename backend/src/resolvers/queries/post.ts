import { Context, getUserId } from '../../utils';

export const post = {
  post(parent, { id }, ctx: Context) {
    return ctx.prisma.post({ id });
  },

  posts(parent, args, ctx: Context) {
    return ctx.prisma.posts({ where: { published: true } });
  },

  drafts(parent, args, ctx: Context) {
    const id = getUserId(ctx);

    const where = {
      published: false,
      owner: {
        id
      }
    };

    return ctx.prisma.posts({ where });
  }
};
