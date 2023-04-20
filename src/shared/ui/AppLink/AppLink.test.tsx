import { AppLink, AppLinkTheme } from './AppLink';
import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';


describe('AppLink', () => {
  test('AppLink primary', () => {
    componentRender(<AppLink to='/'>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toBeInTheDocument();
  });

  test('AppLink primary', () => {
    componentRender(<AppLink to='/' theme={AppLinkTheme.PRIMARY}>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toHaveClass('primary');
  });

  test('AppLink secondary', () => {
    componentRender(<AppLink to='/' theme={AppLinkTheme.SECONDARY}>AppLink</AppLink>);
    expect(screen.getByText('AppLink')).toHaveClass('secondary');
  });
});
