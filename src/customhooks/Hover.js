import React from 'react';

//custom hook
export function useHover() {
  const [hovering, setHover] = React.UseState(false);
  const mouseOver = ()=> setHover(true);
  const mouseOut = ()=> setHover(false);

  const attrs = {
    onMouseOver:mouseOver,
    onMouseOut:mouseOut
  }

  return [hovering, attrs];
}

 