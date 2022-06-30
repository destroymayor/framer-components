import clsx from 'clsx';

import { colorType } from './constants';

export default function Tag(props) {
  const { className = '', color = 'primary', label = '' } = props;

  return (
    <span
      className={clsx(
        'flex flex-none items-center justify-center gap-2 whitespace-nowrap rounded-2xl border bg-opacity-5 px-3 py-[2px] text-xs font-semibold tracking-wide hover:bg-opacity-20',
        colorType?.[color],
        className
      )}
    >
      {label}
    </span>
  );
}
