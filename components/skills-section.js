import { forwardRef } from 'react';
import {
  CodeXml as Html5,
  FileJson,
  Palette,
  PackageSearch,
  AtomIcon,
  GitBranch,
  Brush,
  Aperture,
  BookA,
  ChevronsLeftRightEllipsis,
  Worm,
  Fan,
} from 'lucide-react';
// import { useInView } from '@/hooks/useInView';
import { useInView } from '../hooks/useInView';

const Skills = forwardRef((props, ref) => {
  const [skillsRef, isSkillsInView] = useInView();

  const skills = [
    { icon: Html5, name: 'HTML', color: '#E34F26' },
    { icon: Brush, name: 'CSS/Scss/Sass', color: '#1572B6' },
    { icon: FileJson, name: 'JavaScript/TypeScript', color: '#F7DF1E' },
    { icon: AtomIcon, name: 'React/Next', color: '#61DAFB' },
    { icon: Aperture, name: 'Redux', color: '#9933FF' },
    { icon: Palette, name: 'BootStrap, Tailwind', color: '#38B2AC' },
    { icon: ChevronsLeftRightEllipsis, name: 'Vue', color: '#33FF55' },
    { icon: Fan, name: 'Pina', color: '#F7DF1E' },
    { icon: BookA, name: 'Angular', color: '#FF3366' },
    { icon: Worm, name: 'Python', color: '#21759B' },
    { icon: PackageSearch, name: 'node/npm', color: '#CB3837' },
    { icon: GitBranch, name: 'CI/CD/Git', color: '#F05032' },
  ];

  return (
    <>
      <section className='py-20 relative' ref={ref}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' ref={skillsRef}>
          {/* Section Title */}
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 items-center w-full max-sm:place-items-center'>
            <h2 className='text-5xl font-bold mb-8 bg-gradient-to-r from-[#33CCFF] to-[#FF3366] text-transparent bg-clip-text sm:col-start-1 sm:col-end-3'>
              SKILLS
            </h2>

            <a
              target='_blank'
              href='https://drive.google.com/file/d/1g59H5fVOdHSKVDsHdgYaRa_AxZvkGeTV/view?usp=sharing'
              className='mb-8 sm:col-start-6 sm:col-end-7'
            >
              <button className='relative group'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-[#33CCFF] to-[#FF3366] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200'></div>
                <div className='relative px-7 py-4 bg-[#0B0F19] rounded-lg leading-none'>
                  <span className='bg-gradient-to-r from-[#33CCFF] to-[#FF3366] text-transparent bg-clip-text font-semibold'>
                    DownLoad My Full Resume Here
                  </span>
                </div>
              </button>
            </a>
          </div>
          {/* Description */}
          {/* <p className="text-xl text-center bg-gradient-to-r to-[#9933FF] from-[#FF3366] text-transparent bg-clip-text mb-16 text-opacity-0 hover:text-opacity-100">
            <a target="_blank" href="https://drive.google.com/file/d/1g59H5fVOdHSKVDsHdgYaRa_AxZvkGeTV/view?usp=sharing" className="hover:text-[#33CCFF]">
                DownLoad My Full Resume Here
            </a>
          </p> */}
          {/* className="hover:text-[#33CCFF]" */}
          <p className='text-xl text-center text-gray-300 mb-16'>
            General technologies I use:
          </p>

          {/* Skills Grid */}
          <div className='relative'>
            {/* Gradient Background Effect */}
            <div className='absolute inset-0 bg-gradient-to-r from-[#FF3366]/10 to-[#33CCFF]/10 blur-3xl rounded-full'></div>

            {/* Skills Icons Grid */}
            <div
              className={`relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center animate-stagger ${
                isSkillsInView ? 'in-view' : ''
              }`}
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='group flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-1'
                >
                  <skill.icon
                    className='w-12 h-12 mb-4 transition-colors duration-300'
                    style={{ color: skill.color }}
                  />
                  <span className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300'>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

Skills.displayName = 'Skills';

export default Skills;
