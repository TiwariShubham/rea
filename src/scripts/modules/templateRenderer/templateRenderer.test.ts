import * as _propertyResults from '../../../../data/mock.json';
const propertyResultsJSON = JSON.parse(_propertyResults);

describe('To check on page load whether JSON loads or not', () => {
    it('check for property result has any content', () => {
        expect(propertyResultsJSON.results.length>0).toBe(true);
    });
    it('check for saved result has any content', () => {
        expect(propertyResultsJSON.saved.length>0).toBe(true);
    });
});