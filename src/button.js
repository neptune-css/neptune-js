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
 * icon -> add the i tag of your icon
 * 
 * iconPosition -> left or right
 * 
 * size -> s, m, l
 * 
 * style -> primary, secondary, cta, information, success, warning, error
 * 
 * @example
 * const myButton = new Button({
 *  parent: "#container",
 *  text: "My Button",
 *  size: "m",
 *  style: "primary"
 * });
 */
class Button {
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

export default Button;