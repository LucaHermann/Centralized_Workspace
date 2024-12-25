import { useForm, ValidationError } from '@formspree/react';
import { useThemeStyles } from '../../hooks/useThemeStyles';
import { Toast } from '../Toast/Toast';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm('mkgnaapw');
  const { theme, getGradientText } = useThemeStyles();

  if (state.succeeded) {
    return <Toast message="Your message has been delivered" />;
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className={`text-2xl font-bold ${getGradientText(true)} mb-6`}>
          Get in Touch
        </h2>

        <div className="space-y-4">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className={`w-full p-3 rounded-lg ${theme.INPUT} transition-all duration-300`}
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
            className={`w-full p-3 rounded-lg ${theme.INPUT} transition-all duration-300`}
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
            className={`w-full p-3 bg-gradient-to-r ${theme.GRADIENT} 
              rounded-lg transition-all duration-300 transform 
              hover:-translate-y-1 text-white
              disabled:opacity-50 disabled:cursor-not-allowed 
              disabled:hover:transform-none`}
          >
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};
