/* eslint-disable spaced-comment */
/// <reference types="react-scripts" />

declare namespace NodeJS {
	export interface ProcessEnv {
		REACT_APP_ALGOLIA_API_KEY_SEARCH: string
		REACT_APP_ALGOLIA_APP_ID: string
		REACT_APP_HONEYBADGER_API_KEY: string
		REACT_APP_SENTRY_DSN: string
		REACT_APP_RAYGUN_APM: string
		REACT_APP_LOGSEENE_JS: string
		REACT_APP_SENTRY_PROJECT: string
	}
}
