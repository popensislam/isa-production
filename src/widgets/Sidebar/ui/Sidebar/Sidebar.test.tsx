/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    componentRender(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar toggle', () => {
    componentRender(<Sidebar/>);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
