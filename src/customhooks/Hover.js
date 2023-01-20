import { useState } from 'react';

//custom hook
export function useHover() {
  const [hovering, setHover] = useState(false);
  const mouseOver = () => setHover(true);
  const mouseOut = () => setHover(false);

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut,
  };

  return [hovering, attrs];
}
