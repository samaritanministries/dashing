let ModalTemplate = require('../templates/template_5.ejs')

export default class extends Backbone.View {
    initialize() {
    }
    modalSize(){
        return 'modal'
    }
    render() {
        this.$el.html(ModalTemplate());
        return this;
    }
}