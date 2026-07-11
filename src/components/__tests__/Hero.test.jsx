import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: false }),
}));

jest.mock('../ParticleNetwork', () => {
  const MockParticleNetwork = () => <div data-testid="particle-network" />;
  MockParticleNetwork.displayName = 'MockParticleNetwork';
  return MockParticleNetwork;
});

describe('Hero', () => {
  it('renders the primary headline text', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/The Sovereignty/i);
    expect(heading).toHaveTextContent(/Open Internet/i);
  });

  it('renders the three call-to-action links with correct targets', () => {
    render(<Hero />);
    expect(
      screen.getByRole('link', { name: /Explore the Stack/i })
    ).toHaveAttribute('href', '/#suite');

    const followX = screen.getByRole('link', { name: /Follow on X/i });
    expect(followX).toHaveAttribute('href', 'https://x.com/netsepio');
    expect(followX).toHaveAttribute('target', '_blank');

    const discord = screen.getByRole('link', { name: /Join Discord/i });
    expect(discord).toHaveAttribute(
      'href',
      'https://discordapp.com/invite/5uaFhNpRF6'
    );
  });

  it('renders the HUD stat strip keys and values', () => {
    render(<Hero />);
    ['PRIVACY', 'CENSORSHIP', 'INFRA', 'AI'].forEach((key) => {
      expect(screen.getByText(key)).toBeInTheDocument();
    });
    ['DEFAULT', 'RESISTED', 'DECENTRALIZED', 'USER-OWNED'].forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('mounts the particle network backdrop', () => {
    render(<Hero />);
    expect(screen.getByTestId('particle-network')).toBeInTheDocument();
  });
});
