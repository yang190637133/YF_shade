$(function(){
    /**
     * opt是遮罩层对用的参数
     * @param opt
     */
    $.fn.shadeLayer = function(opts,cb){
        //获取当前选中的对象
        var _this = $(this);
        if(opts !== 'clear'){
            if(opts === undefined){
                opts = {};
                if(opts.context === undefined){
                    opts.context = {};
                }
            }
            //继承content中的参数
            opts.context=$.extend({},{
                    width:'',
                    height:'',
                    top:'',
                    family:'microsoft yahei',
                    size:'14px',
                    color:'#fff',
                    text:''
                },
                opts.context||{});
            //继承父元素
            opts=$.extend({
                z_index:1000,
                color:'#000',
                opacity:'.7',
                context:{},
                callback:function(){return false;}
            },opts||{});
        }

        var maskLayer = {
            //创建遮罩层
            createLayer:function() {
                var id = _this.attr("id");
                if(id !== null || id != undefined){
                    $("#"+id+"_layer").remove();
                    var layerDiv = '<div id='+id+'_layer  class="yf-shade-layer"></div>';
                    $("body").append(layerDiv);
                    //获取父容器的位置及宽高
                    var offset = _this.offset();
                    $("#"+id+"_layer").css({
                        position: 'absolute',
                        'z-index':opts.z_index,
                        top: offset.top+'px',
                        left:offset.left+'px',
                        right:'0',
                        bottom:'0',
                        width:_this.get(0).offsetWidth,
                        height:_this.get(0).offsetHeight,
                        'background-color':opts.color,
                        filter: 'alpha(opacity=50)',
                        opacity: opts.opacity
                    });
                    this.eventLayer(id);
                    this.createChildren(id);
                    //回调函数
                    opts.callback($("#"+id+"_layer"));
                }

            },
            //遮罩层中的内容区域
            createChildren:function(id){
                var childrenDiv = '<div></div>';
                $("#"+id+"_layer").append(childrenDiv);
                $("#"+id+"_layer").find("div").css({
                    width: opts.context.width,
                    height: opts.context.height,
                    margin: opts.context.top+' auto',
                    "font-family": opts.context.family,
                    "font-size": opts.context.size,
                    "color":opts.context.color
                });
                $("#"+id+"_layer").find("div").append(opts.context.text);
            },
            //遮罩层随着容易大小改变事件
            eventLayer:function(id){
                $(window).resize(function(){
                    var offset = _this.offset();
                    $("#"+id+"_layer").css({
                        top: offset.top+'px',
                        left:offset.left+'px',
                        width:_this.get(0).offsetWidth,
                        height:_this.get(0).offsetHeight
                    });
                });
            //清除遮罩层
            },clearLayer:function() {
                if (_this.size() > 1) {
                    _this.each(function (i, n) {
                        $('#' + n.id).remove();
                        if (cb && typeof(cb) === 'function') {
                            cb();
                        }
                    });
                } else {
                    var id = _this.attr("id");
                    if (id !== undefined && id !== null && this.cutStr(id) ==='_layer') {
                        $('#'+id).remove();
                        //回调函数
                        if (cb && typeof(cb) === 'function') {
                            cb();
                        }
                    }else{
                        $('#'+id+"_layer").remove();
                        //回调函数
                        if (cb && typeof(cb) === 'function') {
                            cb();
                        }
                    }
                }
            }
            ,cutStr:function(id){
                var str = '';
                if(id.length > 6){
                    str = id.substr(id.length-6,id.length-1);
                }
                return str;
            //初始化方法
            },init:function(){
                if(opts === 'clear'){
                    this.clearLayer();
                }else{
                    this.createLayer();
                }
            }
        };
        maskLayer.init();
    }

});
