<template>
  <div>
    <footer class="footer">
      <div class="container ft">
        <div class="col-md-5">
          <a href="?categoryCode=lxwm">联系我们</a>/
          <a href="#">网站地图</a>/
          <a href="#">隐私承诺</a>/
          <a href="?categoryCode=ppjs">品牌合作</a>/
          <a href="#">意见反馈</a>/
          <a href="#">友情链接</a>
        </div>
        <div class="col-md-5 contrast">
          <span>©飞碟汽车公司. All rights reserved.</span>鲁ICP备11026139号-16/17
        </div>
      </div>
    </footer>

    <div class="toolPanel w1200-1400">
      <div class="toolGroup">
        <a class="icon TopIcon" href="javascript:void(0)"></a>
        <a class="icon marketingIcon" href="${createLink(controller:'index',action:'zxdcq')}">
          <div class="title">在线订购</div>
        </a>
        <a class="icon phoneIcon">
          <div class="title">7*24小时400 108 5678</div>
        </a>
        <div class="icon codeIcon">
          <div class="innerIcon"></div>
          <div class="arrow"></div>
        </div>
      </div>
      <ul class="codePanel" style="display: none;  opacity: 0;">
        <li>
          <div class="codeTitle">飞碟汽车</div>
          <img src="../assets/images/index/icon_wx_fd.png" width="84" height="84" alt="飞碟汽车">
        </li>
        <li>
          <div class="codeTitle">奥驰</div>
          <img src="../assets/images/index/icon_wx_waw.png" width="84" height="84" alt="奥驰">
        </li>
        <li>
          <div class="codeTitle">缔途</div>
          <img src="../assets/images/index/icon_wx_dito.png" width="84" height="84" alt="缔途">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
$(function() {
  //根据不同浏览设备，加载不同图片
  resizeimg();
  function resizeimg() {
    $(".resizeimg").each(function() {
      if ($(window).width() <= 992) {
        $(this).attr("src", $(this).attr("data-mobile"));
      } else {
        $(this).attr("src", $(this).attr("data-pc"));
      }
    });
  }
  //当调整浏览器窗口的大小时，发生 resize 事件
  $(window).resize(function() {
    resizeimg();
  });
});
</script>
