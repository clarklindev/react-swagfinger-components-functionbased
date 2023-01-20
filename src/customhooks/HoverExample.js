import { useHover } from './Hover';

export const HoverExample = () => {
  const [hovering, attrs] = useHover();

  return (
    <div style={{ position: 'relative' }}>
      <button {...attrs}>useHover() - see HoverExample</button>
      {hovering && (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>hello</div>
      )}
    </div>
  );
};
