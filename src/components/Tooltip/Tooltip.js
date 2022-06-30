import { useRef, useState, useMemo } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import InPortal from '@/components/InPortal';

import { colorType, getRect, getPlacement, getArrowIconPlacement } from './constants';

export default function Tooltip(props) {
  const { disabled, color = 'default', placement = 'top', offset = 0, children, content } = props;
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const [tooltipStyles, setTooltipStyles] = useState({});

  const iconStyles = useMemo(() => getArrowIconPlacement(placement), [placement]);

  const handleOpen = () => {
    if (disabled) return;

    const position = getPlacement(placement, getRect(containerRef), offset);

    setTooltipStyles({
      left: position.left,
      top: position.top,
      transform: position.transform,
    });

    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <div
      ref={containerRef}
      className="group relative flex flex-col items-center"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      data-testid="tooltip"
    >
      {children}

      <AnimatePresence>
        {isOpen && (
          <InPortal>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={clsx('absolute z-[9999] mb-6 flex flex-col items-center')}
              style={tooltipStyles}
            >
              <motion.div
                className={clsx('absolute -mt-2 block h-3 w-3', colorType?.[color])}
                style={iconStyles}
              />

              <div
                className={clsx(
                  'relative z-[999] min-w-[100px] rounded-md p-2 text-center text-xs',
                  colorType?.[color]
                )}
              >
                {content}
              </div>
            </motion.div>
          </InPortal>
        )}
      </AnimatePresence>
    </div>
  );
}
