# YF_shade

���ֲ�ؼ�

ҳ������ jowto-mask-layer.js

demo

------------------------------------------------------------------------

������ֲ�

$(divId).jowtoLayer({<br>
      z_index:999,<br>
      opacity:'.7',<br>
      color:'#EF7416',<br>
      callback:function(){<br>
            console.dir('���ص�����');<br>
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
      console.dir('���ص�����');<br>
      }<br>
});<br>

z_index ���ֲ�Ĳ㼶<br>
opacity ͸����<br>
bgcolor ����ɫ<br>
context ��������<br>
    width ���������<br>
    height �������߶�<br>
    top ���������ϱ߾�ľ���<br>
    family ����<br>
    size �����С<br>
    color ������ɫ<br>
    text ���ݣ��������ı���html��<br>
callback �������ֲ��Ļص�����<br>

------------------------------------------------------------------------

������ֲ�

(divId).jowtoLayer('clear',function(){<br>
      console.dir('ȡ����');<br>
});<br>
$(divId).jowtoLayer('clear');<br>


������е����ֲ�
$(.widget-mask-layer).jowtoLayer('clear');<br>

function ��ȡ�����ֲ�Ļص�����