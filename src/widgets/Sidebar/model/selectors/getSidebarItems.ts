import { SidebarItemI } from '../types/sidebar';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticlesIcon from 'shared/assets/icons/articles.svg';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {

  const SidebarItemsList: SidebarItemI[] = [
    {
      path: RoutePath.main,
      text: 'main',
      Icon: MainIcon
    }, {
      path: RoutePath.about,
      text: 'about',
      Icon: AboutIcon
    }
  ];

  if (userData) {
    SidebarItemsList.push({
      path: RoutePath.profile + userData?.id,
      text: 'profile-page',
      Icon: ProfileIcon,
    }, {
      path: RoutePath.articles,
      text: 'articles-page',
      Icon: ArticlesIcon,
    });
  }

  return SidebarItemsList;
});
