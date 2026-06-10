import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = { title: "Blog", description: "Legal insights, guides, and updates from the attorneys at Mitchell & Associates." };

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Legal Insights</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Blog</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Stay informed with the latest legal news, guides, and expert analysis.</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <FadeUp className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-navy text-white' : 'bg-light text-gray-600 hover:bg-navy/5'}`}>
                {cat}
              </button>
            ))}
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image src={post.image} alt={post.title} width={400} height={240} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-navy/90 text-white text-xs font-medium rounded-full">{post.category}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <h2 className="font-heading text-lg font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">{post.title}</h2>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                      <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3.5 h-3.5" /></span>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
