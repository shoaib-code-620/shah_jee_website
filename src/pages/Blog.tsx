import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const POSTS = [
  {
    id: 'p1',
    title: 'Best Malai Boti in Karachi — What Makes Ours Different',
    excerpt: 'Discover the secret behind our creamy, melt-in-your-mouth Malai Boti that has Karachi talking.',
    date: 'March 25, 2026',
    author: 'Shah Jee',
    category: 'Food Stories'
  },
  {
    id: 'p2',
    title: 'How to Order Food in Karachi Without Paying App Commission',
    excerpt: 'Save money and get fresher food by ordering directly. We explain why the middleman isn\'t always better.',
    date: 'March 20, 2026',
    author: 'Admin',
    category: 'Tips'
  },
  {
    id: 'p3',
    title: 'What is Talbina? The Sunnah Superfood on Our Menu',
    excerpt: 'Learn about the health benefits of this traditional barley-based dish and why we added it to our menu.',
    date: 'March 15, 2026',
    author: 'Shah Jee',
    category: 'Healthy Food'
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-paper py-20">
      <Helmet>
        <title>Food Stories & Blog | Shah Jee Restaurant Karachi</title>
        <meta name="description" content="Read about Karachi's food culture, our secret recipes, and tips for the best dining experience at Shah Jee Restaurant." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold uppercase tracking-widest text-xs mb-4 block">
              Shah Jee Food Stories
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-6">
              Our Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insights into Karachi's food culture, our secret recipes, and tips for the best dining experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group hover:shadow-2xl transition-all duration-300 flex flex-col h-full bg-white"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={`https://picsum.photos/seed/${post.id}/800/450`}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase z-10 shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-10 flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-black text-primary mb-6 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
              </div>

              <div className="p-10 pt-0 mt-auto border-t border-gray-50">
                <Link
                  to={`/blog/${post.id}`}
                  className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:text-accent transition-colors group/link"
                >
                  Read Full Story
                  <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
