import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Footer', () => {
  it('renders the current year in the copyright line', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`${year}`))
    ).toBeInTheDocument();
  });

  it('renders the About section links with correct paths', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Mission/ })).toHaveAttribute(
      'href',
      '/mission'
    );
    expect(screen.getByRole('link', { name: /Privacy Policy/ })).toHaveAttribute(
      'href',
      '/privacy.html'
    );
    expect(screen.getByRole('link', { name: /Terms of Use/ })).toHaveAttribute(
      'href',
      '/terms.html'
    );
  });

  it('marks external product links with target and rel attributes', () => {
    render(<Footer />);
    const vpn = screen.getByRole('link', { name: /Erebrus VPN/ });
    expect(vpn).toHaveAttribute('href', 'https://erebrus.io/');
    expect(vpn).toHaveAttribute('target', '_blank');
    expect(vpn).toHaveAttribute('rel', 'noreferrer');
  });

  it('leaves the internal Erebrus Drop link without a target', () => {
    render(<Footer />);
    const drop = screen.getByRole('link', { name: /Erebrus Drop/ });
    expect(drop).toHaveAttribute('href', '/#erebrus-drop');
    expect(drop).not.toHaveAttribute('target');
  });

  it('renders all five social media links opening in a new tab', () => {
    render(<Footer />);
    const socialUrls = [
      'https://t.me/NetSepio',
      'https://github.com/Netsepio',
      'https://discordapp.com/invite/5uaFhNpRF6',
      'https://www.linkedin.com/company/netsepio/',
      'https://x.com/netsepio',
    ];
    const hrefs = screen
      .getAllByRole('link')
      .map((a) => a.getAttribute('href'));
    socialUrls.forEach((url) => expect(hrefs).toContain(url));
  });
});
