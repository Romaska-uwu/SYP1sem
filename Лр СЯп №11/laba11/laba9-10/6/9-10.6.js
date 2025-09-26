// Select nav element
const $nav = $('#nav');

// Add mouseover handler
$nav.mouseover(handleMouseover);

// Add global mouseover handler
$(document).mouseover(handleOutsideClick);

function handleMouseover(e) {

// Get target element
    const $target = $(e.target);

// Check if menu item
    if($target.hasClass('menu-item')) {
// Get submenu
        const $submenu = $target.find('.submenu');

// Close any open menus
        closeMenus();

// Show submenu
        $submenu.show();
    }

}

function handleOutsideClick(e) {

// Check if target is menu or submenu
    if(!$(e.target).is('.menu-item, .submenu')) {
        closeMenus();
    }

}

function closeMenus(){

// Hide all submenus
    $('.submenu').hide();

}