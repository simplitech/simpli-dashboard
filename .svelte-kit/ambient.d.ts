
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const ANDROID_HOME: string;
	export const ANDROID_SDK_ROOT: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const ChocolateyToolsLocation: string;
	export const CMDER_ROOT: string;
	export const COLORTERM: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const ConEmuDir: string;
	export const DEBUG_COLORS: string;
	export const DriverData: string;
	export const FORCE_COLOR: string;
	export const FPS_BROWSER_APP_PROFILE_STRING: string;
	export const FPS_BROWSER_USER_PROFILE_STRING: string;
	export const GIT_ROOT: string;
	export const GOPATH: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const IDEA_INITIAL_DIRECTORY: string;
	export const INIT_CWD: string;
	export const JAVA_HOME: string;
	export const KEYSTORE_ALIAS: string;
	export const KEYSTORE_PASSWORD: string;
	export const KEYSTORE_PATH: string;
	export const KEY_PASSWORD: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MOCHA_COLORS: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_PATH: string;
	export const npm_command: string;
	export const npm_config_color: string;
	export const npm_config_engine_strict: string;
	export const npm_config_node_gyp: string;
	export const npm_config_python: string;
	export const npm_config_registry: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_debug_env_VITE_DEV_SERVER_URL: string;
	export const npm_package_dependencies_axios: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_devDependencies_electron: string;
	export const npm_package_devDependencies_electron_builder: string;
	export const npm_package_devDependencies_electron_context_menu: string;
	export const npm_package_devDependencies_electron_reload: string;
	export const npm_package_devDependencies_electron_reloader: string;
	export const npm_package_devDependencies_electron_serve: string;
	export const npm_package_devDependencies_electron_updater: string;
	export const npm_package_devDependencies_electron_window_state: string;
	export const npm_package_devDependencies_eslint: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte3: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const npm_package_devDependencies_husky: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies_vite_plugin_electron: string;
	export const npm_package_devDependencies_vite_plugin_electron_renderer: string;
	export const npm_package_devDependencies__el3um4s_to_try: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const npm_package_name: string;
	export const npm_package_private: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_check: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_scripts_deploy: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_lint: string;
	export const npm_package_scripts_predeploy: string;
	export const npm_package_scripts_prepare: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_scripts_start: string;
	export const npm_package_type: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const OneDrive: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const PyCharm: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VS160COMCOMNTOOLS: string;
	export const WebStorm: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		ANDROID_HOME: string;
		ANDROID_SDK_ROOT: string;
		APPDATA: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		ChocolateyToolsLocation: string;
		CMDER_ROOT: string;
		COLORTERM: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		ConEmuDir: string;
		DEBUG_COLORS: string;
		DriverData: string;
		FORCE_COLOR: string;
		FPS_BROWSER_APP_PROFILE_STRING: string;
		FPS_BROWSER_USER_PROFILE_STRING: string;
		GIT_ROOT: string;
		GOPATH: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		IDEA_INITIAL_DIRECTORY: string;
		INIT_CWD: string;
		JAVA_HOME: string;
		KEYSTORE_ALIAS: string;
		KEYSTORE_PASSWORD: string;
		KEYSTORE_PATH: string;
		KEY_PASSWORD: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MOCHA_COLORS: string;
		NODE: string;
		NODE_ENV: string;
		NODE_PATH: string;
		npm_command: string;
		npm_config_color: string;
		npm_config_engine_strict: string;
		npm_config_node_gyp: string;
		npm_config_python: string;
		npm_config_registry: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_debug_env_VITE_DEV_SERVER_URL: string;
		npm_package_dependencies_axios: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_devDependencies_electron: string;
		npm_package_devDependencies_electron_builder: string;
		npm_package_devDependencies_electron_context_menu: string;
		npm_package_devDependencies_electron_reload: string;
		npm_package_devDependencies_electron_reloader: string;
		npm_package_devDependencies_electron_serve: string;
		npm_package_devDependencies_electron_updater: string;
		npm_package_devDependencies_electron_window_state: string;
		npm_package_devDependencies_eslint: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte3: string;
		npm_package_devDependencies_gh_pages: string;
		npm_package_devDependencies_husky: string;
		npm_package_devDependencies_postcss: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies_vite_plugin_electron: string;
		npm_package_devDependencies_vite_plugin_electron_renderer: string;
		npm_package_devDependencies__el3um4s_to_try: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		npm_package_name: string;
		npm_package_private: string;
		npm_package_scripts_build: string;
		npm_package_scripts_check: string;
		npm_package_scripts_check_watch: string;
		npm_package_scripts_deploy: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_format: string;
		npm_package_scripts_lint: string;
		npm_package_scripts_predeploy: string;
		npm_package_scripts_prepare: string;
		npm_package_scripts_preview: string;
		npm_package_scripts_start: string;
		npm_package_type: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		OneDrive: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		PyCharm: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VS160COMCOMNTOOLS: string;
		WebStorm: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
