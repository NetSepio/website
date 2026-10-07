import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../not-found';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: false }),
}));

jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('NotFound', () => {
  it('renders the SIGNAL_LOST error tag', () => {
    render(<NotFound />);
    expect(screen.getByText(/SIGNAL_LOST/i)).toBeInTheDocument();
  });

  it('renders a link back to the home grid', () => {
    render(<NotFound />);
    const link = screen.getByRole('link', { name: /Return to Grid/i });
    expect(link).toHaveAttribute('href', '/');
  });

  it('renders the offline-node explanation copy', () => {
    render(<NotFound />);
    expect(
      screen.getByText(/node you are trying to reach is offline/i)
    ).toBeInTheDocument();
  });
});
