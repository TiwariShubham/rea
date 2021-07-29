
//this method will generate template for first time as well as when added or removed.
import {loopOverTemplate} from "../templateRenderer/templateRender";
import * as _properties from "../../../../data/mock.json";
import {Properties} from "../../interfaces/Properties";
import {Property} from "../../interfaces/Property";
import {buttonEventBinder} from "../buttonEventBinder/buttonEventBinder";
const _propertiesJSON = JSON.parse(_properties) as Properties;
export const propertyResults:Property[] = _propertiesJSON.results;
export const propertySavedResults: Property[] = _propertiesJSON.saved;
export let resultTemplate: String = '';
export let savedTemplate: String = '';

export const addOrRemoveProperty = (label?: string) => {
    //iterate over the json object and inject into HTML if the length is 1 or more than 1
    propertyResults.length > 0 ? resultTemplate = loopOverTemplate(propertyResults, 'Add property') : resultTemplate = '<td></td>';
    //iterate over the json object and inject into HTML if the length is 1 or more than 1
    propertySavedResults.length > 0 ? savedTemplate = loopOverTemplate(propertySavedResults, 'Remove property') : savedTemplate = '<td></td>';
    let parentHTMLNode:HTMLElement = document.querySelector('table > tbody');
    parentHTMLNode.innerHTML = '<tr>' + resultTemplate + savedTemplate + '</tr>';
    label ? buttonEventBinder(): '';
}