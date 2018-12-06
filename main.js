var canvas = document.getElementById("myCanvas");

if (localStorage.getItem("Drawing") != null) {
    var ctx = localStorage.getItem("Drawing");
    console.log("use saved")
} else {
    var ctx = canvas.getContext("2d");
}

var paint = false;
var paintSize = 20;
var paintColor = "black"

$("#clear").on("click", function () {

    ctx.clearRect(0, 0, 1300, 700);

})

$("#save").on("click", function () {

    localStorage.setItem("Drawing", ctx)
    console.log("saved")
})

$(canvas)
    .mousedown(function () {
        console.log("down")
        paint = true;
    })
    .mouseup(function () {
        console.log("up")
        paint = false;
    });

$(".colors>ul>li").on("click", function () {
    var el = $(this);

    paintColor = el.html()
    $(".colors>ul>li").removeClass("active")
    el.addClass("active")

    $(".colors>ul>li").css(
        "background", "none"
    )

    $(".colors>ul>li.active").css(
        "background", el.html()
    )

    if (el.html() == "white") {

        $(".colors>ul>li.active").css("color", "black")

    } else if (el.html() == "yellow") {
        $(".colors>ul>li.active").css("color", "black")
    }

    console.log(el.html())
});

$(".size>ul>li.sizePreset").on("click", function () {
    var el = $(this);
    paintSize = el.html();
    console.log(el.html());

    $(".size>ul>li").removeClass("active")
    el.addClass("active")

    $(".size>ul>li").css({
        "background": "none",
        "color": "black",
    })

    $(".size>ul>li.active").css({
        "background": "black",
        "color": "white",
    })


});

function changeSize() {
    if ($("#sizeInput").val() > 100) {
        paintSize = 100;
    } else {
        paintSize = $("#sizeInput").val();
    }
    console.log("change size");
    console.log(paintSize)

    $(".size>ul>li").css({
        "background": "none",
        "color": "black",
    })

}

document.addEventListener("mousemove", function (event) {

    var mouseX = event.clientX - 500;
    var mouseY = event.clientY - 10;

    document.getElementById('position').innerHTML = " x = " + mouseX + " | y = " + mouseY;
    document.getElementById('paint').innerHTML = "paint : " + paint;
    document.getElementById('size').innerHTML = "size : " + paintSize;
    document.getElementById('localStorage').innerHTML = "localstorage : " + localStorage.getItem("Drawing");

    if (paint == true) {
        console.log("down");
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, paintSize, 0, 2 * Math.PI);
        ctx.fillStyle = paintColor;
        ctx.fill();
    }    

})
