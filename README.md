# YF_shade

遮罩层控件

页面引入 jowto-mask-layer.js

demo

------------------------------------------------------------------------

添加遮罩层

$(divId).jowtoLayer({
      z_index:999,
      opacity:'.7',
      color:'#EF7416',
      callback:function(){
            console.dir('加载弹出层');
      }
});

$(divId).jowtoLayer({
      z_index:999,
      opacity:'.7',
      context:{
            width:'18%',
            height:'40%',
            top:'125px',
            family:'microsoft yahei',
            size:'16px',
            color:'#fff',
            text:jow_html
      },
      callback:function(){
      console.dir('加载弹出层');
      }
});

z_index 遮罩层的层级
opacity 透明度
bgcolor 背景色
context 内容区域
    width 内容区宽度
    height 内容区高度
    top 内容区离上边距的距离
    family 字体
    size 字体大小
    color 字体颜色
    text 内容（可以是文本或html）
callback 加载遮罩层后的回调函数

------------------------------------------------------------------------

清除遮罩层

(divId).jowtoLayer('clear',function(){
      console.dir('取消了');
});
$(divId).jowtoLayer('clear');


清除所有的遮罩层
$(.widget-mask-layer).jowtoLayer('clear');

function 是取消遮罩层的回调方法