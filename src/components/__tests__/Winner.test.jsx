import React from 'react';
import { render, screen } from '@testing-library/react';
import Winner from '../Winner';

describe('Winner', () => {
  it('renders the section heading', () => {
    render(<Winner />);
    expect(
      screen.getByRole('heading', { name: /Join the/i })
    ).toBeInTheDocument();
  });

  it('renders all six partner logos with alt text', () => {
    render(<Winner />);
    const names = [
      'Radar Hackathon',
      'ETH SEA',
      'IVS Crypto',
      'Aptos',
      'Soonami',
      'Akindo',
    ];
    names.forEach((name) => {
      expect(screen.getByAltText(name)).toBeInTheDocument();
    });
  });

  it('links each highlight to its external URL in a new tab', () => {
    render(<Winner />);
    const ethSea = screen.getByRole('link', {
      name: /Grand Prize at ETH SEA/i,
    });
    expect(ethSea).toHaveAttribute(
      'href',
      'https://netsepio.substack.com/p/erebrus-protocol-by-netsepio-wins'
    );
    expect(ethSea).toHaveAttribute('target', '_blank');
    expect(ethSea).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders all six achievement highlights as links', () => {
    render(<Winner />);
    const highlightTexts = [
      /4th Place Solana Radarhack DePIN/i,
      /Grand Prize at ETH SEA Demoday/i,
      /Grand Prize at IVS Crypto Demoday/i,
      /Grand Prize at Aptos Hackathon/i,
      /On the Fast Track Prize at Soonami/i,
      /Several Prizes at Akindo WaveHack/i,
    ];
    highlightTexts.forEach((text) => {
      expect(screen.getByRole('link', { name: text })).toBeInTheDocument();
    });
  });
});
