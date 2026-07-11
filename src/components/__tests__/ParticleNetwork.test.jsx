import React from 'react';
import { render, screen } from '@testing-library/react';
import ParticleNetwork from '../ParticleNetwork';

const loadSlimMock = jest.fn().mockResolvedValue(undefined);

jest.mock('@tsparticles/slim', () => ({
  loadSlim: (...args) => loadSlimMock(...args),
}));

// Render a stand-in that also exercises the `init` callback the component
// passes down, without pulling in the real canvas-based engine.
jest.mock('@tsparticles/react', () => {
  const React = require('react');
  const MockParticles = ({ id, className, init }) => {
    React.useEffect(() => {
      if (init) init({ engineStub: true });
    }, [init]);
    return <div data-testid="particles" id={id} className={className} />;
  };
  return { __esModule: true, default: MockParticles };
});

describe('ParticleNetwork', () => {
  beforeEach(() => {
    loadSlimMock.mockClear();
  });

  it('renders the tsparticles container with the expected id', () => {
    render(<ParticleNetwork />);
    const el = screen.getByTestId('particles');
    expect(el).toHaveAttribute('id', 'tsparticles');
  });

  it('applies the pointer/overlay classes to the container', () => {
    render(<ParticleNetwork />);
    expect(screen.getByTestId('particles')).toHaveClass(
      'absolute',
      'inset-0',
      'pointer-events-none'
    );
  });

  it('loads the slim particles bundle during initialization', async () => {
    render(<ParticleNetwork />);
    // The init callback runs in an effect; allow the microtask to flush.
    await Promise.resolve();
    expect(loadSlimMock).toHaveBeenCalledWith({ engineStub: true });
  });
});
