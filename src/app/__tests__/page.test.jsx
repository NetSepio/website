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
      screen.getByRole('heading', { name: /Tools to Own Your/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Join the Winners/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Infrastructure For/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Join Our Community/i })
    ).toBeInTheDocument();
  });

  it('places the platforms before the field log and ethos', () => {
    render(<Home />);
    const order = [/Tools to Own Your/i, /Join the Winners/i, /Infrastructure For/i].map(
      (name) => screen.getByRole('heading', { name })
    );
    expect(order[0].compareDocumentPosition(order[1]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(order[1].compareDocumentPosition(order[2]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('renders inside a main landmark', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });
});
