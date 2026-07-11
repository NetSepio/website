import React from 'react';
import { render, screen } from '@testing-library/react';
import ParticleNetwork from '../ParticleNetwork';

const loadSlimMock = jest.fn().mockResolvedValue(undefined);

jest.mock('@tsparticles/slim', () => ({
  loadSlim: (...args) => loadSlimMock(...args),
}));

// tsParticles v3 initializes the engine via `initParticlesEngine`; the mock
// runs that callback (as the real one does) without the canvas-based engine.
jest.mock('@tsparticles/react', () => {
  const React = require('react');
  const MockParticles = ({ id, className }) => (
    <div data-testid="particles" id={id} className={className} />
  );
  return {
    __esModule: true,
    default: MockParticles,
    initParticlesEngine: (cb) => Promise.resolve(cb({ engineStub: true })),
  };
});

describe('ParticleNetwork', () => {
  beforeEach(() => {
    loadSlimMock.mockClear();
  });

  it('renders the tsparticles container with the expected id once the engine is ready', async () => {
    render(<ParticleNetwork />);
    const el = await screen.findByTestId('particles');
    expect(el).toHaveAttribute('id', 'tsparticles');
  });

  it('applies the pointer/overlay classes to the container', async () => {
    render(<ParticleNetwork />);
    expect(await screen.findByTestId('particles')).toHaveClass(
      'absolute',
      'inset-0',
      'pointer-events-none'
    );
  });

  it('loads the slim particles bundle during initialization', async () => {
    render(<ParticleNetwork />);
    await screen.findByTestId('particles');
    expect(loadSlimMock).toHaveBeenCalledWith({ engineStub: true });
  });
});
