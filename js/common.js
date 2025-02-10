$(document).ready((function () {
    $.get("https://downloadtiktok.auto.io.vn/header.html", (function (data, status) {
        console.log(data), $("#masthead").html(data)
    }
    )),
        $.get("https://downloadtiktok.auto.io.vn/header.htmlfooter.html",
            (function (data, status) {
                console.log(data),
                $("#contact-us").html(data)
            })
        )
}));
