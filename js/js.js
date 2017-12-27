//ẩn ký tự
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000, function(){
            console.log("the paragraph is hidden");
        });
    });
    $("#show").click(function(){
        $("p").show(1000);
    });
//hide show có thể thay bằng toggle
    $("#hs").click(function(){
        $("p").toggle(1000);
    });
//màu nền khi rê chuột vào
    $(".12").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
//hiển thị màu
    $("#color").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(2000);
    });
//ẩn màu
    $("#hcolor").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(2000);
    });
//ẩn hiện màu
    $("#hsc").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(2000);
    });
//độ mờ
    $("#hsch").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });
//hoạt hình
    $("#flip").click(function(){
        $("#panel").slideToggle(4000);
    });
    $("#stop").click(function(){
        $("#panel").stop();
    });

    $("#hh").click(function(){
        var hhh = $("#hhh");
            hhh.animate({height: '300px', opacity: '0.4'}, "slow");
            hhh.animate({width: '300px', opacity: '0.8'}, "slow");
            hhh.animate({height: '100px', opacity: '0.4'}, "slow");
            hhh.animate({width: '100px', opacity: '0.8'}, "slow");
            hhh.animate({fontSize:"+=3px"},"slow");
    });
//kết hợp
    $("#ft").click(function(){
        $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    });
//thiết lập or trả lại nội dung
    $("#btn").click(function(){
        $(this).text("hello world");
    })
    $("#btn1").click(function(){
        alert("text: " + $("#text").text());
    });
    $("#btn2").click(function(){
        alert("html: " + $("#text").html());
    });
// trả về giá trị
    $("#btn3").click(function(){
        alert("value: " + $("#test").val());
    });
//nhận các giá trị thuộc tính
    $("#btn4").click(function(){
        alert($("#www").attr("href"));
    });
// gọi lại
    $("#btn7").click(function(){
        $("#test5").text(function(i, origText){
            return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
        });
    });

    $("#btn8").click(function(){
        $("#test6").html(function(i, origText){
            return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
        });
    });
// chèn phần tử cuối câu
    $("#bt").click(function(){
        $(".ot").append("<b>Appended text</b>")//prepend để thêm đầu câu
    });
    $("#bt1").click(function(){
        $(".ot1").append("<b>Appended text</b>")//chèn nội dung sau trc dùng befor after
    });
// xóa nội dung
    $("#bt2").click(function(){
        $(".ot2").remove();//empty để xóa phần tử con trong đó
    });
// thêm or bỏ các lớp
    $("#bt3").click(function(){
        $(".ot3, h5, h6").toggleClass("blue");
    });
// trả về màu sắc
    $("#bt4").click(function(){
        alert("Background color = " + $(".ot4").css("background-color"));
    // đổi màu
        $(".ot45").css({"background-color": "yellow", "font-size": "200%"});
    });
     $("#bt5").click(function(){
        var txt = "";
        txt += "Width of div: " + $(".ot5").width() + "</br>";
        txt += "Height of div: " + $(".ot5").height();
        $(".ot5").html(txt);
    });
// thêm chiều rộng
    $("#bt6").click(function(){
        $(".ot6").width(500).height(500);
    });
// cha mẹ
    $(".ot7").parent().css({"color": "red", "border": "2px solid red"});
// con cháu
    $(".descendants").children().css({"color": "red", "border": "2px solid red"});
// chị em
    $("h2").siblings().css({"color": "red", "border": "2px solid red"});
// lấy dữ liệu bên ngoài
    $("#bt8").click(function(){
        $(".ot8").load("JQuery/demo_test.txt");
    });
});
// // không use phím tắt $ thi loi
// $.noConflict();
// jQuery(document).ready(function(){
//     jQuery("button").click(function(){
//         jQuery("p").text("jQuery is still working!");
//     });
// });

// thêm phần tử mới
function appendText(){
    var txt1 = "<p>new comment</p>";//Create text with html
    var txt2 = $("<p></p>").text("new comment");//Create text with jquery
    var txt3 = document.createElement("p");// tạo mới thì đùng befor or after
    txt3.innerHTML = "new comment";//Create text with DOM
    $("body").append(txt1, txt2, txt3);//append new elements
}

