import { useState, useEffect, useRef } from 'react';

import { AnimatePresence } from 'framer-motion';
import InPortal from '@/components/InPortal';
import Toast from './Toast';

export default function ToastContainer(props) {
  const { toasts, onCloseToast } = props;

  const [isHovering, setHovering] = useState(false);
  const [heights, setHeights] = useState([]);

  const toastRef = useRef(null);

  useEffect(() => {
    const node = toastRef.current;

    if (node) {
      const clientHeight = node.clientHeight;
      const toastId = node.dataset.projectionId;
      setHeights((heights) => [{ height: clientHeight, toastId }, ...heights]);
    }
  }, [toasts, setHeights]);

  useEffect(() => {
    if (toasts.length === 0) setHovering(false);
  }, [toasts.length]);

  const handleCloseToast = (closeId) => {
    onCloseToast(closeId);
    setHeights((prevState) => prevState.filter((toast) => toast.toastId !== closeId));
  };

  return (
    <InPortal>
      <ul
        className="fixed bottom-8 right-8"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <AnimatePresence initial={false}>
          {toasts.map((toast, index) => (
            <Toast
              key={toast.id}
              ref={toastRef}
              isHovering={isHovering}
              toast={toast}
              index={index}
              heights={heights}
              onClose={(closeId) => handleCloseToast(closeId)}
            />
          ))}
        </AnimatePresence>
      </ul>
    </InPortal>
  );
}
