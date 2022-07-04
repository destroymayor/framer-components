import { useContext } from 'react';
import { TabsContext } from './Tabs';

import clsx from 'clsx';

export default function Tab(props) {
  const { children, value, className } = props;
  const { repositionHighlight } = useContext(TabsContext);

  return (
    <li
      className={clsx('relative', className)}
      onMouseEnter={(ev) => repositionHighlight(ev, value)}
    >
      {children}
    </li>
  );
}
