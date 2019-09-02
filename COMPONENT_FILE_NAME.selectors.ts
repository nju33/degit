interface Selector {
  (className?: string): string;
  (props: {theme: import('styled-components').ThemeProps<unknown>}): string;
}

interface CreateSelector {
  (selector: string): Selector;
}

const createSelector: CreateSelector = selector => (arg: unknown = '') => {
  if (typeof arg === 'object' && arg !== null && 'theme' in arg) {
    return `&.${selector}`;
  }

  if (typeof arg === 'string') {
    const className = arg;
    return `${className} ${selector}`;
  }

  throw new TypeError('invalid arguments');
};

export const atomic = createSelector('atomic');
