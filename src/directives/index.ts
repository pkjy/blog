/**
 * Configure and register global directives
 */
 import type { App } from 'vue';
 import { setupLoadingDirective } from './waves';
 import { setupDownloadDirective } from './download'

 export function setupGlobDirectives(app: App) {
   setupLoadingDirective(app);
   setupDownloadDirective(app)
 }