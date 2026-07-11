import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

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

// tsparticles is heavy and relies on canvas APIs jsdom lacks.
jest.mock('../../components/ParticleNetwork', () => {
  const MockParticleNetwork = () => <div data-testid="particle-network" />;
  MockParticleNetwork.displayName = 'MockParticleNetwork';
  return MockParticleNetwork;
});

describe('Home page', () => {
  it('renders the hero headline', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: /Sovereignty/i })
    ).toBeInTheDocument();
  });

  it('composes the main landing sections', () => {
    render(<Home />);
    // Section headings contributed by the composed components.
    expect(
      screen.getByRole('heading', { name: /Infrastructure For/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Join the Winners/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Sovereignty Stack Layers/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Join Our Community/i })
    ).toBeInTheDocument();
  });

  it('renders inside a main landmark', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
