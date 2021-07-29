// extract template using template literal
import {Property} from "../../interfaces/Property";

export const loopOverTemplate = (elements: Property[], buttonLabel: string) => {
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