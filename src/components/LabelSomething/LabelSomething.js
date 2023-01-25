import styled from 'styled-components';

const Label = styled.label``;
const Div = styled.div``;

export const LabelSomething = ({
  label,
  labelPosition = 'right',
  something,
  align = 'center',
  className = '',
  gap = '',
  labelClickable = false,
  ...rest
}) => {
  let containerClasses = 'flex self-start';

  let positionClasses = '';
  switch (labelPosition) {
    case 'top':
      positionClasses = 'flex flex-col-reverse';
      break;
    case 'bottom':
      positionClasses = 'flex flex-col';
      break;
    case 'left':
      positionClasses = 'flex flex-row-reverse';
      break;
    default:
    case 'right':
      positionClasses = 'flex flex-row';
      break;
  }

  let alignClasses = '';
  switch (align) {
    default:
    case 'center':
      alignClasses = 'items-center';
      break;
    case 'top':
    case 'start':
      alignClasses = 'items-start';
      break;
    case 'end':
    case 'bottom':
      alignClasses = 'items-end';
  }

  let gapClasses = '';
  switch (labelPosition) {
    case 'left':
    case 'right':
      gapClasses = `gap-${gap}`;
      break;
    case 'top':
    case 'bottom':
      gapClasses = `gap-${gap}`;
      break;
    default:
      break;
  }

  const Element =
    labelClickable === true || labelClickable === 'true' ? Label : Div;

  return (
    <Element
      className={[
        containerClasses,
        positionClasses,
        alignClasses,
        className,
        gapClasses,
      ].join(' ')}
      {...rest}
    >
      {something}
      {label}
    </Element>
  );
};
