
//Binding event to the buttons on page load as well when removing the property tile or adding it.
import {addOrRemoveProperty, propertyResults, propertySavedResults} from "../addRemoveProperty/addRemoveProperty";

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