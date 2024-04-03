import { isset, loadContent } from "../component_f.js";
import { Store } from "../storage/store.js";
import { routes } from "./routes.js";

class router {
    #searchedLink;
    #currentRoute;
    #foundedRoute;
    constructor() {

    }
    get searchedLink() {
        return this.#searchedLink;
    }
    set searchedLink(searchedLink) {
        this.#searchedLink = searchedLink;
    }
    get currentRoute() {
        return this.#currentRoute;
    }
    set currentRoute(route) {
        this.#currentRoute = route;
    }
    get foundedRoute() {
        return this.#foundedRoute;
    }
    set foundedRoute(route) {
        this.#foundedRoute = route;
    }
    goToCurrent() {
        Store.defineActiveStorage('sess');
        let current = Store.get('currentRoute', true)
        if (current) {
            this.searchedLink = { url: current.name, box: current.box };
            this.findAndRoute(routes, this.searchedLink, true)
        }
    }
    findAndRoute(routesArray = routes, searched, current = false) {
        routesArray.forEach(route => {
            if (route.name == searched.url || route.path == searched.url) {
                this.foundedRoute = route;
                if (!current) {
                    Store.defineActiveStorage('sess');
                    let routeString = `{ "name": "${route.name}", "path": "${route.path}","box":"${searched.box}" }`;
                    // 
                    if (Store.get('currentRoute') != routeString) {
                        Store.set('currentRoute', routeString);
                    }
                }
                this.manageRoute(route)

                return
            } else {
                if (route.children) {
                    this.findAndRoute(route.children, searched, callBaclWhenFounded)
                }
            }
        })
    }
    /**
     * 
     * @param {*} routesArray 
     * @param {*} link 
     */
    route(routesArray = routes) {
        this.findAndRoute(routes, this.searchedLink);
    }
    /**
     * 
     * @param {*} route 
     */
    manageRoute(route) {
        if (route.beforeEnter) {
            route.beforeEnter()
        }
        loadContent({ url: route.path, box: this.searchedLink.box });
    }

}
export let vRouter = new router();