import { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '../components/Button/Button';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Modal } from '../components/Modal/Modal';
import { Timer } from '../components/Timer/Timer';
import { Toast } from '../components/Toast/Toast';
import { DarkModeContext } from '../context/DarkModeContext';

export const Exercices = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const MIN_COUNT = 0;
  const MAX_COUNT = 10;
  const pair = count % 2 === 0;

  useEffect(() => {
    let timeoutId: number;
    if (showToast) {
      timeoutId = setTimeout(() => setShowToast(false), 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [showToast]);

  const increment = useCallback(() => {
    setCount(Math.min(count + 1, MAX_COUNT));
  }, [count]);

  const decrement = useCallback(() => {
    setCount(Math.max(count - 1, MIN_COUNT));
  }, [count]);

  const buttons = [
    {
      label: 'Increment',
      variant: 'primary' as const,
      onClick: increment,
      disabled: count === MAX_COUNT,
    },
    {
      label: 'Decrement',
      variant: 'secondary' as const,
      onClick: decrement,
      disabled: count === MIN_COUNT,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100'
          : 'bg-gradient-to-br from-orange-50 to-white text-gray-900'
      } py-12 px-4`}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Counter Section */}
        <div
          className={`${
            darkMode
              ? 'bg-gray-800/50 hover:bg-gray-700/50'
              : 'bg-white hover:bg-orange-50'
          } rounded-2xl p-8 shadow-lg transition-all duration-300`}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? 'text-cyan-400' : 'text-orange-500'
            } mb-6`}
          >
            Counter Exercise
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span
                className={`text-2xl font-bold ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Count: {count}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  pair
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-purple-500/20 text-purple-400'
                }`}
              >
                {pair ? 'Even' : 'Odd'}
              </span>
            </div>
            <ButtonGroup buttons={buttons} />
            {count === MAX_COUNT && (
              <p className="text-yellow-400 animate-pulse">
                Maximum count reached!
              </p>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div
          className={`${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg`}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? 'text-cyan-400' : 'text-orange-500'
            } mb-6`}
          >
            Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Enter your name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full p-3 rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-cyan-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange-500'
                }`}
              />
              {name.length > 0 && name.length < 3 && (
                <p className="text-red-400 text-sm animate-pulse">
                  Name must be at least 3 characters long
                </p>
              )}
              <input
                type="text"
                placeholder="Enter your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-cyan-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange-500'
                }`}
              />
              {email.length > 0 &&
                !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
                  <p className="text-red-400 text-sm animate-pulse">
                    Please enter a valid email address with @
                  </p>
                )}
              <input
                type="text"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 rounded-lg focus:ring-2 outline-none transition-all duration-300 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-cyan-500'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-orange-500'
                }`}
              />
            </div>
            {name && (
              <Button
                className={`w-full p-3 rounded-lg transition-all duration-300 ${
                  name.length < 3 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : darkMode
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500'
                      : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-500'
                } text-white transform hover:-translate-y-1`}
                type="submit"
                variant="primary"
                disabled={
                  name.length < 3 || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
                }
                label="submit"
              />
            )}
            <p>* required fields</p>
          </form>
        </div>

        {/* Timer Section */}
        <div
          className={`${
            darkMode ? 'bg-gray-800/50' : 'bg-white'
          } rounded-2xl p-8 shadow-lg`}
        >
          <h2
            className={`text-3xl font-bold ${
              darkMode ? 'text-cyan-400' : 'text-orange-500'
            } mb-6`}
          >
            Timer
          </h2>
          <Timer />
        </div>
      </div>

      {/* Modal and Toast */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          name={name}
          email={email}
          message={message}
          setIsModalOpen={setIsModalOpen}
          setShowToast={setShowToast}
        />
      )}
      {showToast && (
        <Toast message="This toast will disappear after 3 seconds" />
      )}
    </div>
  );
};
