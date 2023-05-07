/**
 *
 * @class
 * 
 * @name Neptune_DOMElement
 * 
 * @description Create a new HTML DOM element
 * 
 * @param {string} parentId - ID of the parent element
 * @param {string} elementType - Is it a **div** or a **span** 
 * @param {string} elementId - ID of the new DOM element
 * 
 * @example
 * ```
 * const myDiv = new Neptune_DOMElement("body", "div", "testid");
 * ```
 *  
 */
export default class Neptune_DOMElement {
    constructor(parentId, elementType, elementId) {
        this.parentId = parentId;
        this.elementType = elementType;
        this.elementId = elementId;

        this.create();
    }

    create() {
        // Create new element
        const newDOMElement = document.createElement(this.elementType);
        newDOMElement.id = this.elementId;

        // Append new element to parent element
        const parentElement = document.getElementById(this.parentId);
        parentElement.appendChild(newDOMElement);
    }
}

/**
 * 
 * @class
 * 
 * @name Neptune_Button
 * @description Create default button
 * 
 * @param {string} parentId - ID of parent element
 * @param {string} elementType - Type of element is always ** * button * **
 * @param {string} buttonName - Button title
 * @param {string} elementId - ID of the new button element
 * 
 * @example
 * const defaultButton = new Neptune_Button("body", "Default Button", "buttonID");
 * 
 */
export class Neptune_Button extends Neptune_DOMElement {
    constructor(parentId, elementType, buttonName, elementId) {
        super(parentId, elementType = 'button', 'Test 123', elementId);
        this.buttonName = buttonName;
        this.create();
    }

    create() {
        var newButton = new Neptune_DOMElement(this.parentId, "button", this.elementId);
        this.innerHTML = this.buttonName;
    }
}
