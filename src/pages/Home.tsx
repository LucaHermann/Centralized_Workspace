import { useContext } from 'react';
import { Card } from '../components/Card/Card';
import { DarkModeContext, themeColors } from '../context/DarkModeContext';

export const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;

  const features = [
    {
      title: 'Centralized Project Management',
      description:
        'This platform serves as a hub where I can easily manage and track all my tasks, from coding projects to technical test preparations.',
    },
    {
      title: 'Technical Test Preparation',
      description:
        'One of the core purposes of this website is to help me prepare for technical assessments.',
    },
    {
      title: 'Quick Access to Resources',
      description:
        'Having everything in one place means that I can quickly access the tools, notes, and references I need for coding challenges.',
    },
  ];

  const reasons = [
    {
      title: 'Organization and Focus',
      description:
        'By centralizing everything in one place, I can avoid distractions and improve productivity.',
    },
    {
      title: 'Efficiency',
      description:
        'With a well-organized structure, I can optimize my time and tackle tasks more effectively.',
    },
    {
      title: 'Flexibility and Scalability',
      description:
        'As my projects evolve, this website can adapt and scale with my needs.',
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${theme.background} ${theme.text}`}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-30" />
        <div className="relative mx-auto max-w-7xl text-center">
          <h1
            className={`text-5xl md:text-7xl lg:text-9xl mb-8 font-bold text-transparent bg-clip-text animate-text bg-gradient-text bg-300% bg-gradient-to-r ${theme.accent}`}
          >
            Welcome to My Centralized Workspace
          </h1>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card
          title="Purpose of the Website"
          description="This website is designed to centralize all of my ongoing projects, enabling me to streamline my work processes and prepare effectively for upcoming technical tests."
          titleClassName="text-3xl"
        />
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className={`text-3xl font-bold mb-8 text-transparent bg-clip-text animate-text bg-gradient-text bg-300% bg-gradient-to-r ${theme.accent}`}
        >
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              titleClassName="text-xl"
            />
          ))}
        </div>

        {/* Why Section */}
        <div className="space-y-8">
          <h2
            className={`text-3xl font-bold text-transparent bg-clip-text animate-text bg-gradient-text bg-300% bg-gradient-to-r ${theme.accent}`}
          >
            Why This Website?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                title={reason.title}
                description={reason.description}
                titleClassName="text-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
