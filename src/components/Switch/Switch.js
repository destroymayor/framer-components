import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { colorTypes } from './constants';

export default function Switch(props) {
  const { checked = false, disabled, color = 'primary', onChange } = props;

  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked((prevState) => !prevState);
    onChange?.(e);
  };

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  return (
    <label
      className={clsx(
        `group flex items-center py-1`,
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
    >
      <div className="relative">
        <input
          type="checkbox"
          disabled={disabled}
          checked={isChecked}
          className="sr-only"
          onChange={handleChange}
        />
        <div
          className={clsx(
            isChecked ? `${colorTypes[color]} group-hover:bg-opacity-80` : 'bg-gray-300',
            disabled ? 'opacity-50' : 'opacity-100',
            'block h-8 w-14 rounded-full'
          )}
        />
        <motion.div
          animate={{
            x: isChecked ? '100%' : 0,
            transition: {
              duration: 0.15,
              type: 'spring',
              stiffness: 700,
              damping: 30,
            },
          }}
          className={clsx('absolute left-1 top-1 h-6 w-6 rounded-full bg-white')}
        />
      </div>
    </label>
  );
}
