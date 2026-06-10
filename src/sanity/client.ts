import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// ─── Query Helpers ───

export async function getPosts() {
  return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title, slug, excerpt, "category": category->title, publishedAt, readTime,
    "image": featuredImage.asset->url, "author": author->{name, "image": image.asset->url}
  }`);
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0] {
    title, slug, excerpt, body, publishedAt, readTime, seoTitle, seoDescription, tags,
    "category": category->title, "image": featuredImage.asset->url,
    "author": author->{name, bio, role, "image": image.asset->url}
  }`, { slug });
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(_createdAt desc) {
    name, role, review, rating, "photo": photo.asset->url
  }`);
}

export async function getFAQs() {
  return sanityClient.fetch(`*[_type == "faq"] | order(order asc) {
    question, answer, category
  }`);
}
