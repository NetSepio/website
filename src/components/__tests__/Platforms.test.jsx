import React from 'react';
import { render, screen } from '@testing-library/react';
import Platforms from '../Platforms';

describe('Platforms', () => {
  it('renders the three product headings', () => {
    render(<Platforms />);
    expect(
      screen.getByRole('heading', { name: /actually\s+use/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Agentic as a Service/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /See the signals/i })
    ).toBeInTheDocument();
  });

  it('links the Erebrus CTA to erebrus.io', () => {
    render(<Platforms />);
    const cta = screen.getByRole('link', { name: /Explore Erebrus/i });
    expect(cta).toHaveAttribute('href', 'https://erebrus.io/');
    expect(cta).toHaveAttribute('target', '_blank');
  });

  it('links each Erebrus module to its page on erebrus.io', () => {
    render(<Platforms />);
    const modules = {
      'Private, resilient connectivity': 'https://erebrus.io/vpn',
      'Local-first file transfer': 'https://erebrus.io/drop',
      'Models on trusted hardware': 'https://erebrus.io/ai',
      'DNS and network protection': 'https://erebrus.io/firewall',
    };
    for (const [title, url] of Object.entries(modules)) {
      const link = screen.getByRole('link', { name: new RegExp(title, 'i') });
      expect(link).toHaveAttribute('href', url);
      expect(link).toHaveAttribute('target', '_blank');
    }
  });

  it('links the ClawBrick CTAs to clawbrick.com', () => {
    render(<Platforms />);
    expect(
      screen.getByRole('link', { name: /Visit ClawBrick/i })
    ).toHaveAttribute('href', 'https://clawbrick.com/');
    expect(
      screen.getByRole('link', { name: /Deploy an Agent/i })
    ).toHaveAttribute('href', 'https://clawbrick.com/agents');
  });

  it('links Sotreus early access and how-it-works to sotreus.com', () => {
    render(<Platforms />);
    expect(
      screen.getByRole('link', { name: /Get Early Access/i })
    ).toHaveAttribute('href', 'https://sotreus.com/#access');
    expect(
      screen.getByRole('link', { name: /How It Works/i })
    ).toHaveAttribute('href', 'https://sotreus.com/#how');
  });

  it('shows each platform status in the index', () => {
    render(<Platforms />);
    expect(screen.getAllByText('Available').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Now open').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Early access').length).toBeGreaterThan(0);
  });

  it('exposes anchor ids for in-page navigation', () => {
    const { container } = render(<Platforms />);
    [
      '#erebrus',
      '#erebrus-vpn',
      '#erebrus-drop',
      '#erebrus-ai',
      '#erebrus-firewall',
      '#clawbrick',
      '#sotreus',
    ].forEach((id) => {
      expect(container.querySelector(id)).toBeInTheDocument();
    });
  });

  it('describes the Erebrus app mockup for screen readers', () => {
    render(<Platforms />);
    expect(
      screen.getByRole('img', { name: /Erebrus app/i })
    ).toBeInTheDocument();
  });
});
