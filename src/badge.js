/**
 * @class Badge
 * @description Create a new Neptune Badge
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * text -> content of your badge
 * 
 * size -> s, m, l
 * 
 * style -> primary, accent, information, success, warning, error
 * 
 * @example
 * const myBadge = new Badge({
 *  parent: "#container",
 *  text: "My Badge",
 *  size: "m",
 *  style: "primary"
 * });
 * 
 */
class Badge {
    constructor(config) {
        // Create Badge
        const newBadge = document.createElement('span');
        newBadge.classList.add('badge');
        newBadge.innerText = config.text;

        // Setup Size
        if (config.size != null) {
            newBadge.classList.add('badge-' + config.size);
        }

        // Setup Style
        if (config.style != null) {
            // Setup Style
            newBadge.classList.add('badge-' + config.style);
        }

        // Append badge to DOM
        if (config.parent != null) {
            document.querySelector(config.parent).appendChild(newBadge)
        } else {
            document.body.appendChild(newBadge);
        }
    }
}

export default Badge;