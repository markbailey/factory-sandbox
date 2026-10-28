import { err, ok, type Result } from '@core/result.ts';
import type { Settings } from './config/settings.ts';

export const greet = (name: string, settings: Settings): Result<string> =>
  name ? ok(`${settings.greeting}, ${name}!`) : err('no name');

export const hello = (name: string, sessionTtlSeconds: number): Result<string> =>
  greet(name, { sessionTtlSeconds, greeting: 'hello' });
