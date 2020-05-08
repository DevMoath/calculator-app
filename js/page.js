export default class Page {

    constructor(calculator) {
        this.calculator       = calculator;
        this.operations_filed = document.getElementById('operations');
        this.operations       = [];
        this.operators        = [];
        this.result           = document.getElementById('result');
        this.delete           = document.getElementById('delete');
        this.clear            = document.getElementById('clear');
        this.list_button      = document.querySelectorAll('button');
        this.modal_content    = document.querySelector('modal_content');
        this.no_history       = document.getElementById('no_history');
    }

    eventListeners() {
        this.delete.addEventListener('click', () => {
            this.calculator.delete(this);
        });
        this.clear.addEventListener('click', event => {
            if (event.target.innerText === 'C') {
                this.calculator.clear(this);
            } else if (event.target.innerText === 'CA') {
                this.calculator.clearAll(this);
            }
        });
        this.list_button.forEach(item => {
            item.addEventListener('click', event => {
                if (event.target.dataset.type === 'number') {
                    this.calculator.number(this, event);
                    this.clear.innerText = 'C';
                } else if (event.target.dataset.type === 'operator') {
                    this.calculator.operator(this, event);
                }
            });
        });
    }
}
