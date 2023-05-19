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
 * style -> primary, cta, information, success, warning, error
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
export class Link {
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

/**
 * @class Spinner
 * @description Create a new Neptune Spinner
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * style -> primary, cta, information, success, warning, error
 * 
 * animation -> linnear, eased
 * 
 * @example
 * const mySpinner = new Spinner({
 *  parent: "#container",
 *  style: "primary",
 *  animation: "eased"
 * });
 */
export class Spinner {
    constructor(config) {
        // Create Link
        const newSpinner = document.createElement('div');
        const spinnerInner = document.createElement('div')
        const spinnerHole = document.createElement('div')
        newSpinner.classList.add('spinner');

        spinnerInner.classList.add('spinner-inner');
        spinnerHole.classList.add('spinner-hole');

        newSpinner.appendChild(spinnerHole);
        newSpinner.appendChild(spinnerInner);

        // Setup Style
        if (config.style != null) {
            newSpinner.classList.add('spinner-' + config.style);
        }

        // Setup Animation
        if (config.animation != null) {
            newSpinner.classList.add('spin-' + config.animation)
        }

        // Append to parent element
        if (config.parent != null) {
            document.querySelector(config.parent).appendChild(newSpinner);
        } else {
            document.body.appendChild(newSpinner);
        }
    }
}