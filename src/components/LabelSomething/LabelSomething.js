export const LabelSomething = ({
  label,
  labelPosition,
  something,
  className,
  ...rest
}) => {
  let positionClasses = '';

  switch (labelPosition) {
    case 'top':
      positionClasses = 'flex self-start items-center flex-col-reverse';
      break;
    case 'bottom':
      positionClasses = 'flex self-start items-center flex-col';
      break;
    case 'left':
      positionClasses = 'flex self-start items-center flex-row-reverse';
      break;
    default:
    case 'right':
      positionClasses = 'flex self-start items-center flex-row';
      break;
  }

  return (
    <div className={[positionClasses, className].join(' ')} {...rest}>
      {something}
      {<span className='inline-block'>{label}</span>}
    </div>
  );
};
