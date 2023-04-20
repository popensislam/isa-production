import { t } from 'i18next';
import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';


export interface SidebarItemI {
  path: string,
  text: string,
  Icon?: FunctionComponent<SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemI[] = [
  {
    path: RoutePath.main,
    text: 'main',
    Icon: MainIcon
  }, {
    path: RoutePath.about,
    text: 'about',
    Icon: AboutIcon
  }, {
    path: RoutePath.profile,
    text: 'Profile page',
    Icon: ProfileIcon
  }
];
