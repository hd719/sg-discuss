import type { Post } from "@prisma/client";
import { prisma } from "@/db";
import { select } from "@nextui-org/react";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};

export function fetchPostByTopicSlug(slug: string): Promise<PostWithData[]> {
  // Find a post by a given slug, and include the topic, user, and comment count
  const posts = prisma.post.findMany({
    where: { topic: { slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });

  return posts;
}
