import React from 'react';
import { render, screen } from '@testing-library/react';
import Corners, { MonoTag, StatusDot, SectionHeader } from '../hud';

describe('Corners', () => {
  it('renders four corner bracket spans', () => {
    const { container } = render(<Corners />);
    const spans = container.querySelectorAll('span[aria-hidden]');
    expect(spans).toHaveLength(4);
  });

  it('applies the default border color and size classes', () => {
    const { container } = render(<Corners />);
    const spans = container.querySelectorAll('span[aria-hidden]');
    spans.forEach((span) => {
      expect(span).toHaveClass('border-brand-cyan/60', 'w-3', 'h-3');
    });
  });

  it('honors custom className and size props', () => {
    const { container } = render(
      <Corners className="border-white" size="w-5 h-5" />
    );
    const spans = container.querySelectorAll('span[aria-hidden]');
    spans.forEach((span) => {
      expect(span).toHaveClass('border-white', 'w-5', 'h-5');
    });
  });

  it('is the default export', () => {
    expect(Corners).toBeDefined();
  });
});

describe('MonoTag', () => {
  it('renders children between bracket markers', () => {
    render(<MonoTag>SUBSCRIBE</MonoTag>);
    expect(screen.getByText('SUBSCRIBE')).toBeInTheDocument();
    expect(screen.getByText('[')).toBeInTheDocument();
    expect(screen.getByText(']')).toBeInTheDocument();
  });

  it('merges extra className onto the mono-label span', () => {
    const { container } = render(
      <MonoTag className="mb-6">TAG</MonoTag>
    );
    const label = container.querySelector('.mono-label');
    expect(label).toHaveClass('mono-label', 'mb-6');
  });
});

describe('StatusDot', () => {
  it('renders its label text', () => {
    render(<StatusDot>Online</StatusDot>);
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('uses the default green color when no color prop is given', () => {
    const { container } = render(<StatusDot>Online</StatusDot>);
    expect(container.querySelector('.bg-brand-green')).toBeInTheDocument();
  });

  it('applies a custom color class', () => {
    const { container } = render(
      <StatusDot color="bg-red-500">Offline</StatusDot>
    );
    expect(container.querySelector('.bg-red-500')).toBeInTheDocument();
    expect(container.querySelector('.bg-brand-green')).not.toBeInTheDocument();
  });
});

describe('SectionHeader', () => {
  it('renders the index, code, and title', () => {
    const { container } = render(
      <SectionHeader index="02" code="FIELD_LOG" title="Join the Winners" />
    );
    const tag = container.querySelector('.mono-label');
    expect(tag).toHaveTextContent('02');
    expect(tag).toHaveTextContent('FIELD_LOG');
    expect(
      screen.getByRole('heading', { name: 'Join the Winners' })
    ).toBeInTheDocument();
  });

  it('renders the sub paragraph when provided', () => {
    render(
      <SectionHeader index="01" code="C" title="T" sub="A subtitle line" />
    );
    expect(screen.getByText('A subtitle line')).toBeInTheDocument();
  });

  it('omits the sub paragraph when not provided', () => {
    const { container } = render(
      <SectionHeader index="01" code="C" title="T" />
    );
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });

  it('centers content by default', () => {
    const { container } = render(
      <SectionHeader index="01" code="C" title="T" sub="s" />
    );
    expect(container.querySelector('.text-center')).toBeInTheDocument();
    expect(container.querySelector('.mx-auto')).toBeInTheDocument();
  });

  it('left-aligns content when align="left"', () => {
    const { container } = render(
      <SectionHeader index="01" code="C" title="T" sub="s" align="left" />
    );
    expect(container.querySelector('.text-left')).toBeInTheDocument();
    expect(container.querySelector('.text-center')).not.toBeInTheDocument();
  });
});
