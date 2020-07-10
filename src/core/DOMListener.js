import {capitalize} from "@core/utils";

export class DOMListener {
    constructor($root, listeners = []) {
        if(!$root){
            throw new Error(`No root provider to DOMListener`)
        }
        this.$root = $root;
        this.listeners = listeners;
    }

    initDOMListener() {

        this.listeners.forEach(listener => {
            const method = getListenName(listener);
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDOMListener() {
        this.listeners.forEach(listener => {
            const method = getListenName(listener);
            this.$root.off(listener, this[method])
        })
    }
}

function getListenName(eventName) {
    return `on${capitalize(eventName)}`
}