import { useState, useRef, useEffect } from 'react';

import useOnClickOutside from '@/hooks/use-on-click-outside.hook';

import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from '@/components/Spinner';
import { ChevronUpIcon, ChevronDownIcon, XIcon } from '@/components/Icon';

import { colorType } from './constants';

export default function Select(props) {
  const {
    searchable = false,
    clearable = true,
    disabled,
    loading,
    className,
    color = 'primary',
    defaultValue = '',
    options = [],
    renderItem,
    onSelect,
  } = props;

  const selectContainerRef = useRef(null);
  const searchInputRef = useRef(null);

  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useOnClickOutside(selectContainerRef, () => setOpen(false));

  useEffect(() => setSearchValue(defaultValue), []);

  const handleToggle = () => {
    if (disabled) return;

    searchInputRef?.current?.focus();
    setOpen((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSelect = (option, index) => {
    onSelect?.(option, index);
    setSelected(option);
    setSearchValue('');
    setOpen(false);
  };

  const handleClear = () => {
    setSelected('');
    setSearchValue('');
  };

  const filterOptions =
    searchValue === ''
      ? options
      : options.filter((item) => item.match(new RegExp(searchValue, 'g')));

  return (
    <div ref={selectContainerRef} className="relative min-w-[150px]">
      <div
        className={clsx(
          'group relative flex items-center justify-between gap-2 rounded-lg bg-white p-2 text-gray-600 shadow ring ring-zinc-200 transition duration-200 ease-in-out focus:outline-none',
          disabled
            ? 'cursor-not-allowed bg-zinc-200/50 text-zinc-400 ring-zinc-300'
            : colorType[color],
          className
        )}
        onClick={handleToggle}
      >
        <div className="flex flex-1 items-center">
          {searchValue === '' && (
            <span className={clsx(searchable ? 'absolute left-3' : '')}>{selected}</span>
          )}

          {searchable && (
            <input
              ref={searchInputRef}
              disabled={disabled}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="none"
              className={clsx(
                'w-full bg-transparent px-1 focus:outline-none',
                disabled ? 'cursor-not-allowed' : ''
              )}
              value={searchValue}
              onChange={handleSearch}
            />
          )}
        </div>

        <div className="flex items-center gap-1">
          {loading && <Spinner className="h-5 w-5" />}

          {!loading && clearable && !disabled && (searchValue !== '' || selected !== '') && (
            <span
              className="invisible h-5 w-5 cursor-pointer text-zinc-400 hover:text-zinc-700 group-hover:visible"
              onClick={handleClear}
            >
              <XIcon />
            </span>
          )}

          <span
            className={clsx(
              'h-5 w-5 text-zinc-400',
              disabled ? 'cursor-not-allowed' : 'cursor-pointer group-hover:text-zinc-700'
            )}
          >
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-[999] mt-2 max-h-56 w-full overflow-auto rounded-lg bg-white py-2 shadow-lg"
            layout="position"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
          >
            {filterOptions.map((option, index) => (
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
