"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Legal Insights"
          title="From Our Blog"
          description="Stay informed with the latest legal news, guides, and insights from our attorneys."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, i) => (
            <FadeUp key={post.slug} delay={i * 0.1}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={240}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-navy/90 text-white text-xs font-medium rounded-full">{post.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                    <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 text-sm">
            View All Articles
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
