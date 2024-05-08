"use server";

export async function createPost() {
  // Revalidate the topic show page
  return { post: "New Post" };
}
