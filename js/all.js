
//取出box陣列
// var boxs = document.querySelector(".box");
var boxs = document.querySelectorAll(".box");
var imgs = document.querySelectorAll(".img")
var imgs00 = document.querySelectorAll(".img-0")
var cover = document.querySelector(".cover");

//取出數量(長度)
var boxsLen = boxs.length;
var imgsLen = imgs.length;

//情況用
var str = "";
//情況的內容(滾輪最底要用)
var situationC = document.querySelector(".situationContent");
//重新遊戲鈕
var startBotton = document.querySelector(".startBotton");
//救出數量
var numberPenguin = 0;


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

//更新畫面
function update(e) {
  //救出的企鵝消失
  for (let i = 0; i < imgs00.length; i++) {
    imgs00[i].setAttribute("style", "display:none");
  }
  //未救的企鵝出現
  for (let k = 0; k < imgs.length; k++) {
    imgs[k].setAttribute("style", "display:block");
  }
  //情況欄清空、已救數量歸零
  situationC.innerHTML = "<p>準備營救</p>";
  str = "";
  numberPenguin = 0;

  //企鵝位置亂數();
  penguinPostion();
  //攻擊位置亂數();
  attackPenguin();
  //取消end畫面
  cover.style.display = 'none';  
}

//企鵝位置亂數function
function penguinPostion() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.left = (parseInt(Math.random() * 1000) % 700).toString() + 'px';
    imgs[i].style.top = (parseInt(Math.random() * 1000) % 400).toString() + 'px';
  }
}

//攻擊位置亂數function
function attackPenguin() {
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].style.left = (parseInt(Math.random() * 1000) % 700).toString() + 'px';
    boxs[i].style.top = (parseInt(Math.random() * 1000) % 400).toString() + 'px';
  }
}

//監聽滑鼠(被撞到受攻擊)
for (var i = 0; i < boxsLen; i++) {
  boxs[i].addEventListener("mouseenter", situationContent, false)
}

//監聽滑鼠(救企鵝function)
for (let i = 0; i < imgsLen; i++) {
  imgs[i].addEventListener("click", function (e) {
    //企鵝被救後到下面
    e.target.setAttribute("style", "display:none");
    imgs00[i].setAttribute("style", "display:block");
    // //企鵝位置亂數();
    penguinPostion();
    // //攻擊位置亂數();
    attackPenguin();
    //救的數量
    numberPenguin += 1;
    if (numberPenguin == 6) {
      //延遲0.5秒
      setTimeout(function () {        
        cover.style.display = 'block';
        cover.textContent = '遊戲結束'; 
      }, 500);
    }
  }, false)
}

//監聽 "重新遊戲按鈕"
startBotton.addEventListener('click', update, false);