import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      duration: 'Jan 2022 - Present',
      description: 'Lead the development of responsive web applications using React.js and Next.js. Implemented state management with Redux and optimized performance. Collaborated with UI/UX designers to create intuitive user interfaces.',
      achievements: [
        'Reduced page load time by 40% through code optimization and lazy loading',
        'Implemented CI/CD pipeline that reduced deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Solutions Ltd.',
      duration: 'Mar 2020 - Dec 2021',
      description: 'Developed and maintained multiple client websites using React.js, JavaScript, and CSS frameworks. Worked in an agile environment with daily stand-ups and sprint planning.',
      achievements: [
        'Built 15+ responsive websites for various clients across different industries',
        'Integrated third-party APIs and payment gateways',
        'Implemented automated testing that increased code coverage by 35%'
      ]
    },
    {
      id: 3,
      role: 'Web Developer Intern',
      company: 'StartUp Hub',
      duration: 'Jun 2019 - Feb 2020',
      description: 'Assisted in the development of web applications using HTML, CSS, and JavaScript. Collaborated with senior developers to implement new features and fix bugs.',
      achievements: [
        'Developed a responsive landing page that increased conversion rates by 25%',
        'Created reusable UI components that improved development efficiency',
        'Participated in code reviews and implemented feedback'
      ]
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Work <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative overflow-hidden">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full"></div>

          {/* Experience Items */}
          <div className="relative z-10 px-4 md:px-0">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} isLast={index === experiences.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`mb-12 ${isLast ? 'mb-0' : ''}`}>
      <div className="flex items-center justify-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center z-10 shadow-lg"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-full overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className={`bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg ${isEven ? 'md:text-right md:col-start-1' : 'md:col-start-2'} w-full`}
        >
          <div className="mb-1 text-indigo-600 dark:text-indigo-400 font-medium font-inter">{experience.duration}</div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 font-poppins">{experience.role}</h3>
          <div className="text-slate-600 dark:text-slate-300 font-medium mb-4 font-inter">{experience.company}</div>
          <p className="text-slate-600 dark:text-slate-300 mb-4 font-inter">{experience.description}</p>
          
          <div className="mt-4">
            <h4 className="text-md font-semibold text-slate-800 dark:text-white mb-2 font-poppins">Key Achievements:</h4>
            <ul className={`space-y-2 ${isEven ? 'md:list-inside' : ''}`}>
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-slate-600 dark:text-slate-300 font-inter flex items-start text-sm md:text-base">
                  <span className="inline-block w-4 h-4 md:w-5 md:h-5 mr-2 text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="break-words">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;