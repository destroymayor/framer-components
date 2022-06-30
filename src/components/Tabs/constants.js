export const directionType = {
  horizontal: {
    container: 'flex flex-row items-start',
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateX(${tabBoundingBox?.left - wrapperBoundingBox?.left}px)`,
  },
  vertical: {
    container: 'flex flex-col items-start',
    transform: (tabBoundingBox, wrapperBoundingBox) =>
      `translateY(${tabBoundingBox?.top - wrapperBoundingBox?.top}px)`,
  },
};
