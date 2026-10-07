export const pressableScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

export const revealUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export const revealScale = {
  initial: { opacity: 0, scale: 0.97 },
  whileInView: { opacity: 1, scale: 1 },
};

export const revealFromLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
};

export const revealFromRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
};

export const viewportOnce = { once: true };
export const viewportOnceEarly = { once: true, margin: "-100px" };
