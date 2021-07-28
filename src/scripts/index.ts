const _properties = require('../../data/mock.json');
require("../css/index.css");

interface Properties {
    results: Property[];
    saved:   Property[];
}

interface Property {
    price:     string;
    agency:    Agency;
    id:        string;
    mainImage: string;
}

interface Agency {
    brandingColors: BrandingColors;
    logo:           string;
}

interface BrandingColors {
    primary: string;
}

const _propertiesJSON = JSON.parse(_properties) as Properties;
export const propertyResults:Property[] = _propertiesJSON.results;
export const propertySavedResults: Property[] = _propertiesJSON.saved;
let resultTemplate: String = '';
let savedTemplate: String = '';

// extract template using template literal
const loopOverTemplate = (elements: Property[], buttonLabel: string) => {
    let template: string = '';
    let completeTemplate: String = '';
    elements.forEach((elem) => {
        template = `
            <div>
                <section>
                    <img class="logo" src=${elem.agency.logo} alt="logo"/>
                    <span class="property__id">Property ID: ${elem.id}</span>
                </section>
                <section>
                    <img class="main__image" src=${elem.mainImage} alt="Property image"/>
                </section>
                <section>
                    <span class="price__text">Price: ${elem.price}</span>
                </section>
                <button type="button" role="button" data-id=${elem.id} data-text="${buttonLabel}">${buttonLabel}</button>
            </div>
        `;
        completeTemplate+= template;
    });
    return '<td>'+ completeTemplate + '</td>';
}

//this method will generate template for first time as well as when added or removed.
export const addOrRemoveProperty = (label?: string) => {
    //iterate over the json object and inject into HTML if the length is 1 or more than 1
    propertyResults.length > 0 ? resultTemplate = loopOverTemplate(propertyResults, 'Add property') : resultTemplate = '<td></td>';
    //iterate over the json object and inject into HTML if the length is 1 or more than 1
    propertySavedResults.length > 0 ? savedTemplate = loopOverTemplate(propertySavedResults, 'Remove property') : savedTemplate = '<td></td>';
    let parentHTMLNode:HTMLElement = document.querySelector('table > tbody');
    parentHTMLNode.innerHTML = '<tr>' + resultTemplate + savedTemplate + '</tr>';
    label ? buttonEventBinder(): '';
}

//Binding event to the buttons on page load as well when removing the property tile or adding it.

export const buttonEventBinder = () => {
    document.body.querySelectorAll("button").forEach((button)=> {
        button.addEventListener("click", (event:MouseEvent) => {
            const target:HTMLElement = event.target as HTMLElement;
            const selectedID = target.getAttribute('data-id');
            const buttonLabel = target.getAttribute('data-text');
            if(buttonLabel==='Add property') {
                propertySavedResults.push(propertyResults.splice(propertyResults.findIndex(function (property) {
                    return property.id === selectedID;
                }), 1)[0]);
            } else {
                propertyResults.push(propertySavedResults.splice(propertySavedResults.findIndex(function (property) {
                    return property.id === selectedID;
                }), 1)[0]);
            }
            addOrRemoveProperty('buttonEventClicked');
        });
    });
}


//On page load, below methods will trigger
window.onload = function() {
    addOrRemoveProperty();
    buttonEventBinder();
};
