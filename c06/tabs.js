const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');


tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel)
});

let tabFocus = 0;

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    //     tabs[tabFocus].setAttribute("tabindex", -1);
    // }

    if (e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        tabFocus++;
        if (tabFocus >= tabs.length) {
            tabFocus = 0;
        }
    } else if (e.keyCode === keydownLeft) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        tabFocus--;
        if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
        }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");


    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    // change active underline
    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", "true")

    // Change picture
    hideContent(mainContainer, 'picture');
    showContent(mainContainer, targetImage);

    // change article
    hideContent(mainContainer, 'article');
    showContent(mainContainer, targetPanel)
}

function hideContent(parent, content) {
    parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute('hidden', 'true'));
}

function showContent(parent, targetId) {
    parent
        .querySelector([`#${targetId}`])
        .removeAttribute('hidden');
}