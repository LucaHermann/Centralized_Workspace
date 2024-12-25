import { useThemeStyles } from '../../hooks/useThemeStyles';

export const ImageCard = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  const { theme, getGradientText, getCardStyles } = useThemeStyles();

  return (
    <div
      className={`
      w-full max-w-sm aspect-[3/4]
      ${getCardStyles()}
      rounded-xl overflow-hidden
    `}
    >
      <div className="relative h-[70%] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500
            hover:scale-105"
        />
        <div
          className={`
          absolute inset-0
          bg-gradient-to-t
          ${theme.BACKGROUND_GRADIENT} to-transparent/0
        `}
        />
      </div>

      <div className="p-4 h-[30%] flex items-center justify-center">
        <h3 className={`text-xl line-clamp-2 ${getGradientText(true)}`}>
          {title}
        </h3>
      </div>
    </div>
  );
};
