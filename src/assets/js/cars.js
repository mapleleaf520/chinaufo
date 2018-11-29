
var qiche=[{name:'飞碟奥驰',datalist:['A系','V系','D系','T系','X系','M系']},{name:'飞碟缔途',datalist:['DX','GX','EX','MX','W3','W4']}] ;
var huanbao=[{name:'飞碟专用车',datalist:['自装卸式垃圾车',    '车厢可卸式垃圾车',   '压缩式垃圾车',   '摆臂式垃圾车',    '餐厨垃圾车',    '密封自卸式垃圾车',    '压缩式对接垃圾车',    '扫路车',    '洗扫车',    '护栏清洗车',    '绿化喷洒车',   '吸污车',    '高压清洗车',    '抑尘车',    '管道疏通车',    '路面养护车',    'B证养蜂车',    'C证养蜂车'] },
             {name:'五征专用车',datalist:['垃圾桶',  '环卫箱',     '周转箱',    '移动站',    '固定站',    '车厢可卸式垃圾车', '自装卸式垃圾车',    '密封自卸式垃圾车',    '吸粪车',    '洒水车'  ]}];
var nongzhuang=[{name:'五征农装',datalist:['小拖', '小中拖','中拖', '大拖', '玉米收获机',  '稻麦机',  '青饲料收获机',  '前装载机（抱草夹）', '包膜机']},
    { name:'山拖泰山',datalist:['小中拖',  '中拖',   '大拖'  ]}] ;
var nongyongche=[{name:'五征农用车',datalist:['自卸车', '平板车', '工矿车','多缸车']}];
var dianyongche=[{name:'五征电动车',datalist:[ '平斗', '三开',  '大水电',  '半篷',  '全蓬']}] ;
var data=qiche+huanbao+nongzhuang+nongyongche+dianyongche  ;
function createbrand(cy){
    $("#goodsType").empty();
    $("#goodsType").append("<option value='请选择品牌'>请选择品牌</option>");


    if(cy=='all' || cy=='null' || cy==''){
        $.each(qiche, function (index, obj) {  $("#goodsType").append("<option value='"+obj.name+"'>"+obj.name+"</option>");  });
    }
    else{
        var so=[];
        if(cy=='qiche'){ $.each(qiche, function (index, obj) { so.push( obj.name); });}
        else if(cy=='huanbao'){  $.each(huanbao, function (index, obj) { so.push( obj.name); }); }
        else if(cy=='nongzhuang'){ $.each(nongzhuang, function (index, obj) { so.push( obj.name); });}
        else if(cy=='nongyongche'){ $.each(nongyongche, function (index, obj) { so.push( obj.name); });}
        else if(cy=='dianyongche'){ $.each(dianyongche, function (index, obj) { so.push( obj.name); });}
        for(var i in so){
            $("#goodsType").append("<option value='"+so[i]+"'>"+so[i]+"</option>");
        }
    }
}

function CreateBrand(cy,brand){
    $("#haveBuy").empty();
    $("#haveBuy").append("<option value='请选择车型'>请选择车型</option>");
    var item=[];
    if(cy!='all' && cy!='null' && cy!='' && brand!='all' && brand!='null' && brand!=''){
        if(cy=='qiche'){
            $.each(qiche, function (index, obj) { if( obj.name==brand) {item=obj.datalist; } });
        }
        else if(cy=='huanbao'){  $.each(huanbao, function (index, obj) { if( obj.name==brand) {item=obj.datalist; } }); }
        else if(cy=='nongzhuang'){$.each(nongzhuang, function (index, obj) { if( obj.name==brand) {item=obj.datalist; } });}
        else if(cy=='nongyongche'){ $.each(nongyongche, function (index, obj) { if( obj.name==brand) {item=obj.datalist; } });}
        else if(cy=='dianyongche'){ $.each(dianyongche, function (index, obj) { if( obj.name==brand) {item=obj.datalist; } });}
        for(var i in item){
            $("#haveBuy").append("<option value='"+item[i]+"'>"+item[i]+"</option>");
        }
    }
}
$(function(){

    var  supplyGoods =getUrlParam("supplyGoods");
    if(supplyGoods)     { createbrand(supplyGoods);}
    else{ createbrand('qiche');}
    var haveBuy=getUrlParam("haveBuy");
    if(haveBuy){
        haveBuy=  decodeURI(haveBuy);
        $("#haveBuy").val(haveBuy);
    }
    $("input[name='supplyGoods']").change(function(){
        var cya=$("input[name='supplyGoods']:checked").val();

        createbrand(cya) ;
    });
    $("#goodsType").change(function(){
        var cya=$("input[name='supplyGoods']:checked").val();
        var bra=$('#goodsType').val();;
        CreateBrand(cya,bra) ;
    });
});
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}

