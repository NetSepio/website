import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import NavBar from '../NavBar';

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe('NavBar', () => {
  beforeEach(() => {
    pushMock.mockClear();
    window.scrollY = 0;
  });

  it('renders every navigation link with the correct href', () => {
    render(<NavBar />);
    const expected = {
      'Erebrus VPN': 'https://erebrus.io/',
      'Erebrus Drop': '/#erebrus-drop',
      ClawBrick: 'https://clawbrick.com/',
      Mission: '/mission',
      Docs: 'https://docs.netsepio.com/latest',
    };
    for (const [name, url] of Object.entries(expected)) {
      // Links appear in both desktop and mobile lists; check the first.
      const link = screen.getAllByRole('link', { name })[0];
      expect(link).toHaveAttribute('href', url);
    }
  });

  it('opens external links in a new tab with rel=noreferrer', () => {
    render(<NavBar />);
    const vpn = screen.getAllByRole('link', { name: 'Erebrus VPN' })[0];
    expect(vpn).toHaveAttribute('target', '_blank');
    expect(vpn).toHaveAttribute('rel', 'noreferrer');
  });

  it('does not open internal links in a new tab', () => {
    render(<NavBar />);
    const mission = screen.getAllByRole('link', { name: 'Mission' })[0];
    expect(mission).not.toHaveAttribute('target');
  });

  it('navigates home when the logo is clicked', () => {
    render(<NavBar />);
    fireEvent.click(screen.getByAltText('NetSepio Logo').closest('div'));
    expect(pushMock).toHaveBeenCalledWith('/');
  });

  it('toggles the mobile menu button label between Menu and Close', () => {
    render(<NavBar />);
    const toggle = screen.getByRole('button', { name: '[ Menu ]' });
    fireEvent.click(toggle);
    expect(
      screen.getByRole('button', { name: '[ Close ]' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '[ Close ]' }));
    expect(
      screen.getByRole('button', { name: '[ Menu ]' })
    ).toBeInTheDocument();
  });

  it('adds the scrolled styling when the window scrolls past the threshold', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('bg-transparent');

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(nav).toHaveClass('bg-void/80');
    expect(nav).not.toHaveClass('bg-transparent');
  });

  it('keeps the transparent style when scroll is within the threshold', () => {
    const { container } = render(<NavBar />);
    const nav = container.querySelector('nav');
    act(() => {
      window.scrollY = 10;
      window.dispatchEvent(new Event('scroll'));
    });
    expect(nav).toHaveClass('bg-transparent');
  });
});
