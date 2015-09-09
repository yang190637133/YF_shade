# YF_shade

遮罩层控件

页面引入 jowto-mask-layer.js

demo

------------------------------------------------------------------------

添加遮罩层

$(divId).jowtoLayer({<br>
      z_index:999,<br>
      opacity:'.7',<br>
      color:'#EF7416',<br>
      callback:function(){<br>
            console.dir('加载弹出层');<br>
      }<br>
});<br>

$(divId).jowtoLayer({<br>
      z_index:999,<br>
      opacity:'.7',<br>
      context:{<br>
            width:'18%',<br>
            height:'40%',<br>
            top:'125px',<br>
            family:'microsoft yahei',<br>
            size:'16px',<br>
            color:'#fff',<br>
            text:jow_html<br>
      },<br>
      callback:function(){<br>
      console.dir('加载弹出层');<br>
      }<br>
});<br>

z_index 遮罩层的层级<br>
opacity 透明度<br>
bgcolor 背景色<br>
context 内容区域<br>
    width 内容区宽度<br>
    height 内容区高度<br>
    top 内容区离上边距的距离<br>
    family 字体<br>
    size 字体大小<br>
    color 字体颜色<br>
    text 内容（可以是文本或html）<br>
callback 加载遮罩层后的回调函数<br>

------------------------------------------------------------------------

清除遮罩层

(divId).jowtoLayer('clear',function(){<br>
      console.dir('取消了');<br>
});<br>
$(divId).jowtoLayer('clear');<br>


清除所有的遮罩层
$(.widget-mask-layer).jowtoLayer('clear');<br>

function 是取消遮罩层的回调方法