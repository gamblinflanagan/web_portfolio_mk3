import { forwardRef, Suspense } from 'react';
import { ExternalLink } from 'lucide-react';
// import { useInView } from '@/hooks/useInView';
import { useInView } from '../hooks/useInView';


const Portfolio = forwardRef((props, ref) => {

    const [portfolioRef, isPortfolioInView] = useInView();

    const portfolioItems = [
        {
            link: "https://skylinemanorholdings.com/#/",
            title: "Skyline Manor Holdings",
            video: "https://drive.google.com/file/d/1ZsSLsyjD9N70E3snihBeiMmxS76qkdA9/preview",
            image: "",
            description: "I was the sol developer for an airbnb business tasked with creating their company website"
        },
        {
            link: 'https://github.com/gamblinflanagan/Alarm-Clock',
            title: 'Alarm Clock',
            video: 'https://drive.google.com/file/d/1tG5X7ZEjV32QcS-5zpbjmydlMfrDcDV0/preview',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
            description: 'At a time set by the user a random classical song will play and the voice will tell the user the exact date, time, and weather specific to the set location. The greeting ie: (Good morning sir, I hope you slept well sir) is completley customizeable for the user.',
        },
        {
            link: "https://nj-homeless-donation-website.web.app",
            title: "NJ Homeless Donation site",
            video: "https://drive.google.com/file/d/1N2QM1RhYVii9auXoulnrPKG_svBGnlgC/preview",
            image: "",
            description: "Donation site that I created for Livingston Philanthropies inc",
        },
        {
            link: "https://cs490-project2m2-jcf29.herokuapp.com",
            title: "Chit Chat Messaging",
            video: "https://drive.google.com/file/d/1LbD14jp2Or7p_URdKP6nRI4QgLe9YTp0/preview",
            image: "",
            description: "Flask/React Web chat app I designed and built my senior year of college",
        },
        {
            link: "https://github.com/gamblinflanagan/angular-react-app",
            title: "Angular React App template",
            video: "https://drive.google.com/file/d/1wOKY-LRrWboREnhY6RBZPKxNz42KfFvi/preview",
            image: "",
            description: "I created a template to build Angular webapps with React running inside for added performance but with all features of a js framework",
        },
        // {
        //     link: "https://github.com/gamblinflanagan/2x2_RubixCube",
        //     title: "Rubix Cube",
        //     video: "https://drive.google.com/file/d/1VlDmPaFXVzdEKNx23ZKgSzB0ndVBpAZr/preview",
        //     image: "",
        //     description: "A C app of the classic 2x2 rubix cube",
        // },
        {
            link: "https://github.com/gamblinflanagan/RPSLS",
            title: "Rock Paper Scissors Lizard Spock",
            video: "https://drive.google.com/file/d/1PPAwV57THDUHep6Xyt5uYksN6tyfKoZN/preview",
            image: "",
            description: "Python app of the classic big bang theory game rock paper scissors lizard spock",
        },
        // {
        //     link: "https://github.com/gamblinflanagan/roulette",
        //     title: "Roulette",
        //     video: "https://drive.google.com/file/d/1ZRguw79R0KfyLptxZ5Bh28zRWjns9CXu/preview",
        //     image: "",
        //     description: "Java app of classic casino game roulette",
        // },
        {
            link: "https://github.com/gamblinflanagan/RPA_tic_tac_toe",
            title: "RPA TIC TAC TOE",
            video: "https://drive.google.com/file/d/1wOKY-LRrWboREnhY6RBZPKxNz42KfFvi/preview",
            image: "",
            description: "The RPA bot will open the tic tac toe website and play the AI usng the minimax algorithm to decide its move Works on all Windows platforms with Workfusion installed.",
        },
        // {
        //     link: "https://github.com/gamblinflanagan/Dice",
        //     title: "Dice",
        //     video: "https://drive.google.com/file/d/1CERSgkH7lbxKG7_kC4paKWyCpSVNNjb_/preview",
        //     image: "",
        //     description: "IOS app that rolls two 6 sided dice",
        // },
        // {
        //     link: "https://github.com/gamblinflanagan/Magic-8-Ball",
        //     title: "Magic 8 Ball",
        //     video: "https://drive.google.com/file/d/1IO73CvwRjJYf9km5O-8TR44AmXqzDVuo/preview",
        //     image: "",
        //     description: "Swift IOS app of magic 8 ball toy, it knows the answer to any yes or no question",
        // },
        {
            link: "https://github.com/gamblinflanagan/binary-dec-hex",
            title: "Binary, Decimal, Hexidecimal Converter",
            video: "https://drive.google.com/file/d/1QsG1XsFcA70X8YQpsQSt4fZc3OdgCi7R/preview",
            image: "",
            description: "Python app that takes a number of the decimal, hexadecimal, or binary systems and coverts it to the other 2 systems",
        },
        {
            link: "https://cs490-project1-jcf29.herokuapp.com",
            title: "Recipe Website",
            video: "https://drive.google.com/file/d/1j4YFFWthdL6OW1NkNBvBPFSeFp79hYId/preview",
            image: "",
            description: "Flask app that displays random recipe from API and displays tweets about it",
        },
        // {
        //     link: "https://github.com/gamblinflanagan/pigdice",
        //     title: "Pig Dice Game",
        //     video: "https://drive.google.com/file/d/1s_DwXOuI_wq0PI_Tu8kWrlWToNoaatRN/preview",
        //     image: "",
        //     description: "Python app of classic Pig Dice game",
        // },
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-sm:place-items-center'>
            <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-[#FF3366] to-[#33CCFF] text-transparent bg-clip-text">
                PORTFOLIO
            </h2>
          </div>

          {/* Portfolio Grid */}
          <div className='h-[48rem] overflow-y-scroll '>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger ${isPortfolioInView ? 'in-view' : ''}`}>
                {portfolioItems.map((item, index) => (
                <div
                    key={index}
                    className="group relative bg-white/5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                        <Suspense fallback={item.image}>
                            <iframe
                                src={item.video}
                                alt={item.image}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            ></iframe>
                        </Suspense>
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent opacity-60"></div> */}
                    </div>

                    {/* Project Info */}
                    <div className="p-6 pb-16">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>

                    {/* Glow Effect */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-[#33CCFF]/20 blur-xl"></div> */}
                    <div className="absolute inset-x-0 bottom-6 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-x-0 bottom-6 h-48 bg-gradient-to-r from-[#FF3366]/20 to-[#33CCFF]/20 blur-xl"></div>
                    </div>
                    {/* View Project Link */}
                    <a
                        target='_blank'
                        href={item.link}
                        className="absolute bottom-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                        >
                        <ExternalLink className="w-8 h-8" />
                    </a>
                </div>
                ))}
            </div>
            </div>
        </div>
      </section>
    </>)
    ;
});

Portfolio.displayName = 'Portfolio';

export default Portfolio;