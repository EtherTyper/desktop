/** Is the app running in dev mode? */
declare const __DEV__: boolean

/** The OAuth client id the app should use */
declare const __OAUTH_CLIENT_ID__: string | undefined

/** The OAuth secret the app should use. */
declare const __OAUTH_SECRET__: string | undefined

/** Is the app being built to run on Darwin? */
declare const __DARWIN__: boolean

/** Is the app being built to run on Win32? */
declare const __WIN32__: boolean

/** The environment for which the release was created. */
declare const __RELEASE_ENV__: 'production' | 'beta' | 'test' | 'development'


// these changes should be pushed into the Electron declarations

declare namespace NodeJS {
  // tslint:disable-next-line:interface-name
  interface Process extends EventEmitter {
    on(event: 'uncaughtException', listener: (error: Error) => void): this
  }
}

declare namespace Electron {
  // tslint:disable-next-line:interface-name
  interface MenuItem {
    accelerator?: Electron.Accelerator
    submenu?: Electron.Menu
    role?: string
    type: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio'
  }

  // these methods have been marked with optional parameters, where we hadn't assumed this before
  // tslint:disable-next-line:interface-name
  interface App extends EventEmitter {
    makeSingleInstance(callback: (argv: string[], workingDirectory: string) => void): void

    on(event: 'open-url', listener: (event: Electron.Event, url: string) => void): this
  }
}
