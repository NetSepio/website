import React from 'react';
import { render, screen } from '@testing-library/react';
import Success from '../Success';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: false }),
}));

describe('Success', () => {
  it('renders all four principle titles', () => {
    render(<Success />);
    const titles = [
      'Private by design',
      'Local when it matters',
      'Defense against control',
      'A second brain you own',
    ];
    titles.forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument();
    });
  });

  it('renders each principle label', () => {
    render(<Success />);
    ['CONNECT', 'SHARE', 'PROTECT', 'REMEMBER'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders the principle descriptions', () => {
    render(<Success />);
    expect(
      screen.getByText(/Erebrus VPN gives users resilient private connectivity/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ClawBrick unifies your notes/i)
    ).toBeInTheDocument();
  });
});
