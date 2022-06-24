import { useRef, useState } from 'react';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import InPortal from '@/components/InPortal';

import { colorTypes } from './constants';

export default function Tooltip(props) {
  const { disabled, color = 'default', children, content } = props;
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tooltipStyles, setTooltipStyles] = useState({});

  const handleOpen = () => {
    if (disabled) return;

    const rect = containerRef.current.getBoundingClientRect();
    setTooltipStyles({
      left: rect.x + rect.width / 2,
      top: rect.top + document.documentElement.scrollTop - 25,
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    if (disabled) return;

    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="group relative flex flex-col items-center"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      data-testid="tooltip"
    >
      {children}

      <InPortal>
        <motion.div
          animate={{
            visibility: isOpen ? 'visible' : 'hidden',
          }}
          className={clsx('absolute mb-6 flex flex-col items-center')}
          style={{ ...tooltipStyles, transform: 'translate(-50%, -50%)' }}
        >
          <div
            className={clsx(
              'whitespace-no-wrap relative z-[999] min-w-[100px] rounded-md p-2 text-center text-xs',
              colorTypes?.[color]
            )}
          >
            {content}
          </div>
          <div className={clsx('-mt-2 block h-3 w-3 rotate-45', colorTypes?.[color])}></div>
        </motion.div>
      </InPortal>
    </div>
  );
}
