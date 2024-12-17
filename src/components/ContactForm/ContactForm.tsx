import { useForm, ValidationError } from '@formspree/react';
import { useContext } from 'react';

import { DarkModeContext, themeColors } from '../../context/DarkModeContext';
import { Toast } from '../Toast/Toast';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mkgnaapw');

  const { darkMode } = useContext(DarkModeContext);
  const theme = darkMode ? themeColors.dark : themeColors.light;
  if (state.succeeded) {
    return <Toast message="Your message has been delivered" />;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2
          className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme.accent} mb-6`}
        >
          Get in Touch
        </h2>

        <div className="space-y-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-${theme.accent} focus:border-transparent outline-none transition-all duration-300`}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-${theme.accent} focus:border-transparent outline-none transition-all duration-300`}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className={`w-full p-3 bg-gradient-to-r ${theme.accent} hover:bg-gradient-to-r ${theme.accent} rounded-lg transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none`}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};
