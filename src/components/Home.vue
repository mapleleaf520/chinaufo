<template>
  <div class="Home">
    <section class="mainer">
      <!-- 图片播放功能 -->
      <div class="bannerPane">
        <section class="slider">
          <div class="flexslider">
            <ul class="slides" id="slides">
              <li v-for="item in bannerlist">
                <a href="javascript:;">
                  <img
                    v-bind:src="item.bigBanner"
                    v-bind:data-pc="item.bigBanner"
                    v-bind:data-mobile="item.smallBanner"
                    alt="飞碟汽车"
                    class="img-responsive resizeimg center-block"
                  >
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <!--banner 图结束-->
      <!--预约试驾    &    在线订购   -->
      <div class="container">
        <div class></div>
      </div>
    </section>
    <section class="mainer pt2em">
      <div class="container pt2em">
        <h2 class="pt2em text-center hidden">我们的车型</h2>
        <section class="regular slider prolist">
          <div>
            <a href="#">
              <h3 class="text-center">${a.prodNameC}</h3>
              <div class="img_box">
                <img
                  src="https://www.chinaufo.cn/upload/images/public-20180703134252-1092789272.png"
                  alt="飞碟汽车"
                  title="飞碟汽车"
                  class="img-responsive center-block"
                >
              </div>
              <div class="col-md-12 text-center">
                <p>新一代奥驰宽体卡车，车身宽度达到2120，适用于城际物流运输与城市配送运输</p>
              </div>
              <div class="col-md-12 pt1em btn_box text-center">
                <h1 class="btn btn-default">&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;</h1>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 class="text-center">${a.prodNameC}</h3>
              <div class="img_box">
                <img
                  src="https://www.chinaufo.cn/upload/images/public-20180703134252-1092789272.png"
                  alt="飞碟汽车"
                  title="飞碟汽车"
                  class="img-responsive center-block"
                >
              </div>
              <div class="col-md-12 text-center">
                <p>新一代奥驰宽体卡车，车身宽度达到2120，适用于城际物流运输与城市配送运输</p>
              </div>
              <div class="col-md-12 pt1em btn_box text-center">
                <h1 class="btn btn-default">&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;</h1>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 class="text-center">${a.prodNameC}</h3>
              <div class="img_box">
                <img
                  src="https://www.chinaufo.cn/upload/images/public-20180703134252-1092789272.png"
                  alt="飞碟汽车"
                  title="飞碟汽车"
                  class="img-responsive center-block"
                >
              </div>
              <div class="col-md-12 text-center">
                <p>新一代奥驰宽体卡车，车身宽度达到2120，适用于城际物流运输与城市配送运输</p>
              </div>
              <div class="col-md-12 pt1em btn_box text-center">
                <h1 class="btn btn-default">&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;</h1>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 class="text-center">${a.prodNameC}</h3>
              <div class="img_box">
                <img
                  src="https://www.chinaufo.cn/upload/images/public-20180703134252-1092789272.png"
                  alt="飞碟汽车"
                  title="飞碟汽车"
                  class="img-responsive center-block"
                >
              </div>
              <div class="col-md-12 text-center">
                <p>新一代奥驰宽体卡车，车身宽度达到2120，适用于城际物流运输与城市配送运输</p>
              </div>
              <div class="col-md-12 pt1em btn_box text-center">
                <h1 class="btn btn-default">&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;</h1>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 class="text-center">${a.prodNameC}</h3>
              <div class="img_box">
                <img
                  src="https://www.chinaufo.cn/upload/images/public-20180703134252-1092789272.png"
                  alt="飞碟汽车"
                  title="飞碟汽车"
                  class="img-responsive center-block"
                >
              </div>
              <div class="col-md-12 text-center">
                <p>新一代奥驰宽体卡车，车身宽度达到2120，适用于城际物流运输与城市配送运输</p>
              </div>
              <div class="col-md-12 pt1em btn_box text-center">
                <h1 class="btn btn-default">&nbsp;&nbsp;&nbsp;了解更多&nbsp;&nbsp;&nbsp;</h1>
              </div>
            </a>
          </div>
        </section>
      </div>
    </section>
    <br>
    <!--大模块 后修改 2018-04-13-->
    <section class="mainer">
      <div class="container">
        <div class="col-md-4 col-sm-4 prolist">
          <div class="mou_con bg_1">
            <a href="#">
              <img class="ind_img" src="../assets/images/index/in_01.jpg">
            </a>
          </div>
          <div class="col-md-12 text-center pt1em btn_box">
            <h1 class="btn btn-default">
              <a href="#" tabindex="0">&nbsp;&nbsp;&nbsp;营销活动&nbsp;&nbsp;&nbsp;</a>
            </h1>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 prolist">
          <div class="mou_con bg_1">
            <a href="${createLink(controller:'index',action:'index')}?categoryCode=acxw">
              <img class="ind_img" src="../assets/images/index/in_02.jpg">
            </a>
          </div>
          <div class="col-md-12 text-center pt1em btn_box">
            <h1 class="btn btn-default">
              <a
                href="${createLink(controller:'index',action:'index')}?categoryCode=acxw"
                tabindex="0"
              >&nbsp;&nbsp;&nbsp;新闻中心&nbsp;&nbsp;&nbsp;</a>
            </h1>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 prolist">
          <div class="mou_con bg_1">
            <a href="${createLink(controller:'index',action:'index')}?categoryCode=zxfw">
              <img class="ind_img" src="../assets/images/index/in_03.jpg">
            </a>
          </div>
          <div class="col-md-12 text-center pt1em btn_box">
            <h1 class="btn btn-default">
              <a
                href="${createLink(controller:'index',action:'index')}?categoryCode=zxfw"
                tabindex="0"
              >&nbsp;&nbsp;&nbsp;尊享服务&nbsp;&nbsp;&nbsp;</a>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="bluehr col-md-4 visible-md-block visible-lg-block"></div>
        <div class="huihr col-md-4"></div>
        <div class="bluehr col-md-4 visible-md-block visible-lg-block"></div>
        <DIV class="container small_menu">
          <div class="col-md-3">
            <div class="row">
              <h1 data-id="btm_01">购车咨询</h1>
            </div>
            <ul class="row botmenu" id="btm_01">
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=xswl">销售网络</a>
              </li>
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=yhgs">用户故事</a>
              </li>
              <li>
                <a href="http://car.bitauto.com/gouchejisuanqi/" target="_blank">购车计算器</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="row">
              <h1 data-id="btm_02">尊享服务</h1>
            </div>
            <ul class="row botmenu" id="btm_02">
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=fwxw">服务新动态</a>
              </li>
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=fwzc">服务政策</a>
              </li>
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=fwscx">服务网点查询</a>
              </li>
              <li>
                <a
                  href="https://shop156031449.taobao.com/?spm=a230r.7195193.1997079397.2.g41mUD"
                  target="_blank"
                >配件商城</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="row">
              <h1 data-id="btm_03">会员相关</h1>
            </div>
            <ul class="row botmenu" id="btm_03">
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=hyzx">会员登录</a>
              </li>
              <li>
                <a href="category/enroll">会员注册</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <div class="row">
              <h1 data-id="btm_04">飞碟品牌</h1>
            </div>
            <ul class="row botmenu" id="btm_04">
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=gywm">关于飞碟</a>
              </li>
              <li>
                <a href="${createLink(controller:'index',action:'index')}?categoryCode=acxw">资讯</a>
              </li>
            </ul>
          </div>
        </DIV>
        <br>
      </div>
    </section>
  </div>
</template>
<script>
import flexslider from "../assets/js/jquery.flexslider-min";
import slick from "../assets/js/slick/slick.min";
import Vue from "vue";

//import Vue from 'vue'
export default {
  data() {
    return {
      bannerlist: [],
      hotproductlist: [],//热门产品列表
      result: ""
    };
  },
  mounted: function() {
    this.dataload();
    this.loadhotproduct();
  },
  methods: {
    dataload() {
      var self = this;
      var requestStr =
        "http://192.168.0.22:8082/api/category/banner/list?categoryId=1";
      // this.$http.jsonp(requestStr,{withCredentials:true, headers: { "Content-Type": "application/x-www-form-urlencoded"}}).then(function(res) {
      //     //rt.get(requestStr).then(res => {
      //       console.log(res);
      //     if (res.resultType == 1) {
      //       bannerlist = this.res.data;
      //     } else {
      //     }
      //   })
      //   .catch(error => {
      //   });

      $.ajax({
        url: requestStr,
        type: "GET",
        dataType: "json",
        cache: true,
        success: function(data) {
          self.bannerlist = data.data;
          self.result = data.resultType;
        }
      });
      $(".flexslider").flexslider({
        animation: "fade",
        slideshowSpeed: 3000, // Integer: ms 滚动间隔时间
        animationSpeed: 600, // Integer: ms 动画滚动速度
        start: function(slider) {
        }
      });
    

    },
    loadhotproduct(){
       var self = this;
      //绑定热门产品
      var prowawlist;
      var hostproductstr="http://192.168.0.22:8082/api/category/tree?menuTypeId=2";
      $.ajax({
        url: hostproductstr,
        type: "GET",
        dataType: "json",
        cache: true,
        success: function(data) {
          prowawlist = data.data;
        }
      });
      var proditolist;
      var hostproductstr2="http://192.168.0.22:8082/api/category/tree?menuTypeId=3";
      $.ajax({
        url: hostproductstr2,
        type: "GET",
        dataType: "json",
        cache: true,
        success: function(data) {
          proditolist = data.data;
        }
      });
      self.hotproductlist+=prowawlist;
      self.hotproductlist+=proditolist;
      console.log(self.hotproductlist);

    }
  }
};
$(function() {
  //---------------------------------------------------------------------- BANNER SLIDER
  if ($(".flexslider").length != 0) {
    $(".flexslider").flexslider({
      animation: "fade",
      //smoothHeight: true,
      slideshowSpeed: 3000, // Integer: ms 滚动间隔时间
      animationSpeed: 600, // Integer: ms 动画滚动速度
      start: function(slider) {
        //$('body').removeClass('loading');
      }
    });
  }

  //底部菜单 展开收起 ，手机端
  $(".small_menu h1").click(function() {
    var btmid = $(this).attr("data-id");
    if ($("#" + btmid).is(":hidden")) {
      $("#" + btmid).slideDown();
      $(this).addClass("on");
    } else {
      $("#" + btmid).slideUp();
      $(this).removeClass("on");
    }
  });

  // 后添加首页产品滚动 2018 06 15 small qiao
  $(".regular").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});
</script>
<style>
@import "../assets/js/slick/slick.css";
@import "../assets/js/slick/slick-theme.css";

/*
    首页添加产品 滚动  2018 06 15 small qiao
*/
.slider {
  width: 100%;
  margin: 0px auto;
}

.slick-slide {
  margin: 0px 20px;
  height: auto;
}

.slick-slide img {
  width: 100%;
}

.slick-prev:before,
.slick-next:before {
  color: black;
}

.slick-slide {
  transition: all ease-in-out 0.3s;
  opacity: 0.2;
}

.slick-active {
  opacity: 1; /*-------------------------此处修改我们的车型  其他车型的透明度    0.5  为模糊  1为正常-------------*/
}

.slick-current {
  opacity: 1;
}

.slick-slide {
  height: auto;
}
.img_box {
  min-height: 220px;
}
.prolist .img_box {
  padding: 0;
}
.slick-prev:before,
.slick-next:before {
  opacity: 0;
}
.slick-prev,
.slick-next {
  width: 20px;
  height: 50px;
  opacity: 0.5;
  top: 45%;
}
.slick-prev {
  background: url("../assets/images/index/ban_left-000.png") center no-repeat;
}

.slick-next {
  background: url("../assets/images/index/ban_right-000.png") center no-repeat;
}
.slick-prev:hover,
.slick-prev:focus {
  background: url("../assets/images/index/ban_left-000.png") center no-repeat;
  opacity: 1;
}
.slick-next:hover,
.slick-next:focus {
  background: url("../assets/images/index/ban_right-000.png") center no-repeat;
  opacity: 1;
}
.slick-prev:hover:before,
.slick-prev:focus:before,
.slick-next:hover:before,
.slick-next:focus:before {
  opacity: 0;
}
</style>
