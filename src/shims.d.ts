/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

declare module '*.vue' {
	import Vue from 'vue'
	export default Vue
}

declare module '*.svg?raw' {
	const content: string
	export default content
}
