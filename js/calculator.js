export default class Calculator {

    clear(page) {
        page.clear.innerText  = 'CA';
        page.result.innerText = '';
    }

    clearAll(page) {
        page.operations                 = [];
        page.operators                  = [];
        page.operations_filed.innerText = '';
    }

    delete(page) {
        page.result.innerText = page.result.innerText.substr(0, page.result.innerText.length - 1)
    }

    number(page, event) {
        if (page.result.innerText.length < 9) {
            if (page.result.innerText.includes('.') && event.target.innerText === '.') {
                // Do Nothing ...
            } else {
                page.result.innerText += event.target.innerText;
            }
        }
    }

    /*
     * Number:
     *      1. Add it to result filed.
     * Operator:
     *      1. @if Operation[] length = 0:
     *          1. Add numbers to operations[]
     *          2. Add operator to operators[]
     *      2. @elseif operations[] length > 0:
     *          1. Add numbers to operations[]
     *          2. Add operator to operators[]
     *          3. Start calculate
     *      3. @elseif operator is =:
     *          1. @if operations[] length > 0:
     *              1. Start calculate
     */
    operator(page, event) {
        if (page.result.innerText !== '') {
            if (page.operations.length === 0) {
                page.operations.push(parseFloat(page.result.innerText));
                page.operators.push(event.target.innerText);
                page.operations_filed.innerText = page.result.innerText + event.target.innerText;
                page.result.innerText = '';
            } else if (page.operations.length > 0) {
                page.operations.push(parseFloat(page.result.innerText));
                page.operators.push(event.target.innerText);
                page.operations_filed.innerText += page.result.innerText + event.target.innerText;
                page.result.innerText = '';
                this.calculate(page);
            } else if (event.target.innerText === '=') {
                // this.calculate(page);
            }
        }
    }

    calculate(page) {
        if (page.operations.length === 0 || page.operators.length === 0) {
            return false;
        }
        for (let i = 0; i < page.operations.length; i++) {

        }
        page.result.innerText = '';
    }
}
