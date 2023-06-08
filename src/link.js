/**
 * @class Link
 * @description Create a new Neptune Link
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * text -> content of your Link
 * 
 * size -> s, m, l
 * 
 * style -> primary, accent, information, success, warning, error
 * 
 * title -> add the title
 * 
 * href -> add the href
 * 
 * @example
 * const myLink = new Link({
 *  parent: "#container",
 *  text: "My Link",
 *  size: "m",
 *  style: "primary",
 *  title: "My Link",
 *  href: "https://de.wikipedia.org/"
 * });
 */
class Link {
    constructor(config) {
        // Create Link
        const newLink = document.createElement('a');
        newLink.classList.add('link');
        newLink.innerText = config.text;

        // Setup Size
        if (config.size != null) {
            newLink.classList.add('link-' + config.size);
        }

        // Setup Style
        if (config.style != null) {
            newLink.classList.add('link-' + config.style);
        }

        // Setup title
        if (config.title != null) {
            newLink.title = config.title;
        }

        // Setup href
        if (config.href != null) {
            newLink.href = config.href;
        }

        // Append to parent element
        if (config.parent != null) {
            document.querySelector(config.parent).appendChild(newLink);
        } else {
            document.body.appendChild(newLink);
        }
    }
}

export default Link;