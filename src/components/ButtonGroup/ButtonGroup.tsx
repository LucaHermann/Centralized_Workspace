import { Button } from '../Button/Button';

export const ButtonGroup = ({
  buttons,
}: {
  buttons: {
    label: string;
    variant: 'primary' | 'secondary' | 'outline';
    onClick: () => void;
    disabled?: boolean;
  }[];
}) => {
  return (
    <div>
      {buttons.map((button) => (
        <Button
          className="m-1"
          key={button.label}
          label={button.label}
          variant={button.variant}
          onClick={button.onClick}
          disabled={button.disabled}
        />
      ))}
    </div>
  );
};
