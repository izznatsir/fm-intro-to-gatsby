import React, { useState } from 'react';

let Wave = ({ className }) => {
  let [waves, setWaves] = useState(0);
  let label = `👋 ${waves} ${waves <= 1 ? 'wave' : 'waves'}`;

  return (
    <button
      className={`pt-2 pb-3 px-4 rounded-md bg-orange-300 hover:bg-orange-400 focus:outline-none ${className}`}
      onClick={() => setWaves(waves => waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
