import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionPage from '../mission/page';

const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
}));

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: false }),
}));

jest.mock('next/link', () => {
  const MockLink = ({ children, href, ...rest }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('MissionPage', () => {
  it('renders all six operating principles', () => {
    render(<MissionPage />);
    const titles = [
      'Privacy by default',
      'Local-first',
      'Censorship-resistant',
      'User-owned',
      'Resilient by design',
      'Open by conviction',
    ];
    titles.forEach((title) => {
      expect(
        screen.getByRole('heading', { name: title })
      ).toBeInTheDocument();
    });
  });

  it('renders the four sovereignty pillars', () => {
    render(<MissionPage />);
    ['CONNECT', 'SHARE', 'PROTECT', 'REMEMBER'].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders the operating principles section tag', () => {
    render(<MissionPage />);
    expect(screen.getByText(/OPERATING_PRINCIPLES/i)).toBeInTheDocument();
  });
});
