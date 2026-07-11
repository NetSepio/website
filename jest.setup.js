import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver, which framer-motion's
// `whileInView` and react-intersection-observer both rely on.
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

global.IntersectionObserver = MockIntersectionObserver;
window.IntersectionObserver = MockIntersectionObserver;

// jsdom does not implement matchMedia, used by some animation utilities.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
