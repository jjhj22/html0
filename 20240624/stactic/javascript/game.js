//game.js


function timeStart(){
    setInterval(function(){
        time++;
        $("#step").text(`${time}초`);
    },1000);
}
function inClick(){
    var idx= $(".item").index($(this));  //몇번째 div 클릭했냐? 인덱스
    var clickIng=$(".item").eq(idx).find("img"); //클릭한 div의 img태그

    //클릭한 이미지 화면에 표시
    $clickImg.removeClass("hide");
    $clickIng.addClass("select");
}