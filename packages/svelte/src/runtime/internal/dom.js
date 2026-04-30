/** @returns {void} */
export function append(target, node) {
	target.appendChild(node);
}

/** @returns {void} */
export function append_styles(target, style_sheet_id, styles) {
	const append_styles_to = get_root_for_style(target);
	if (!append_styles_to.getElementById(style_sheet_id)) {
		const style = element('style');
		style.id = style_sheet_id;
		style.textContent = styles;
		append_stylesheet(append_styles_to, style);
	}
}

/** @returns {Document | ShadowRoot} */
export function get_root_for_style(node) {
	if (!node) return document;
	const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
	if (root && /** @type {ShadowRoot} */ (root).host) {
		return /** @type {ShadowRoot} */ (root);
	}
	return node.ownerDocument;
}

/** @returns {void} */
export function append_stylesheet(node, style) {
	append(/** @type {Document} */ (node).head || node, style);
}

/** @returns {void} */
export function insert(target, node, anchor) {
	target.insertBefore(node, anchor || null);
}

/** @returns {void} */
export function detach(node) {
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
}

/** @returns {void} */
export function destroy_each(iterations, detaching) {
	for (let i = 0; i < iterations.length; i += 1) {
		if (iterations[i]) iterations[i].d(detaching);
	}
}

/** @returns {Element | SVGElement} */
export function element(name) {
	return document.createElement(name);
}

/** @returns {Element | SVGElement} */
export function element_is(name, is) {
	return document.createElement(name, { is });
}

/** @returns {SVGElement} */
export function svg_element(name) {
	return document.createElementNS('http://www.w3.org/2000/svg', name);
}

/** @returns {Text} */
export function text(data) {
	return document.createTextNode(data);
}

/** @returns {Text} */
export function space() {
	return text(' ');
}

/** @returns {Text} */
export function empty() {
	return text('');
}

/** @returns {Comment} */
export function comment(data) {
	return document.createComment(data);
}

/**
 * @param {EventTarget} node
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} handler
 * @param {boolean | AddEventListenerOptions | EventListenerOptions} [options]
 * @returns {() => void}
 */
export function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}

/** @returns {void} */
export function prevent_default(fn) {
	return function (event) {
		event.preventDefault();
		// @ts-ignore
		return fn.call(this, event);
	};
}

/** @returns {void} */
export function stop_propagation(fn) {
	return function (event) {
		event.stopPropagation();
		// @ts-ignore
		return fn.call(this, event);
	};
}

/** @returns {void} */
export function attr(node, attribute, value) {
	if (value == null) {
		node.removeAttribute(attribute);
	} else if (node.getAttribute(attribute) !== value) {
		node.setAttribute(attribute, value);
	}
}

/**
 * List of attributes that should always be set via the DOM property
 * rather than setAttribute.
 */
const always_set_through_set_attribute = ['width', 'height'];

/** @returns {void} */
export function set_attributes(node, attributes) {
	// @ts-ignore
	const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
	for (const key in attributes) {
		if (attributes[key] == null) {
			node.removeAttribute(key);
		} else if (key === 'style') {
			node.style.cssText = attributes[key];
		} else if (key === '__value') {
			// @ts-ignore
			node.value = node[key] = attributes[key];
		} else if (
			descriptors[key] &&
			descriptors[key].set &&
			always_set_through_set_attribute.indexOf(key) === -1
		) {
			// @ts-ignore
			node[key] = attributes[key];
		} else {
			attr(node, key, attributes[key]);
		}
	}
}
