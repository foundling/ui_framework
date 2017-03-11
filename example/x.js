const l = console.log;
const values = function(o) {
    return Object.keys(o).map(k => o[k]);
};


const defs = {
    directives: {
        'x-for': null
    }
};


function X(config) {

    // bind to root el
    this.$rootEl = document.getElementById(config.el);
    this.$data = config.data;

    // set up scopes for app
    this.appData = {
        data: config.data

    };

    //buildScope(this.$rootEl);
    const matching = scan(this.$rootEl);
    console.log(matching);

};

function scanTree(el) {

    const els = el.querySelectorAll('*');
    const frameworkNodes =  Array.prototype.filter.call(els, node => {
        const objs = Object.keys(node.attributes).filter(key => {
            return /x-/.test(node.attributes[key].name);
        });

        return objs.length;
    });

    return frameworkNodes;

}

function parse(stmt) {
    const tokens = stmt.split(' ');

    return {
        data: tokens.slice(-1)[0] 
    };
}

function buildScope(rootEl, appData) {

    const repeater = rootEl.querySelector('[x-for]');
    let stmt = parse(repeater.attributes[0].value.trim());
    return stmt;

};



