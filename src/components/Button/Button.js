import { forwardRef } from 'react';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Spinner from '@/components/Spinner';

import { disabledColor, colorTypes } from './constants';

export default forwardRef(function Button(props, ref) {
  const {
    loading,
    disabled,
    type = 'button',
    color = 'default',
    className = '',
    icon,
    children,
    ...rest
  } = props;

  return (
    <span className={clsx(disabled ? 'cursor-not-allowed' : '')}>
      <motion.button
        ref={ref}
        {...rest}
        type={type}
        disabled={disabled}
        whileTap={{ scale: 0.9 }}
        className={clsx(
          'flex flex-nowrap items-center justify-center gap-2 rounded-lg border shadow transition duration-200 ease-in-out',
          children ? 'p-2' : 'p-1',
          disabled ? disabledColor : colorTypes[color],
          className
        )}
      >
        {loading ? (
          <Spinner className="h-5 w-5" />
        ) : (
          <span className={clsx(icon ? '' : 'hidden', 'h-5 w-5')}>{icon}</span>
        )}
        <span className={clsx(children ? 'px-1' : 'hidden', 'whitespace-nowrap')}>{children}</span>
      </motion.button>
    </span>
  );
});
