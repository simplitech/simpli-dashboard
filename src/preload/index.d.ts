import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    env: {
      GRAPHQL_ENDPOINT: string
    }
  }

  declare namespace svelteHTML {
    interface HTMLAttributes<T> {
      'on:click_outside'?: CompositionEventHandler<T>
    }
  }
}
