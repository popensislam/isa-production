import { FunctionComponent, SVGAttributes } from 'react';

export interface SidebarItemI {
  path: string,
  text: string,
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
}
