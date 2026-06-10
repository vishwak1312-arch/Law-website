import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/Motion";
import { blogPosts, siteConfig } from "@/lib/data";
import { Clock, ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full mb-4">{post.category}</span>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/50 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{siteConfig.attorney}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeUp>
            <Image src={post.image} alt={post.title} width={900} height={450} className="w-full rounded-2xl shadow-xl mb-10 object-cover" />
            <article className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed">{post.excerpt}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <h2>Key Considerations</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul>
                <li>Understanding your legal rights and obligations</li>
                <li>Navigating complex regulatory requirements</li>
                <li>Developing a strategic approach to your case</li>
                <li>Protecting your interests at every stage</li>
              </ul>
              <h2>How We Can Help</h2>
              <p>At {siteConfig.name}, our experienced attorneys can guide you through every step of the process. Contact us today for a confidential consultation to discuss your specific situation.</p>
            </article>
          </FadeUp>

          {/* Author */}
          <FadeUp className="mt-12 p-6 bg-light rounded-xl flex items-start gap-4">
            <Image src="/attorney-portrait.png" alt={siteConfig.attorney} width={64} height={64} className="w-16 h-16 rounded-full object-cover border-2 border-gold/20" />
            <div>
              <p className="font-heading font-semibold text-navy">{siteConfig.attorney}</p>
              <p className="text-xs text-gold mb-2">Founder & Managing Partner</p>
              <p className="text-sm text-gray-500">Experienced attorney with 10+ years of practice. Harvard Law School graduate committed to providing strategic legal solutions.</p>
            </div>
          </FadeUp>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-heading text-2xl font-bold text-navy mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group">
                    <Image src={r.image} alt={r.title} width={300} height={180} className="w-full h-36 object-cover rounded-lg mb-3 group-hover:scale-[1.02] transition-transform" />
                    <p className="text-xs text-gold mb-1">{r.category}</p>
                    <h4 className="font-heading text-sm font-semibold text-navy group-hover:text-gold transition-colors line-clamp-2">{r.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
