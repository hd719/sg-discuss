"use server";

export async function createComment() {
  // Revalidate the post show page
  return { comment: "New Comment" };
}
