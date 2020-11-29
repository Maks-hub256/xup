
$(document).ready(function() {
    $(".questions__info").slideUp()
})


function slide(clickElem, slideElem, sectionElem, optionElem) {
    $(`.${clickElem}`).on('click', function() {
        $(`.${slideElem}`).slideToggle(300)
        $(`.${sectionElem}`).toggleClass("section-active")
        $(`.${optionElem}`).toggleClass("option-active")
    })
}

slide("line-1", "info-1", "section-1", "option-1")
slide("line-2", "info-2", "section-2", "option-2")
slide("line-3", "info-3", "section-3", "option-3")
slide("line-4", "info-4", "section-4", "option-4")
slide("line-5", "info-5", "section-5", "option-5")
slide("line-6", "info-6", "section-6", "option-6")


