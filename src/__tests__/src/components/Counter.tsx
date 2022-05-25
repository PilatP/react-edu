import { screen, render } from '@testing-library/react';
import { Counter } from '../../../components/Counter';
import userEvent from '@testing-library/user-event';

describe('<Counter />', () => {
  describe('render tests', () => {
    const onIncrease = jest.fn();
    const onDecrease = jest.fn();

    beforeEach(() =>
      render(
        <Counter
          data-testid="counter"
          initialValue={1}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )
    );

    it('should render component', () => {
      expect(screen.getByTestId('counter')).toBeInTheDocument();
    });

    it('should show initial text', () => {
      expect(screen.getByText(/counter 1/i)).toBeVisible();
    });

    it('should show 2 buttons', () => {
      expect(screen.getAllByRole('button')).toHaveLength(2);
    });

    it('should show + button', () => {
      expect(screen.getByRole('button', { name: '+' })).toBeVisible();
    });

    it('should show - button', () => {
      expect(screen.getByRole('button', { name: '-' })).toBeVisible();
    });

    it('button + should be clicked', async () => {
      const button = screen.getByRole('button', { name: '+' });

      await userEvent.click(button);

      expect(onIncrease).toHaveBeenCalledTimes(2);
    });

    it('button - should be clicked', async () => {
      const button = screen.getByRole('button', { name: '-' });

      await userEvent.click(button);

      expect(onDecrease).toHaveBeenCalledTimes(1);
    });

    it('should increase counter', async () => {
      expect(screen.getByText(/counter 1/i)).toBeVisible();
      const button = screen.getByRole('button', { name: '+' });

      await userEvent.click(button);

      expect(screen.getByText(/counter 3/i)).toBeVisible();
    });

    it('should stop after count is 0', async () => {
      expect(screen.getByText(/counter 1/i)).toBeVisible();
      const button = screen.getByRole('button', { name: '-' });

      await userEvent.click(button);
      expect(screen.getByText(/counter 0/i)).toBeVisible();
      await userEvent.click(button);

      expect(screen.getByText(/counter 0/i)).toBeVisible();
    });
  });
});
