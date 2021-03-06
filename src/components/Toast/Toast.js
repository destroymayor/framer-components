import { forwardRef } from 'react';

import { XIcon } from '@/components/Icon';
import { iconMapping } from './constants';

import { motion } from 'framer-motion';
import clsx from 'clsx';

export default forwardRef(function Toast(props, ref) {
  const { isHovering, toast, heights, index, onClose } = props;
  const { id, title, description, severity } = toast;

  const handleClose = () => onClose(id);

  const showFirstThreeToast = index > 2 ? 'opacity-0' : 'opacity-100';

  const toastHeightBefore = heights.reduce((prev, curr, reducerIndex) => {
    if (reducerIndex >= index) return prev;
    return prev + curr.height;
  }, 0);

  const toastOffset = isHovering
    ? `translateY(calc(-1 * ${toastHeightBefore}px))`
    : `translateY(calc(-15px * ${index})) scale(calc(-1 * ${index} * 0.05 + 1))`;

  const zIndex = heights.length - index;

  return (
    <li
      ref={ref}
      data-projection-id={id}
      className={clsx('group absolute bottom-0 right-0 will-change-transform', showFirstThreeToast)}
      style={{ transition: 'all 400ms ease 0s', transform: toastOffset, zIndex }}
    >
      <motion.div
        key={id}
        layout="position"
        initial={{ opacity: 0, y: 50, scale: 0.3 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className="my-2 flex w-80 gap-2 rounded-md border border-zinc-300 bg-zinc-50 p-3 shadow-md"
      >
        <div>{iconMapping?.[severity]}</div>

        <div className="flex flex-1 flex-col">
          <span className="text-zinc-800">{title}</span>
          <span className="text-sm text-zinc-500">{description}&nbsp;</span>
        </div>

        <button
          className="h-6 w-6 self-start p-1 text-zinc-500 opacity-0 transition duration-300 ease-in-out hover:text-zinc-800 group-hover:opacity-100"
          onClick={handleClose}
        >
          <XIcon />
        </button>
      </motion.div>
    </li>
  );
});
