import {AppInitProvider} from './appInitProvider';
export function appInitProviderFactory(provider: AppInitProvider) {
  return () => provider.init();
}
