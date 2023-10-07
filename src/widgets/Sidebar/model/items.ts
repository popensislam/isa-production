import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';


export interface SidebarItemI {
  path: string,
  text: string,
  Icon: FunctionComponent<SVGAttributes<SVGElement>>
  authOnly?: boolean
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
    text: 'profile-page',
    Icon: ProfileIcon,
    authOnly: true
  }, {
    path: RoutePath.articles,
    text: 'articles-page',
    Icon: ArticlesIcon,
    authOnly: true
  }
];
