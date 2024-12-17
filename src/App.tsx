import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { Contact } from './pages/Contact';
import { Exercices } from './pages/Exercices';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

import { Button } from './components/Button/Button';
import { DarkModeContext } from './context/DarkModeContext';
import { NotFound } from './pages/NotFound';

function App() {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <Header title="My Centralized Workspace" />
      <div className="fixed top-4 right-4 flex gap-2 z-50">
        <Button
          onClick={() => dispatch({ type: 'LIGHT' })}
          className={`p-2.5 rounded-full shadow-lg transition-all duration-300 ${
            darkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400'
              : 'bg-orange-400 hover:bg-orange-500 text-white'
          }`}
          label="🌞"
          variant="primary"
        />
        <Button
          onClick={() => dispatch({ type: 'DARK' })}
          className={`p-2.5 rounded-full shadow-lg transition-all duration-300 ${
            darkMode
              ? 'bg-gray-700 hover:bg-gray-600 text-blue-400'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
          }`}
          label="🌙"
          variant="primary"
        />
      </div>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
