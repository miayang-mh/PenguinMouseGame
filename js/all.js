
//取出box陣列
// var boxs = document.querySelector(".box");
var boxs = document.querySelectorAll(".box");
var imgs = document.querySelectorAll(".img")
var imgs00 = document.querySelectorAll(".img-0")
console.log(boxs);
console.log(boxs[0]);


//取出數量(長度)
var boxsLen = boxs.length;
var imgsLen = imgs.length;
console.log(boxsLen);

var str = "";
//情況的內容(滾輪最底要用)
var situationC = document.querySelector(".situationContent");

//情況的字串
function situationContent(e) {
    // console.log(this); 
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.localName);
    // console.log(typeof e.target.className);

    if (e.target == boxs[0]) {
        console.log("藍色");
        var content = "<p>" + '被藍色攻擊' + "<p>"
        // str += content;        // console.log(str)        // situationC.innerHTML = str;
    }
    else if (e.target == boxs[1]) {
        console.log("黃色");
        var content = "<p>" + '被黃色攻擊' + "<p>"
    }
    else if (e.target == boxs[2]) {
        console.log("紅色");
        var content = "<p>" + '被紅色攻擊' + "<p>"
    }
    else if (e.target == boxs[3]) {
        console.log("綠色");
        var content = "<p>" + '被綠色攻擊' + "<p>"
    }
    else if (e.target == boxs[4]) {
        console.log("橘色");
        var content = "<p>" + '被橘色攻擊' + "<p>"
    }
    else if (e.target == boxs[5]) {
        console.log("黑色");
        var content = "<p>" + '被黑色攻擊' + "<p>"
    }
    else if (e.target == boxs[6]) {
        console.log("深綠色");
        var content = "<p>" + '被深綠色攻擊' + "<p>"
    }
    else if (e.target == boxs[7]) {
        console.log("紫色");
        var content = "<p>" + '被紫色攻擊' + "<p>"
    }
    else {
        console.log(i);
        console.log("沒事");
    }
    str += content;
    console.log(str) // 確認當下字串
    situationC.innerHTML = str;

    // 讓滾輪保持最底部
    situationC.scrollTop = situationC.scrollHeight;
}

//監聽滑鼠(被攻擊)
for (var i = 0; i < boxsLen; i++) {
    boxs[i].addEventListener("mouseenter", situationContent, false)
}

//監聽滑鼠(救企鵝)
for (let k = 0; k < imgsLen; k++) {
  imgs[k].addEventListener("click",
  
  function(e){      
      if (e.target == imgs[0]) {
          console.log("錢");
          console.log( e.target);

        //   e.target .setAttribute("style","display:none");
        //   imgs00[k].setAttribute("style","display:block");
        } 
      else if(e.target == imgs[1]){
        console.log("醉倒");
      }
      else if(e.target == imgs[2]){
        console.log("火");
      }
      else if(e.target == imgs[3]){
        console.log("國王");
      }
      else if(e.target == imgs[4]){
        console.log("疑問");
      }      
      else if(e.target == imgs[5]){
        console.log("酒");
      }
      
      else {
        console.log("無");
      }


      e.target .setAttribute("style","display:none");
      imgs00[k].setAttribute("style","display:block");

  }
  
  
  ,false)
}