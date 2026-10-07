import React from 'react';
import { render, screen } from '@testing-library/react';
import Subscribe from '../Subscribe';

describe('Subscribe', () => {
  it('renders the subscribe CTA linking to the substack', () => {
    render(<Subscribe />);
    const link = screen.getByRole('link', { name: /Subscribe/i });
    expect(link).toHaveAttribute('href', 'https://netsepio.substack.com/');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the Discord and Telegram community links', () => {
    render(<Subscribe />);
    expect(screen.getByRole('link', { name: /Discord/i })).toHaveAttribute(
      'href',
      'https://discordapp.com/invite/5uaFhNpRF6'
    );
    expect(screen.getByRole('link', { name: /Telegram/i })).toHaveAttribute(
      'href',
      'https://t.me/NetSepio'
    );
  });

  it('renders the community section heading', () => {
    render(<Subscribe />);
    expect(
      screen.getByRole('heading', { name: /Join Our Community/i })
    ).toBeInTheDocument();
  });
});
