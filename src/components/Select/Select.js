import { useState, useRef } from 'react';

import useOnClickOutside from '@/hooks/use-on-click-outside.hook';

import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUpIcon, ChevronDownIcon } from '@/components/Icon';

import { colorTypes } from './constants';

export default function Select(props) {
  const {
    disabled,
    value,
    options = [],
    className,
    color = 'primary',
    renderItem,
    onSelect,
  } = props;
  const selectRef = useRef(null);

  const [isOpen, setOpen] = useState(false);

  useOnClickOutside(selectRef, () => setOpen(false));

  const handleToggle = () => setOpen((prevState) => !prevState);

  const handleSelect = (option, index) => {
    onSelect?.(option, index);
    setOpen(false);
  };

  return (
    <div ref={selectRef} className="relative">
      <button
        disabled={disabled}
        className={clsx(
          'group flex min-w-[150px] items-center justify-between rounded-lg bg-white p-2 text-gray-600 shadow ring ring-zinc-200 transition duration-200 ease-in-out focus:outline-none',
          className,
          disabled
            ? 'cursor-not-allowed bg-zinc-300 text-zinc-400 ring-zinc-300'
            : colorTypes[color]
        )}
        onClick={handleToggle}
      >
        <span>
          {value ?? (
            <span className={clsx(disabled ? 'text-zinc-400' : 'text-zinc-500')}>Select</span>
          )}
        </span>
        <span>
          {isOpen ? <ChevronUpIcon className="h-5 w-5" /> : <ChevronDownIcon className="h-5 w-5" />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-[999] mt-2 max-h-56 w-full overflow-auto rounded-lg bg-white py-2 shadow-lg"
            layout="position"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          >
            {options.map((option, index) => (
              <motion.li
                key={`${index.toString()}`}
                className={clsx(
                  'relative mx-2 flex cursor-pointer flex-wrap items-center rounded-lg p-2 hover:bg-zinc-200'
                )}
                onClick={() => handleSelect(option, index)}
              >
                {renderItem?.({ option }) ?? option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
