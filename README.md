# YF_shade

���ֲ�ؼ�

ҳ������ yf-shade-layer.js

demo

------------------------------------------------------------------------

������ֲ�

$(divId).shadeLayer({<br>
&ensp;      z_index:999,<br>
&ensp;      opacity:'.7',<br>
&ensp;      color:'#EF7416',<br>
&ensp;      callback:function(){<br>
&ensp;&ensp;            console.dir('���ص�����');<br>
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
&ensp;&ensp;      console.dir('���ص�����');<br>
&ensp;      }<br>
});<br>

z_index ���ֲ�Ĳ㼶<br>
opacity ͸����<br>
bgcolor ����ɫ<br>
context ��������<br>
&ensp;    width ���������<br>
&ensp;    height �������߶�<br>
&ensp;    top ���������ϱ߾�ľ���<br>
&ensp;    family ����<br>
&ensp;    size �����С<br>
&ensp;    color ������ɫ<br>
&ensp;    text ���ݣ��������ı���html��<br>
callback �������ֲ��Ļص�����<br>

------------------------------------------------------------------------

������ֲ�

$(divId).shadeLayer('clear',function(){<br>
&ensp;      console.dir('ȡ����');<br>
});<br>
$(divId).shadeLayer('clear');<br>


������е����ֲ�
$(.yf-shade-layer).shadeLayer('clear');<br>

function ��ȡ�����ֲ�Ļص�����