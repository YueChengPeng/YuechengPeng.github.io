function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element == "about") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else {
        var offset = element.offsetTop - document.getElementById('header').offsetHeight - 48;
        console.log(offset);
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
}