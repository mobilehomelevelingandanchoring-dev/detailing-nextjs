"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Ceramic Coating: What You Need to Know",
    excerpt: "Everything you need to know about ceramic coating for your vehicle, including benefits, application process, and maintenance tips.",
    date: "2024-01-15",
    readTime: "8 min read",
    author: "SRV Detailing Team",
    category: "Ceramic Coating",
    slug: "ceramic-coating-guide"
  },
  {
    id: 2,
    title: "Paint Correction vs. Car Wax: Understanding the Difference",
    excerpt: "Learn why paint correction is essential for removing swirl marks and scratches, while wax provides temporary protection.",
    date: "2024-01-10",
    readTime: "6 min read",
    author: "SRV Detailing Team",
    category: "Paint Correction",
    slug: "paint-correction-vs-wax"
  },
  {
    id: 3,
    title: "Mobile Valeting vs. Traditional Car Wash: Which is Better?",
    excerpt: "Discover the advantages of professional mobile valeting over conventional car wash services for your Manchester vehicle.",
    date: "2024-01-05",
    readTime: "5 min read",
    author: "SRV Detailing Team",
    category: "Mobile Valeting",
    slug: "mobile-valeting-benefits"
  },
  {
    id: 4,
    title: "How Often Should You Detail Your Car? A Complete Guide",
    excerpt: "Professional advice on detailing frequency based on your vehicle type, usage, and Manchester weather conditions.",
    date: "2023-12-28",
    readTime: "7 min read",
    author: "SRV Detailing Team",
    category: "Maintenance",
    slug: "how-often-detail-car"
  },
  {
    id: 5,
    title: "Winter Car Care: Protecting Your Vehicle in Manchester Weather",
    excerpt: "Essential winter car care tips to protect your vehicle from salt, moisture, and temperature fluctuations in Greater Manchester.",
    date: "2023-12-20",
    readTime: "6 min read",
    author: "SRV Detailing Team",
    category: "Seasonal Care",
    slug: "winter-car-care"
  },
  {
    id: 6,
    title: "Interior Detailing: The Often Overlooked Aspect of Car Care",
    excerpt: "Why interior detailing is just as important as exterior care, and how professional cleaning can transform your driving experience.",
    date: "2023-12-15",
    readTime: "5 min read",
    author: "SRV Detailing Team",
    category: "Interior Care",
    slug: "interior-detailing-importance"
  }
];

// Blog Post Card Component
const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300"
  >
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
          {post.category}
        </span>
      </div>
      
      <h2 className="text-2xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
        {post.title}
      </h2>
      
      <p className="text-muted-foreground mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-GB', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
      
      <span className="inline-flex items-center gap-2 text-primary font-medium">
        Coming Soon
      </span>
    </div>
  </motion.article>
);

// Hero Section
const HeroSection = () => (
  <div className="relative pt-32 pb-20 bg-gradient-to-br from-primary/10 to-background">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Expert Car Detailing <span className="text-primary">Insights</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Professional tips, industry knowledge, and practical advice for Manchester and Stockport vehicle owners 
          who want to keep their cars looking showroom-perfect.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            Ceramic Coating
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            Paint Correction
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            Mobile Valeting
          </span>
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
            Car Care Tips
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { name: "Ceramic Coating", count: 12 },
    { name: "Paint Correction", count: 8 },
    { name: "Mobile Valeting", count: 15 },
    { name: "Maintenance", count: 10 },
    { name: "Interior Care", count: 7 },
    { name: "Seasonal Care", count: 5 }
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Browse by <span className="text-primary">Category</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-background rounded-lg hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} articles</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Blog Page Component
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CategoriesSection />
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post, index) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="text-center">
                <button className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}