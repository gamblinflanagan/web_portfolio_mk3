import { forwardRef } from 'react';
import { ExternalLink } from 'lucide-react';
// import { useInView } from '@/hooks/useInView';
import { useInView } from '../hooks/useInView';


const Portfolio = forwardRef((props, ref) => {

    const [portfolioRef, isPortfolioInView] = useInView();

    const portfolioItems = [
        {
          title: 'E-Commerce Platform',
          description: 'React, Next.js, Tailwind CSS',
          image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        },
        {
          title: 'Portfolio Website',
          description: 'HTML, SCSS, JavaScript',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        },
        {
          title: 'Social Media Dashboard',
          description: 'React, TypeScript, Material UI',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        },
        {
          title: 'Weather Application',
          description: 'Vue.js, Tailwind CSS, APIs',
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        },
        {
          title: 'Task Management App',
          description: 'React Native, Firebase',
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        },
        {
          title: 'Blog Platform',
          description: 'Next.js, Prisma, PostgreSQL',
          image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop',
          link: '#'
        }
      ];

   

    return (
    <>
      <section className="py-20 relative" ref={portfolioRef}>
        {/* Abstract Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5" ref={ref}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#FF3366_0%,_transparent_50%)] opacity-20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#33CCFF_0%,_transparent_50%)] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Title */}
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-[#FF3366] to-[#33CCFF] text-transparent bg-clip-text">
            PORTFOLIO
          </h2>

          {/* Portfolio Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger ${isPortfolioInView ? 'in-view' : ''}`}>
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  
                  {/* View Project Link */}
                  <a
                    href={item.link}
                    className="absolute bottom-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-[#33CCFF]/20 blur-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>)
    ;
});

export default Portfolio;