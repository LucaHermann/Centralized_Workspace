import { useContext } from 'react';
import { Card } from '../components/Card/Card';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { DarkModeContext } from '../context/DarkModeContext';

export const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  const cardsData = [
    {
      title: 'Linkedin',
      description:
        'Check out my professional profile on LinkedIn, where I share my experiences, skills, and network with industry professionals. Connect with me to explore collaboration opportunities and discuss tech trends.',
      hrefLink: 'https://www.linkedin.com/in/lucahermann/',
      hrefText: 'Go to Linkedin',
    },
    {
      title: 'Github',
      description:
        "Visit my GitHub profile to explore the open-source projects I've contributed to, along with my personal projects. It's a great way to see the code I've written and the technologies I enjoy working with.",
      hrefLink: 'https://github.com/LucaHermann',
      hrefText: 'Go to Github',
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100'
          : 'bg-gradient-to-br from-orange-50 to-white text-gray-900'
      } py-12 px-4`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div
          className={`${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg`}
        >
          <h1
            className={`text-4xl font-bold ${
              darkMode ? 'text-cyan-400' : 'text-orange-500'
            } mb-6`}
          >
            About me
          </h1>
          <h3
            className={`text-2xl ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            } mb-4`}
          >
            Hi, I'm Luca Hermann!
          </h3>
          <div className="space-y-4">
            <p
              className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I'm a passionate developer with expertise in front-end
              technologies, including{' '}
              <strong
                className={darkMode ? 'text-cyan-400' : 'text-orange-500'}
              >
                TypeScript
              </strong>
              ,{' '}
              <strong
                className={darkMode ? 'text-cyan-400' : 'text-orange-500'}
              >
                React
              </strong>
              , and{' '}
              <strong
                className={darkMode ? 'text-cyan-400' : 'text-orange-500'}
              >
                Tailwind CSS
              </strong>
              .
            </p>
            <p
              className={`text-lg ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              When I'm not coding, you'll find me exploring new ideas for
              startups or fishing for carnivorous species in scenic locations.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>

        <div
          className={`${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg`}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
