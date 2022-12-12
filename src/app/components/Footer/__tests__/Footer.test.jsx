import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
  const renderComponent = () => render(<Footer />);

  it('should render component', () => {
    renderComponent();

    expect(screen.getByTestId('footer-container')).toBeInTheDocument();
  });

  it('should render links', () => {
    renderComponent();

    expect(screen.getByTestId('react-link')).toBeInTheDocument();
    expect(screen.getByTestId('redux-link')).toBeInTheDocument();
    expect(screen.getByTestId('redux-toolkit-link')).toBeInTheDocument();
    expect(screen.getByTestId('react-redux-link')).toBeInTheDocument();
  });
});
