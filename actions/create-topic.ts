"use server";

export async function createTopic() {
  // Revalidate the homepage
  return { topic: "New Topic" };
}
