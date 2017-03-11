function Component(config) { 

    if (!config.id) throw new Error('A unique element identifier is needed to mount a component');

    return {

        _id: config.id,
        $el: null,
        $props: config.props || [],

    };

}

Component.prototype.mount = function() {

    this.$el = document.getElementById(this._id); 

};

Component = Eli;

export default Eli;
