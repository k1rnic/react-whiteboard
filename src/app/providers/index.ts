import compose from 'compose-function';
import { ComponentType, FunctionComponent } from 'react';

import { withStore } from './with-store';
import { WithTheme, withTheme } from './with-theme';

type WithProviders = <T>(Component: ComponentType<T>) => FunctionComponent<WithTheme & T>;

export const withProviders: WithProviders = compose(withStore, withTheme);
