import { useState } from 'react';

export const useToggle = (state = false) => {
  const [toggled, setToggled] = useState(state);

  const toggle = () => setToggled((prevState) => !prevState);

  return [toggled, toggle] as const;
};
