import { App } from '@src/App';
import { render } from '@test-utils/ThemeHelper';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<App />', () => {
  describe('render tests', () => {
    beforeEach(() => render(<App />));

    it('should render component', () => {
      expect(screen.getByRole('application')).toBeInTheDocument();
    });

    it('should show Hello Vite', () => {
      expect(screen.getByText('Hello Vite + React!')).toBeVisible();
    });

    it('should show link Learn React', () => {
      expect(screen.getByText('Learn React', { selector: 'a' })).toBeVisible();
    });
    it('should show Vite Docs', () => {
      expect(screen.getByText('Vite Docs', { selector: 'a' })).toBeVisible();
    });

    it('should show button', () => {
      expect(screen.getByRole('button')).toBeVisible();
    });

    it('should increase counter after click', async () => {
      expect(screen.getByText('count is: 0')).toBeVisible();

      await userEvent.click(screen.getByRole('button'));

      expect(screen.getByText('count is: 1')).toBeVisible();
    });
  });
});
