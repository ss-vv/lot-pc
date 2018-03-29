<template>
	<div class="lottery-main">
		<div class="header">
			<div class="cont">
				<div class="logo"><img src="/src/assets/images/logo.png"/></div>
				<div class="mene-action-bar">
					<div class="bar"></div><div class="bar"></div><div class="bar"></div>
				</div>
				<ul class="navbar">
					<li class="cur">
						<router-link to="/home">首页</router-link>
					</li>
					<li>
						<router-link to="/ssc/official">购彩大厅</router-link>
					</li>
					<li>
						<router-link to="">用户中心</router-link>
					</li>
					<li>
						<router-link to="">优惠活动</router-link>
					</li>
					<li>
						<router-link to="/download">下载中心</router-link>
					</li>
					<li>
						<router-link to="">帮助中心</router-link>
					</li>
				</ul>
				<div class="user-info">
					<a href="#" class="icon-sound"></a>
					<a href="#" class="icon-envelope">
						<span class="badge">11</span>
					</a>
					<a href="#" class="icon-bell">
						<span class="badge">11</span>
					</a>
					<a href="#" class="icon-withdraw">提</a>
					<a href="#" class="icon-recharge">冲</a>
					<a href="#" class="icon-portrait">
						<img class="portrait" src="/src/assets/images/portrait1.png" />
						<span class="txt-w">
							<div class="username">我是美男子</div>
							<div>余额2000,00 <i class="el-icon-refresh"></i></div>
						</span>
						
					</a>
					<a href="#" class="btn-logout">
						<span class="cir1"></span>
						<span class="cir2"></span>
						<span class="cir3"></span>
						<i class="icon-switch"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="aside">
			<ul class="lottery-nav">
				<li class="active" data-lotto="ssc">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 ssc"></div>
							<div class="cir2 ssc"></div>
							<div class="cir3 ssc"></div>
							<img src="/src/assets/images/img-ssc.png"/>
						</div>
						时时彩						
					</a>
				</li>
				<li data-lotto="pk10">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 pk10"></div>
							<div class="cir2 pk10"></div>
							<div class="cir3 pk10"></div>
							<img src="/src/assets/images/img-pk10.png"/>
						</div>
						PK拾
					</a>
				</li>
				<li data-lotto="k3">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 k3"></div>
							<div class="cir2 k3"></div>
							<div class="cir3 k3"></div>
							<img src="/src/assets/images/img-k3.png"/>
						</div>
						快3
					</a>
				</li>
				<li data-lotto="lhc">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 lhc"></div>
							<div class="cir2 lhc"></div>
							<div class="cir3 lhc"></div>
							<img src="/src/assets/images/img-lhc.png"/>
						</div>
						六合彩
					</a>
				</li>
				<li data-lotto="pl3">
					<a href="javascript:void(0);">
						<a href="javascript:void(0);">
							<div class="lot-img-wrap">
								<div class="cir1 pl3"></div>
								<div class="cir2 pl3"></div>
								<div class="cir3 pl3"></div>
								<img src="/src/assets/images/img-pl3.png"/>
							</div>
							排列3
						</a>
					</a>
				</li>
				<li data-lotto="fc3d">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 fc3d"></div>
							<div class="cir2 fc3d"></div>
							<div class="cir3 fc3d"></div>
							<img src="/src/assets/images/img-fc3d.png"/>
						</div>
						福彩3D
					</a>
				</li>
				<li data-lotto="keno">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 kl8"></div>
							<div class="cir2 kl8"></div>
							<div class="cir3 kl8"></div>
							<img src="/src/assets/images/img-kl8.png"/>
						</div>
						快乐8
					</a>
				</li>
				<li data-lotto="xy28">
					<a href="javascript:void(0);">
						<div class="lot-img-wrap">
							<div class="cir1 xy28"></div>
							<div class="cir2 xy28"></div>
							<div class="cir3 xy28"></div>
							<img src="/src/assets/images/img-xy28.png"/>
						</div>
						幸运28
					</a>
				</li>
			</ul>
			<div class="arrow-lef"></div>
			<!--小屏幕时的关闭侧边菜单按钮-->
			<div class="icon-close">
				<i class="el-icon-close"></i>
			</div>
			<div class="lottery-link-wrap">
				<ul class="ssc active">
					<li class="cur"><router-link to="/ssc/official">时时彩官方玩法</router-link></li>
					<li><router-link to="/ssc/tradition">时时彩传统玩法</router-link></li>
				</ul>
				<ul class="pk10">
					<li><router-link to="/pk10/official">PK10官方玩法</router-link></li>
					<li><router-link to="/pk10/tradition">PK10传统玩法</router-link></li>
				</ul>
				<ul class="k3">
					<li><router-link to="/k3/official">快3官方玩法</router-link></li>
					<li><router-link to="/k3/tradition">快3传统玩法</router-link></li>
				</ul>
				<ul class="lhc">
					<li><router-link to="/lhc">香港六合彩</router-link></li>
				</ul>
				<ul class="pl3">
					<li><router-link to="/pl3">排列3</router-link></li>
				</ul>
				<ul class="fc3d">
					<li><router-link to="/pl3">福彩3D</router-link></li>
				</ul>
				<ul class="keno">
					<li><router-link to="/keno">快乐8</router-link></li>
				</ul>
				<ul class="xy28">
					<li><router-link to="/xy28">幸运28</router-link></li>
				</ul>
			</div>
		</div>
		<div class="content" id="content">
			<router-view>
			</router-view>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
import jqueryNiceScroll from 'jquery.nicescroll'
export default{
	mounted(){
		$('.content').niceScroll({cursorcolor:"#cfcfcf"}) // 右侧内容超出滚动
		$('.aside .lottery-nav').niceScroll({cursorcolor:"#cfcfcf"}) // 左侧内容超出滚动
		$('.arrow-lef').css("top",$('.lottery-nav li.active').offset().top+30-68)
		$('.lottery-nav li').on('click', function(){			
			$(this).siblings().removeClass("active")
			$(this).addClass("active")
			$('.arrow-lef').css("top",$(this).offset().top+30-68)
			$(".lottery-link-wrap ul").removeClass("active")
			$(".lottery-link-wrap ul[class='"+$(this).data('lotto')+"']").addClass("active")
			// 小屏幕时的代码
			$('.lottery-link-wrap').css('display', 'block')
			$('.arrow-lef').css('display', 'block')
			$('.icon-close').css('display', 'block')
		})
		$(".lottery-link-wrap ul").on('click', 'li', function () {
			$(".lottery-link-wrap ul li").removeClass('cur')
			$(this).addClass('cur')
		})
		$('.navbar li').on('click', function (e) {
			$(this).siblings().removeClass('cur')
			$(this).addClass('cur')
		})
		// 导航菜单的展示
		$('.mene-action-bar').on('click', function () {
			$('.navbar').toggleClass('active')
			$(this).toggleClass('active')
			$('.navbar li').on('click', function () {
				$('.mene-action-bar').removeClass('active')
				$('.navbar').removeClass('active')
			})
		})
		// 关闭侧边菜单
		$('.aside .icon-close').on('click', function () {
			$(this).hide()
			$('.lottery-link-wrap').hide()
			$('.arrow-lef').hide()
		})

	}
}
</script>

<style>
</style>