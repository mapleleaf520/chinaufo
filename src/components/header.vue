<template>
  <header class="header " style="position: relative; z-index: 99999">
    <div class="topbar b2ar fixed" style="">
        <nav class="navbar navbar-default navbar-mobile bootsnav">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                    <i class="fa fa-bars  " style="-webkit-text-stroke: 1.5px #FFF; font-size:1.5rem;"></i>
                </button>
                <a class="navbar-brand" href="${createLink(controller:'index',action:'index')}"><img src="../assets/images/index/logo.gif" /></a>
            </div>
            <div class=" navbar-collapse navbar-right h_right">
                <div class="row">
                    <div class="searchbox-top"><input type="text" name="searchtxt" id="searchtxt" class="sear_txt" placeholder="输入关键词搜索"/><a href="javascript:void(0)"><i class=" fa fa-search"></i></a> </div>
                    <div class="clearfix"></div>
                    <div class="searchlink">
                        <ul class="sear_menu">
                            <li><a href="tel:4001085678"><i class="fa fa-phone"></i>400 108 5678</a></li>
                            <li><a href="https://shop190852975.taobao.com/?spm=a230r.7195193.1997079397.38.NvCwTR" target="_blank"><i class="fa fa-cart-plus"></i>飞碟商城</a></li>
                            <li><a href="${createLink(controller:'index',action:'index')}?categoryCode=hyzx"><i class="fa fa-user"></i>登录</a></li>
                            <li><a href="${createLink(controller:'index',action:'index')}?categoryCode=xswl"><i class="glyphicon glyphicon-map-marker "></i>查找经销商</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="f_menu">
            <div class="container nopadding">
                <div class="   collapse navbar-collapse nopadding" id="navbar-menu">
                    <ul class="nav navbar-nav " data-in="fadeInDown" data-out="fadeInUp"><!--navbar-right-->
    <li><a href="/">首页</a></li>
    <li class="dropdown"><a href="/?categoryCode=waw">奥驰</a></li>
    <li><a href="/?categoryCode=p_dito">缔途</a></li>
    <li class="dropdown"><a href="/?categoryCode=zxfw" class="dropdown-toggle" data-toggle="dropdown">服务</a>
        <ul class="dropdown-menu animated fadeInUp">
            <li id="fwscx"><a href="/?categoryCode=fwscx">服务商</a></li>
            <li id="fwxw"><a href="/?categoryCode=fwxw">服务新动态</a></li>
            <li id="acbd"><a href="/?categoryCode=acbd">爱车宝典</a></li>
            <li id="xzzx"><a href="/?categoryCode=xzzx">下载中心</a></li>
            <li><a href="/index/clw">智慧出行</a>  </li>
            <li><a href="/?categoryCode=fwzc">服务政策</a>   </li>
            <li id="xny"><a href="/?categoryCode=xny">新能源</a></li>
            <li><a href="https://shop190852975.taobao.com/?spm=a230r.7195193.1997079397.38.NvCwTR" target="_blank">官方商城</a></li>
        </ul>
    </li>
    <li class="dropdown"><a href="/?categoryCode=gywm" class="dropdown-toggle" data-toggle="dropdown">关于我们</a>
        <ul class="dropdown-menu animated">
            <li><a href="/?categoryCode=acjj">飞碟简介</a></li>
            <li><a href="/?categoryCode=acxw">新闻动态</a></li>
            <li><a href="/?categoryCode=lxwm">联系我们</a></li>
            <li><a href="/index/HR">加入我们</a></li>
        </ul>
    </li>
    <li class="dropdown hide992"><a href="/?categoryCode=xswl" class="menu_search "><span class="glyphicon glyphicon-map-marker "></span> 经销商查询</a>
        <ul class="dropdown-menu animated">
            <li><a href="/?categoryCode=xswl">销售网络</a></li>
            <li><a href="/?categoryCode=yhgs">用户故事</a></li>
            <li><a href="http://car.bitauto.com/gouchejisuanqi/" target="_blank">购车计算器</a></li>
        </ul>
    </li>
</ul>
                </div>
            </div>
        </div>
        </nav>
    </div>
</header>
</template>
<script>
export default {
  name: 'header'
}
</script>
