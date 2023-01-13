export const WithLabel = ({
  label,
  labelPosition,
  component,
  className,
  ...rest
}) => {
  let positionClasses = '';

  switch (labelPosition) {
    case 'top':
      positionClasses = 'flex flex-col-reverse grow space-between';
      break;
    case 'bottom':
      positionClasses = 'flex flex-col grow space-between';
      break;
    case 'left':
      positionClasses = 'flex flex-row-reverse grow space-between';
      break;
    default:
    case 'right':
      positionClasses = 'flex flex-row grow space-between';
      break;
  }

  return (
    <div className={[positionClasses, className].join(' ')} {...rest}>
      {component}
      {label}
    </div>
  );
};
