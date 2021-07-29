import {addOrRemoveProperty, propertyResults, propertySavedResults} from "./addRemoveProperty";
import {buttonEventBinder} from "../buttonEventBinder/buttonEventBinder";

test('use jsdom in this test file', () => {
    const element = document.createElement('body');
    expect(element).not.toBeNull();
});


describe('To check on button click the property list shuffles', ()=> {
    it('check whether on button click whether property shuffles from one column to another', () => {
        document.body.innerHTML = `<table><tbody><button type="button" role="button" data-id="1" data-text="Add property" style="display: block;">Add property</button></tbody></table>`;
        const button:HTMLElement = document.getElementsByTagName('button')[0];
        addOrRemoveProperty();
        buttonEventBinder();
        button.click();
        const propertyResultLength = propertyResults.length;
        expect(propertyResultLength).toEqual(2);
        const savedProperty = propertySavedResults.length;
        expect(savedProperty).toEqual(2);
    });
})