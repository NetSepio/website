import React from 'react';
import { render, screen } from '@testing-library/react';
import Platforms from '../Platforms';

describe('Platforms', () => {
  it('renders the three product headings', () => {
    render(<Platforms />);
    expect(
      screen.getByRole('heading', { name: /connectivity/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /file transfers/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /second brain for/i })
    ).toBeInTheDocument();
  });

  it('links the Erebrus VPN CTA to erebrus.io', () => {
    render(<Platforms />);
    const cta = screen.getByRole('link', { name: /Explore VPN/i });
    expect(cta).toHaveAttribute('href', 'https://erebrus.io/');
    expect(cta).toHaveAttribute('target', '_blank');
  });

  it('links the ClawBrick CTA to clawbrick.com', () => {
    render(<Platforms />);
    const cta = screen.getByRole('link', { name: /Visit ClawBrick/i });
    expect(cta).toHaveAttribute('href', 'https://clawbrick.com/');
  });

  it('exposes anchor ids for in-page navigation', () => {
    const { container } = render(<Platforms />);
    expect(container.querySelector('#erebrus-vpn')).toBeInTheDocument();
    expect(container.querySelector('#erebrus-drop')).toBeInTheDocument();
    expect(container.querySelector('#clawbrick')).toBeInTheDocument();
  });

  it('marks the upcoming security tools as coming soon', () => {
    render(<Platforms />);
    expect(screen.getByText(/Coming soon/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Defend devices and networks/i })
    ).toBeInTheDocument();
  });

  it('renders the device-to-device transfer chips', () => {
    render(<Platforms />);
    ['WIFI', 'HOTSPOT', 'DEVICE-TO-DEVICE'].forEach((chip) => {
      expect(screen.getByText(chip)).toBeInTheDocument();
    });
  });
});
