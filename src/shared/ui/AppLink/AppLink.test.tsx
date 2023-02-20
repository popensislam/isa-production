import { screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/lib/renderWithRouter/renderWithRouter';
import { AppLink, AppLinkTheme } from './AppLink';


describe('AppLink', () => {
  test('AppLink primary', () => {
    renderWithRouter(<AppLink to='/'>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toBeInTheDocument();
  });

  test('AppLink primary', () => {
    renderWithRouter(<AppLink to='/' theme={AppLinkTheme.PRIMARY}>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toHaveClass('primary');
  });

  test('AppLink secondary', () => {
    renderWithRouter(<AppLink to='/' theme={AppLinkTheme.SECONDARY}>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toHaveClass('secondary');
  });
});
