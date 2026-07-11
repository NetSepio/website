import { cn } from '../util';

describe('cn', () => {
  it('joins multiple class name strings', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('ignores falsy values', () => {
    expect(cn('a', false, null, undefined, 0, 'b')).toBe('a b');
  });

  it('resolves conditional objects via clsx', () => {
    expect(cn('base', { active: true, disabled: false })).toBe('base active');
  });

  it('flattens nested arrays of class names', () => {
    expect(cn(['a', ['b', 'c']], 'd')).toBe('a b c d');
  });

  it('merges conflicting tailwind utilities, keeping the last one', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('merges tailwind classes while preserving non-conflicting ones', () => {
    expect(cn('p-2 text-red-500', 'p-4')).toBe('text-red-500 p-4');
  });

  it('returns an empty string when given no meaningful input', () => {
    expect(cn()).toBe('');
    expect(cn(false, null, undefined)).toBe('');
  });

  it('deduplicates conflicting responsive/variant utilities', () => {
    expect(cn('hover:bg-black', 'hover:bg-white')).toBe('hover:bg-white');
  });
});
