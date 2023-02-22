/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from 'shared/lib/renderWithRouter/renderWithRouter';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTransltion';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('Sidebar render', () => {
    renderWithTranslation(renderWithTranslation(<Sidebar/>));
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar toggle', () => {
    renderWithRouter(renderWithTranslation(<Sidebar/>));
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
