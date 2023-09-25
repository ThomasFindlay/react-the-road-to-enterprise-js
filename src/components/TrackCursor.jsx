import { useMousePosition } from '@/hooks/useMousePosition';

const TrackCursor = (props) => {
  const position = useMousePosition();

  return (
    <div>
      Last tracked position - x: {position.x}, y: {position.y}
    </div>
  );
};

export default TrackCursor;
