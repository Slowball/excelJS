export class DOMListener {
    constructor($root, listeners = []) {
        if(!$root){
            throw new Error(`No root provider to DOMListener`)
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListener() {

    }

    removeDOMListener() {

    }
}