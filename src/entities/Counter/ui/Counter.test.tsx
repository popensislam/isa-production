import { Counter } from './Counter';
import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/componentRender/componentRender';

describe('Counter', () => {
  test('Have value from state', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('Click increment', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } } });
    const incrementBtn = screen.getByTestId('increment-btn');
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Click decrement', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 10 } } });
    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
