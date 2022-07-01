import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CheckIcon } from '@/components/Icon';

import { colorType } from './constants';

export default function Checkbox(props) {
  const { checked = undefined, disabled, color = 'primary', onChange } = props;

  const [isChecked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked((prevState) => !prevState);
    onChange?.(e);
  };

  useEffect(() => {
    if (checked !== undefined) {
      setChecked(checked);
    }
  }, [checked]);

  return (
    <label className="inline-flex items-center">
      <span className="-m-[2px] flex items-center p-[2px]">
        <input
          type="checkbox"
          disabled={disabled}
          checked={isChecked}
          className="sr-only"
          onChange={handleChange}
        />
      </span>
      <motion.span
        whileTap={{ scale: 0.9 }}
        className={clsx(
          'relative flex items-center justify-center',
          'rounded border',
          isChecked ? colorType[color] : ' border-gray-400',
          disabled
            ? 'cursor-not-allowed border-gray-300/70 bg-gray-200'
            : 'cursor-pointer hover:border-primary focus:border-primary'
        )}
      >
        <motion.span
          animate={{
            scale: isChecked ? [0.2, 0.5, 1] : [1, 0.5, 0],
            transition: {
              duration: 0.15,
            },
          }}
        >
          <CheckIcon className={clsx('h-6 w-6', 'text-white')} />
        </motion.span>
      </motion.span>
    </label>
  );
}
