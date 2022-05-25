import { App } from '@src/App';
import { screen, render } from '@testing-library/react';

describe('<App />', () => {
  describe('render tests', () => {
    beforeEach(() => render(<App />));

    it('should render component', () => {
      expect(screen.getByRole('application')).toBeInTheDocument();
    });

    it('should render counters text', () => {
      expect(screen.getByText(/counter 1/i)).toBeVisible();
    });
  });
});
