# YF_shade

遮罩层控件

页面引入 yf-shade-layer.js

demo

------------------------------------------------------------------------

添加遮罩层

$(divId).shadeLayer({<br>
&ensp;      z_index:999,<br>
&ensp;      opacity:'.7',<br>
&ensp;      color:'#EF7416',<br>
&ensp;      callback:function(){<br>
&ensp;&ensp;            console.dir('加载弹出层');<br>
&ensp;      }<br>
});<br>

$(divId).shadeLayer({<br>
&ensp;      z_index:999,<br>
&ensp;      opacity:'.7',<br>
&ensp;      context:{<br>
&ensp;&ensp;            width:'18%',<br>
&ensp;&ensp;            height:'40%',<br>
&ensp;&ensp;            top:'125px',<br>
&ensp;&ensp;            family:'microsoft yahei',<br>
&ensp;&ensp;            size:'16px',<br>
&ensp;&ensp;            color:'#fff',<br>
&ensp;&ensp;            text:jow_html<br>
      },<br>
&ensp;      callback:function(){<br>
&ensp;&ensp;      console.dir('加载弹出层');<br>
&ensp;      }<br>
});<br>

z_index 遮罩层的层级<br>
opacity 透明度<br>
bgcolor 背景色<br>
context 内容区域<br>
&ensp;    width 内容区宽度<br>
&ensp;    height 内容区高度<br>
&ensp;    top 内容区离上边距的距离<br>
&ensp;    family 字体<br>
&ensp;    size 字体大小<br>
&ensp;    color 字体颜色<br>
&ensp;    text 内容（可以是文本或html）<br>
callback 加载遮罩层后的回调函数<br>

------------------------------------------------------------------------

清除遮罩层

$(divId).shadeLayer('clear',function(){<br>
&ensp;      console.dir('取消了');<br>
});<br>
$(divId).shadeLayer('clear');<br>


清除所有的遮罩层
$(.yf-shade-layer).shadeLayer('clear');<br>

function 是取消遮罩层的回调方法