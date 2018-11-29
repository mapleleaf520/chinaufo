var brand={'qiche':['奥驰A1',  '奥驰A3',   '奥驰V1',   '奥驰V2',   '奥驰V3',   '奥驰D2',   '奥驰D3',   '奥驰D5',   '奥驰X1',   '奥驰X2',   '奥驰X3',   '奥驰T2',   '奥驰T3',  '宏瑞',  '缔途GX',   '缔途MX',  '缔途DX'],
    'nongyong':['工程运输型','农田果园型', '工矿型', '公路运输型',  '物流型' ]    ,
    'nongzhuang':['大拖',   '小中拖',  '中拖', '小拖',  '玉米收获机',   '稻麦收获机'  ]  ,
    'zhuanyongche':['自装卸式垃圾车','动物无害化处理收集车', '车厢可卸式垃圾车', '垃圾清运车', '压缩式垃圾车', '摆臂式垃圾车', '餐厨垃圾车',  '压缩式对接垃圾车', '吸污车', '绿化喷洒车', '多功能抑尘车', '清洗车', '路面养护车', '护栏清洗车',  '湿式扫路车',  '干式扫路车', '洗扫车',  '垃圾收集', '周转箱',  '移动式垃圾压缩站',  '固定站' ],
    //'diandong':['货运电动车', '客运电动车', '专用电动车',]
    'diandong':['三开', '平斗', '打水电','半篷','全篷','电轿','特种车']
}

function createbrand(cy){
    $("#haveBuy").empty();
    $("#haveBuy").append("<option value='请选择车型'>请选择车型</option>");
    if(cy=='all'){
        for(var i in brand){

            for(var j in brand[i]){
                $("#haveBuy").append("<option value='"+brand[i][j]+"'>"+brand[i][j]+"</option>");
            }
        }
    }
    else{
        var so=brand[cy];
        for(var i in so){
            $("#haveBuy").append("<option value='"+so[i]+"'>"+so[i]+"</option>");
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
        var cya=$("input[name='supplyGoods']:checked").val();  createbrand(cya) ;  ;
    });
});
//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}

