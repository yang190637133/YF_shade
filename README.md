# YF_shade

���ֲ�ؼ�

ҳ������ jowto-mask-layer.js

demo

------------------------------------------------------------------------

������ֲ�

$(divId).jowtoLayer({
      z_index:999,
      opacity:'.7',
      color:'#EF7416',
      callback:function(){
            console.dir('���ص�����');
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
      console.dir('���ص�����');
      }
});

z_index ���ֲ�Ĳ㼶
opacity ͸����
bgcolor ����ɫ
context ��������
    width ���������
    height �������߶�
    top ���������ϱ߾�ľ���
    family ����
    size �����С
    color ������ɫ
    text ���ݣ��������ı���html��
callback �������ֲ��Ļص�����

------------------------------------------------------------------------

������ֲ�

(divId).jowtoLayer('clear',function(){
      console.dir('ȡ����');
});
$(divId).jowtoLayer('clear');


������е����ֲ�
$(.widget-mask-layer).jowtoLayer('clear');

function ��ȡ�����ֲ�Ļص�����