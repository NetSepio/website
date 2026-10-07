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

  it('links every product to its own site in a new tab', () => {
    render(<Footer />);
    const products = {
      Erebrus: 'https://erebrus.io/',
      ClawBrick: 'https://clawbrick.com/',
      Sotreus: 'https://sotreus.com/',
    };
    for (const [name, url] of Object.entries(products)) {
      const link = screen.getByRole('link', { name: new RegExp(`${name}$`) });
      expect(link).toHaveAttribute('href', url);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    }
  });

  it('leaves internal links without a target', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Mission/ })).not.toHaveAttribute('target');
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
