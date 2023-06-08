/**
 * @class Spinner
 * @description Create a new Neptune Spinner
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * style -> primary, accent, information, success, warning, error
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
class Spinner {
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

export default Spinner;