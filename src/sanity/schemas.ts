// ─── SANITY CMS SCHEMA DEFINITIONS ───
// Install: npm install sanity @sanity/vision
// These schemas define the content models for Sanity Studio

// ─── Post Schema ───
export const post = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } },
    { name: "author", title: "Author", type: "reference", to: [{ type: "author" }] },
    { name: "category", title: "Category", type: "reference", to: [{ type: "category" }] },
    { name: "featuredImage", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "seoTitle", title: "SEO Title", type: "string" },
    { name: "seoDescription", title: "SEO Description", type: "text", rows: 2 },
    { name: "readTime", title: "Read Time", type: "string" },
  ],
};

// ─── Author Schema ───
export const author = {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "bio", title: "Bio", type: "text" },
    { name: "role", title: "Role", type: "string" },
  ],
};

// ─── Category Schema ───
export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "Description", type: "text" },
  ],
};

// ─── Testimonial Schema ───
export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string" },
    { name: "role", title: "Role/Title", type: "string" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "review", title: "Review", type: "text" },
    { name: "rating", title: "Rating (1-5)", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "featured", title: "Featured", type: "boolean" },
  ],
};

// ─── Practice Area Schema ───
export const practiceArea = {
  name: "practiceArea",
  title: "Practice Area",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "icon", title: "Icon Name", type: "string" },
    { name: "description", title: "Short Description", type: "text", rows: 2 },
    { name: "details", title: "Full Details", type: "array", of: [{ type: "block" }] },
    { name: "order", title: "Display Order", type: "number" },
  ],
};

// ─── FAQ Schema ───
export const faq = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    { name: "question", title: "Question", type: "string" },
    { name: "answer", title: "Answer", type: "text" },
    { name: "order", title: "Display Order", type: "number" },
    { name: "category", title: "Category", type: "string" },
  ],
};

// ─── Office Info Schema ───
export const officeInfo = {
  name: "officeInfo",
  title: "Office Information",
  type: "document",
  fields: [
    { name: "name", title: "Office Name", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "hours", title: "Business Hours", type: "text" },
    { name: "mapUrl", title: "Google Maps Embed URL", type: "url" },
    { name: "emergencyPhone", title: "Emergency Phone", type: "string" },
  ],
};

// ─── All Schemas Export ───
export const schemaTypes = [post, author, category, testimonial, practiceArea, faq, officeInfo];

// ─── SAMPLE BLOG TOPICS ───
// 1. Understanding Business Formation: LLC vs Corporation
// 2. A Parent's Guide to Child Custody Proceedings
// 3. 5 Essential Steps to Protect Your Intellectual Property
// 4. Know Your Rights: Employee Protections Under Federal Law
// 5. 2026 Immigration Visa Updates: What You Need to Know
// 6. The Ultimate Real Estate Closing Checklist
// 7. How to Choose the Right Attorney for Your Case
// 8. Understanding Prenuptial Agreements: A Complete Guide
// 9. Navigating Commercial Lease Negotiations
// 10. Criminal Defense 101: Your Rights During an Arrest
// 11. Employment Contracts: What Every Employee Should Know
// 12. Trademark vs Copyright vs Patent: Key Differences
// 13. Divorce and Property Division in New York
// 14. Starting a Business: Legal Checklist for Entrepreneurs
// 15. Understanding Non-Compete Agreements
// 16. Immigration Green Card Process Explained
// 17. What to Do After a Workplace Injury
// 18. Landlord-Tenant Rights in New York
// 19. Estate Planning Essentials: Wills, Trusts, and Power of Attorney
// 20. Understanding Civil Litigation: From Filing to Trial
