/**
 * Svelte runtime - main entry point
 * Exports core Svelte functionality for component lifecycle, reactivity, and stores
 */

export {
	SvelteComponent,
	SvelteComponentTyped,
	createEventDispatcher,
	beforeUpdate,
	afterUpdate,
	onMount,
	onDestroy,
	tick,
	setContext,
	getContext,
	hasContext,
	getAllContexts,
	init,
	clean_css,
	noop,
	safe_not_equal,
	subscribe,
	run_all,
	is_function
} from './runtime/index.js';

export {
	readable,
	writable,
	derived,
	get
} from './store/index.js';

export {
	tweened
} from './motion/tweened.js';

export {
	spring
} from './motion/spring.js';

export {
	crossfade,
	fade,
	fly,
	slide,
	scale,
	draw,
	blur
} from './transition/index.js';
