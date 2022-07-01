export const colorType = {
  default: 'bg-default text-zinc-50',
  primary: 'bg-primary text-zinc-50',
  warning: 'bg-warning text-zinc-50',
  success: 'bg-success text-zinc-50',
  error: 'bg-error text-zinc-50',
};

export const getRect = (element) => {
  const rect = element.current.getBoundingClientRect();

  return {
    ...rect,
    width: rect.width || rect.right - rect.left,
    height: rect.height || rect.bottom - rect.top,
    top: rect.top + document.documentElement.scrollTop,
    bottom: rect.bottom + document.documentElement.scrollTop,
    left: rect.left + document.documentElement.scrollLeft,
    right: rect.right + document.documentElement.scrollLeft,
  };
};

export const getPlacement = (placement, rect, offset) => {
  const placements = {
    top: {
      top: `${rect.top - offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, -130%)',
    },
    bottom: {
      top: `${rect.bottom + offset}px`,
      left: `${rect.left + rect.width / 2}px`,
      transform: 'translate(-50%, 30%)',
    },
    left: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.left - offset}px`,
      transform: 'translate(-110%, -50%)',
    },
    right: {
      top: `${rect.top + rect.height / 2}px`,
      left: `${rect.right + offset}px`,
      transform: 'translate(10%, -50%)',
    },
  };

  return placements[placement] || placements.top;
};

export const getArrowIconPlacement = (placement) => {
  const placements = {
    top: {
      top: 'auto',
      right: 'auto',
      left: '50%',
      bottom: '0px',
      transform: 'translate(-50%, 50%) rotate(45deg)',
    },
    bottom: {
      top: '-10px',
      right: 'auto',
      left: '50%',
      bottom: 'auto',
      transform: 'translate(-50%, 100%) rotate(225deg)',
    },
    left: {
      top: '55%',
      right: '0px',
      left: 'auto',
      bottom: 'auto',
      transform: 'translate(40%, 0%) rotate(-45deg)',
    },
    right: {
      top: '55%',
      right: 'auto',
      left: '0px',
      bottom: 'auto',
      transform: 'translate(-40%, 0%) rotate(135deg)',
    },
  };

  return placements[placement] || placements.top;
};
