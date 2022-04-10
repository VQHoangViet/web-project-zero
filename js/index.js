// region HEADER FOOTER
$(document).ready(function () {
    $('#nav').load('../components/nav.html')
    $('#footer').load('../components/footer.html')
    $.get('../components/import.html', function(import_string) {
        $('head').append(import_string)
    })
    scroll(0, 0)
})

// endregion