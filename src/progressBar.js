/**
 * @class ProgressBar
 * @description Create a new Neptune Progress Bar
 * 
 * @param {any} config Add your configuration
 * 
 * parent -> class or id of your target element, when null its document.body
 * 
 * size -> xs, s, m, l, xl
 * 
 * style -> primary, accent, information, success, warning, error
 * 
 * progress -> set the progress of the par width a number
 * 
 * @example
 * const myProgressBAr = new ProgressBar({
 *  size: "l",
 *  style: "primary",
 *  progress: 30
 * });
 */
class ProgressBar {
    constructor(config) {
        // Create Progress Bar
        const newProgressBar = document.createElement('div');
        newProgressBar.classList.add('progress');

        // Create Bar
        const newBar = document.createElement('div');
        newBar.classList.add('progress-bar');
        newProgressBar.appendChild(newBar);

        // Setup Size
        if (config.size != null) {
            newProgressBar.classList.add('progress-' + config.size);
        }

        // Setup Style
        if (config.style != null) {
            newProgressBar.classList.add('progress-' + config.style);
        }

        // Handle Progress
        if (config.progress != null) {
            newBar.style.width = config.progress + '%';
        }

        // Append to parent element
        if (config.parent != null) {
            document.querySelector(config.parent).appendChild(newProgressBar);
        } else {
            document.body.appendChild(newProgressBar);
        }
    }
}

export default ProgressBar;