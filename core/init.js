

//requests
import { isset, reloadIcons, url } from "./component_f.js";
import { hideCustomContextMenu, hideCustomContextMenuOnScroll } from "./components/base/contextMenu/contextMenu_f.js";
import { catchSubmit } from "./formsubmitter/formSubmitter.js";
import xhr from "./formsubmitter/xhr.js";
import { htmlToComponent } from "./htmlToComponent.js";
import { connectPicCropper } from "./requests/picCropper.js";
import { Require } from "./require.js";
import { vRouter } from "./routes/router.js";
import ui from "./ui.js";

let Dom = new ui;



document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') {
        let page = document.querySelector(".page");
        htmlToComponent(page);
        fadeBody()
        Require();

        page.replaceWith(Dom.createElementFromStructure(htmlToComponent(page)));
        hideCustomContextMenu();
        hideCustomContextMenuOnScroll()
        //
        hideCustomContextMenu();
        catchSubmit();
        connectPicCropper();
        vRouter.goToCurrent();
        lucide.createIcons();


    }
})


document.addEventListener("content_loaded", (e) => {
    catchSubmit();
    reloadIcons();
    connectPicCropper();
})
document.addEventListener("route", (e) => {
    // alert()
    // console.log(e.detail)
    vRouter.searchedLink = e.detail;
    vRouter.route()
})

function fadeBody() {
    let opacity = 0
    var fade = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            document.querySelector("body").style.opacity = opacity;
        }

    }, 10);
}



