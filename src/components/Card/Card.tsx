import { useThemeStyles } from '../../hooks/useThemeStyles';

export const Card = ({
  title,
  titleClassName,
  description,
  hrefLink,
  hrefText,
}: {
  title: string;
  titleClassName?: string;
  description: string;
  hrefLink?: string;
  hrefText?: string;
}) => {
  const { theme, getGradientText, getCardStyles } = useThemeStyles();

  return (
    <div
      className={`${getCardStyles()} rounded-xl p-6 transform hover:-translate-y-2`}
    >
      <div className="space-y-4">
        <h3 className={`${getGradientText(true)} ${titleClassName}`}>
          {title}
        </h3>
        <p className={theme.TEXT}>{description}</p>
        {hrefLink && (
          <a
            href={hrefLink}
            className={`inline-flex items-center ${theme.HOVER} transition-colors duration-300`}
          >
            <span>{hrefText}</span>
            <svg
              className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
