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
export class Badge {
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

/**
 * @class Button
 * @description Create a new Neptune Button
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * text -> content of your Button
 * 
 * icon -> add the i tagof your icon
 * 
 * iconPosition -> left or right
 * 
 * size -> s, m, l
 * 
 * style -> primary, cta, information, success, warning, error
 * 
 * @example
 * const myButton = new Button({
 *  parent: "#container",
 *  text: "My Button",
 *  size: "m",
 *  style: "primary"
 * });
 */
export class Button {
    constructor(config) {
        // Create Badge
        const newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.innerHTML = '<span class="button-text">' + config.text + '</span>';

        // Add Icon
        if (config.icon != null) {
            const newIcon = document.createElement('span');
            newIcon.innerHTML = config.icon;

            if (config.iconPosition != null) {
                if (config.iconPosition == 'left') {
                    newIcon.classList.add('button-icon-left');
                    newButton.insertBefore(newIcon, newButton.children[0]);

                }

                if (config.iconPosition == 'right') {
                    newIcon.classList.add('button-icon-right');
                    newButton.appendChild(newIcon);
            
                }
            } else {
                console.error("Error! Please set icon position!");
            }
        } 

        // Setup Size
        if (config.size != null) {
            newButton.classList.add('button-' + config.size);
        }

        // Setup Style
        if (config.style != null) {
            // Setup Style
            newButton.classList.add('button-' + config.style);
        }

        // Append badge to DOM
        if (config.parent != null) {
            document.querySelector(config.parent).appendChild(newButton)
        } else {
            document.body.appendChild(newButton);
        }
    }
}

