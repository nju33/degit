interface Selector {
  <T extends string>(
    className: import('react').HTMLAttributes<unknown>['className'],
  ): T;
  <T extends string>(props: {
    theme: import('styled-components').ThemeProps<unknown>;
  }): T;
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

  if (arg === undefined) {
    return arg;
  }

  throw new TypeError('invalid arguments');
};

export const atomic = createSelector('atomic');
