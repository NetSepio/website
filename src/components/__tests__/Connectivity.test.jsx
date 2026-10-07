import React from 'react';
import { render, screen } from '@testing-library/react';
import Connectivity from '../Connectivity';

jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Connectivity', () => {
  it('renders the ethos section heading', () => {
    render(<Connectivity />);
    expect(
      screen.getByRole('heading', { name: /Infrastructure For/i })
    ).toBeInTheDocument();
  });

  it('renders the terminal command line from the manifesto', () => {
    render(<Connectivity />);
    expect(
      screen.getByText('cat /etc/netsepio/ethos')
    ).toBeInTheDocument();
  });

  it('renders the manifesto output lines', () => {
    render(<Connectivity />);
    expect(
      screen.getByText(/NetSepio is the sovereignty stack for digital agency/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Access shouldn't depend on permission/i)
    ).toBeInTheDocument();
  });

  it('links the mission CTA to /mission', () => {
    render(<Connectivity />);
    expect(
      screen.getByRole('link', { name: /Read Our Mission/i })
    ).toHaveAttribute('href', '/mission');
  });
});
