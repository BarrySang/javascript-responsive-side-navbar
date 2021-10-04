// global variables
let body = document.body;
let sNavIcons = document.getElementsByClassName('s-nav-icon');
let iconsArray = Array.prototype.slice.call(sNavIcons);

// class for toggling title visibility
class ToggleTitle {
    constructor(icon) {
        this.icon = icon;
        this.title = this.getTitle();
        this.workingClass = 'hidden-title';
    }

    // get title for current active icon
    getTitle() {
        return this.icon.parentElement.childNodes[3];
    }

    // show title for current active icon
    showTitle() {
        this.title.classList.remove(this.workingClass);
    }

    // remove title from current active icon
    removeTitle() {
        this.title.classList.add(this.workingClass);
    }
}

// add event listener for mouseenter on svg icons
iconsArray.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        
        let toggleTitle = new ToggleTitle(icon);
        toggleTitle.showTitle();
        // showTitle(icon);
    });
});

// add event listener for mouseleave on svg icons
iconsArray.forEach(icon => {
    icon.addEventListener('mouseleave', () => {
        async function getObject(icon) {
            let toggleTitle = await new ToggleTitle(icon);
            return toggleTitle;
        }

        setTimeout(function () {
            getObject(icon).then(toggleTitle => {
                toggleTitle.removeTitle();
            });
        }, 1000);
    });
});