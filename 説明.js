"use strict"

document.getElementById("js-button1").onclick = function()
{
    let pass = window.prompt('パスワードは？')

    if(pass === 'しょうた')
    {
        showElementAnimation();
    }
    else if(pass === "たもと")
    {
      alert('チャンネル登録よろしく')
      location.href = "https://www.youtube.com/channel/UCZeSPZXaTEE-ucFkwoQmZvw"
    }
    else if(pass === 'sin')
    {
        alert('シルバー雑魚すぎた裏闘技場')
    }
    else
    {
      alert('じゃーんねんでしたーー')
    }
}

function showElementAnimation() {

    var element = document.getElementsByClassName('js-animation');
    if(!element) return; // 要素がなかったら処理をキャンセル
    
    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if(scrollY + windowH < elemY) {
        // 上にスクロールして再度非表示にする場合はこちらを記述
        element[i].classList.remove('is-show');
      }
    }
  }



$(function()
{

  $('div').hide().fadeIn(1000)
  $('p').hide().fadeIn(2000)
})
