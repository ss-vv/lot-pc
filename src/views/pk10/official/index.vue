<template>
	<div class="lottery-wrap">
		<div class="lottery-head">
			<div class="container">
				<div class="lef-par">
					<img src="/src/assets/images/img-pk10.png" class="lotto-img">
					<div class="hea-nam-are">
						<div class="hea-name">PK10</div>
						<div class="qishu">第 <span class="color-orange">20180130027</span> 期 </div>
						<div class="jz">投注截止时间</div>
					</div>
					<div class="count-down-are">
						<div class="time-num">00</div>
						<div class="dot"></div>
						<div class="time-num">00</div>
						<div class="dot"></div>
						<div class="time-num">00</div>
					</div>
					<div class="ext-link">
						<a href="javascript:void(0);">
							<i class="el-icon-question"></i>玩法说明
						</a>
						<a href="javascript:void(0);">
							<i class="icon-zst"></i>走势图
						</a>
					</div>
				</div>
				<div class="rig-par">
					<div class="kj-tit">201801171039 期 <span>开奖结果</span></div>
					<!--pk10信用玩法-->
					<div class="draw-a-lotto">
						<div class="ball-pk10-tradition">
							<span class="ball-pk10 pk10-1">1</span>
							<span class="ball-pk10 pk10-2">2</span>
							<span class="ball-pk10 pk10-3">3</span>
							<span class="ball-pk10 pk10-4">4</span>
							<span class="ball-pk10 pk10-5">5</span>
							<span class="ball-pk10 pk10-6">6</span>
							<span class="ball-pk10 pk10-7">7</span>
							<span class="ball-pk10 pk10-8">8</span>
							<span class="ball-pk10 pk10-9">9</span>
							<span class="ball-pk10 pk10-10">10</span>
						</div>
						<div class="ball-pl10-ball-txt-wrap">
							<span>6</span>
							<span>小</span>
							<span>双</span>
							<span>虎</span>
							<span>虎</span>
							<span>虎</span>
							<span>虎</span>
							<span>虎</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="lotto-bet-area">
				<div class="bet-top">
					<div class="bet-switch">
						<router-link to="/pk10/official" class="cur">官方</router-link>
						<router-link to="/pk10/tradition">信用</router-link>
					</div>
					<ul class="primary-link">
						<li class="cur" @click="changeBets">定位胆</li>
						<li @click="changeBets">前一</li>
						<li @click="changeBets">前二</li>
						<li @click="changeBets">前三</li>
					</ul>
				</div>
				<div class="bet-area">
					<template v-if="curBet === 0"> <!--定位胆-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit">定位胆</span> <span class="sec-link cur">定位胆</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">投注方案：冠军01 开奖号码 <br>：01，02，03，04，05，06，07， <br>08，09，10即中奖。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										从第一名到第十名任意位置上选择1个或1个以上号码。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b">冠军</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">亚军</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">季军</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第四名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第五名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第六名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第七名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第八名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第九名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第九名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b">第十名</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
									</ul>
									<div class="bet-options-are">
										<div class="line1">
											<span class="color-orange">1000</span> 注
											<div class="bet-money inline-block">
												模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
											</div>
											<template>
												倍数
												<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
												倍
											</template>
											共   <span class="color-orange mouey-span">999999999</span>元
											奖金 <span class="color-orange mouey-span">999999999</span>元
											盈利 <span class="color-orange mouey-span">999999999</span>元
										</div>
										<div class="line2">
											奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
										</div>
										<div class="line3">
											奖金调节：<span class="color-orange">999999999</span> 元
										</div>
										<a href="javascript:void(0)" class="btnBet">投注</a>
									</div>
								</div>
							</div>
						</div>
					</template>
					<template v-if="curBet === 1"> <!--前一-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit">前一</span> <span class="sec-link cur">前一</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">投注方案：01 开奖号码：01， <br>02，03，04，05，06，07，08， <br>09，10即可中前一直选。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										从第一名中至少选择1个号码组成一注。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b">冠军</span>
											<div class="bet-item">
												<span class="bet-ball active">01</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">02</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">04</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">05</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">06</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">07</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">08</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">09</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">10</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
											</div>
										</li>
									</ul>
									<div class="bet-options-are">
										<div class="line1">
											<span class="color-orange">1000</span> 注
											<div class="bet-money inline-block">
												模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
											</div>
											<template>
												倍数
												<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
												倍
											</template>
											共   <span class="color-orange mouey-span">999999999</span>元
											奖金 <span class="color-orange mouey-span">999999999</span>元
											盈利 <span class="color-orange mouey-span">999999999</span>元
										</div>
										<div class="line2">
											奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
										</div>
										<div class="line3">
											奖金调节：<span class="color-orange">999999999</span> 元
										</div>
										<a href="javascript:void(0)" class="btnBet">投注</a>
									</div>
								</div>
							</div>
						</div>
					</template>
					<template v-if="curBet === 2"> <!--前二-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit">前二</span> <span class="sec-link cur" @click="changeSubBets" data-subBet="qe-zxfs">直选复式</span><span class="sec-link" @click="changeSubBets" data-subBet="qe-zxds">直选单式</span></li>
								</ul>
							</div>
							<template v-if="curSubBet === 'qe-zxfs'">
								<div class="bet-cont">
									<div class="bet-cont-hea">
										<div class="float-left">
											<el-tooltip class="wf-tip" effect="dark" placement="top">
												<div slot="content">投注方案：冠军01 ，亚军02 开奖 <br>号码：01，02，03，04，05， <br>06，07，08，09，10即可中前二<br>直选。</div>
												<el-button><i class="el-icon-question"></i></el-button>
											</el-tooltip>
											从第一名，第二名中至少选择1个号码组成一注。
										</div>
										<div class="float-right">
											<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
											<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
										</div>
									</div>
									<div class="bet-cont-con">
										<ul>
											<li>
												<span class="exact-b">冠军</span>
												<div class="bet-item">
													<span class="bet-ball active">01</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">02</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">04</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">05</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">06</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">07</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">08</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">09</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">10</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-filter">
													<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
												</div>
											</li>
											<li>
												<span class="exact-b">亚军</span>
												<div class="bet-item">
													<span class="bet-ball active">01</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">02</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">04</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">05</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">06</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">07</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">08</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">09</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">10</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-filter">
													<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
												</div>
											</li>
										</ul>
										<div class="bet-options-are">
											<div class="line1">
												<span class="color-orange">1000</span> 注
												<div class="bet-money inline-block">
													模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
												</div>
												<template>
													倍数
													<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
													倍
												</template>
												共   <span class="color-orange mouey-span">999999999</span>元
												奖金 <span class="color-orange mouey-span">999999999</span>元
												盈利 <span class="color-orange mouey-span">999999999</span>元
											</div>
											<div class="line2">
												奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
											</div>
											<div class="line3">
												奖金调节：<span class="color-orange">999999999</span> 元
											</div>
											<a href="javascript:void(0)" class="btnBet">投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'qe-zxds'">
								<div class="bet-cont">
									<div class="bet-cont-hea">
										<div class="float-left">
											<el-tooltip class="wf-tip" effect="dark" placement="top">
												<div slot="content">投注方案：冠军01 ，亚军02 开奖 <br>号码：01，02，03，04，05， <br>06，07，08，09，10即可中前二
													<br>直选。</div>
												<el-button><i class="el-icon-question"></i></el-button>
											</el-tooltip>
											手动输入号码，由二个号码组成一注
										</div>
										<div class="float-right">
											<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
											<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
										</div>
									</div>
									<div class="bet-cont-con">
										<div class="wxzxds">
											<textarea></textarea>
											<a href="javascript:void(0);" class="btn-del">删除重复号</a><a href="javascript:void(0);" class="btn-clear">清空</a>
											每一注号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开
										</div>
										<div class="bet-options-are">
											<div class="line1">
												<span class="color-orange">1000</span> 注
												<div class="bet-money inline-block">
													模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
												</div>
												<template>
													倍数
													<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
													倍
												</template>
												共   <span class="color-orange mouey-span">999999999</span>元
												奖金 <span class="color-orange mouey-span">999999999</span>元
												盈利 <span class="color-orange mouey-span">999999999</span>元
											</div>
											<div class="line2">
												奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
											</div>
											<div class="line3">
												奖金调节：<span class="color-orange">999999999</span> 元
											</div>
											<a href="javascript:void(0)" class="btnBet">投注</a>
										</div>
									</div>
								</div>
							</template>
						</div>
					</template>
					<template v-if="curBet === 3"> <!--前三-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit">前三</span> <span class="sec-link cur" @click="changeSubBets" data-subBet="qs-zxfs">直选复式</span><span class="sec-link" @click="changeSubBets" data-subBet="qs-zxds">直选单式</span></li>
								</ul>
							</div>
							<template v-if="curSubBet === 'qs-zxfs'">
								<div class="bet-cont">
									<div class="bet-cont-hea">
										<div class="float-left">
											<el-tooltip class="wf-tip" effect="dark" placement="top">
												<div slot="content">投注方案：冠军01 ，亚军02 ，季 <br>军03开奖号码：01，02，03， <br>04，05，06，07，08，09，10即
													<br>可中前三直选。</div>
												<el-button><i class="el-icon-question"></i></el-button>
											</el-tooltip>
											从第一名，第二名，第三名中至少选择1个号码组成一注。
										</div>
										<div class="float-right">
											<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
											<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
										</div>
									</div>
									<div class="bet-cont-con">
										<ul>
											<li>
												<span class="exact-b">冠军</span>
												<div class="bet-item">
													<span class="bet-ball active">01</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">02</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">04</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">05</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">06</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">07</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">08</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">09</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">10</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-filter">
													<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
												</div>
											</li>
											<li>
												<span class="exact-b">亚军</span>
												<div class="bet-item">
													<span class="bet-ball active">01</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">02</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">04</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">05</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">06</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">07</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">08</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">09</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">10</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-filter">
													<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
												</div>
											</li>
											<li>
												<span class="exact-b">季军</span>
												<div class="bet-item">
													<span class="bet-ball active">01</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">02</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">04</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">05</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">06</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">07</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">08</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">09</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-item">
													<span class="bet-ball">10</span>
													<span class="lryl">12</span>
												</div>
												<div class="bet-filter">
													<span class="active">全</span><span>大</span><span>小</span><span>奇</span><span>偶</span><span>清</span>
												</div>
											</li>
										</ul>
										<div class="bet-options-are">
											<div class="line1">
												<span class="color-orange">1000</span> 注
												<div class="bet-money inline-block">
													模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
												</div>
												<template>
													倍数
													<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
													倍
												</template>
												共   <span class="color-orange mouey-span">999999999</span>元
												奖金 <span class="color-orange mouey-span">999999999</span>元
												盈利 <span class="color-orange mouey-span">999999999</span>元
											</div>
											<div class="line2">
												奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
											</div>
											<div class="line3">
												奖金调节：<span class="color-orange">999999999</span> 元
											</div>
											<a href="javascript:void(0)" class="btnBet">投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'qs-zxds'">
								<div class="bet-cont">
									<div class="bet-cont-hea">
										<div class="float-left">
											<el-tooltip class="wf-tip" effect="dark" placement="top">
												<div slot="content">投注方案：冠军01 ，亚军02 ，季 <br>军03开奖号码：01，02，03， <br>04，05，06，07，08，09，10即
													<br>可中前三直选。</div>
												<el-button><i class="el-icon-question"></i></el-button>
											</el-tooltip>
											手动输入号码，由三个号码组成一注
										</div>
										<div class="float-right">
											<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
											<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
										</div>
									</div>
									<div class="bet-cont-con">
										<div class="wxzxds">
											<textarea></textarea>
											<a href="javascript:void(0);" class="btn-del">删除重复号</a><a href="javascript:void(0);" class="btn-clear">清空</a>
											每一注号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开
										</div>
										<div class="bet-options-are">
											<div class="line1">
												<span class="color-orange">1000</span> 注
												<div class="bet-money inline-block">
													模式 <span class="active">元</span><span>角</span><span>分</span><span>厘</span>
												</div>
												<template>
													倍数
													<el-input-number v-model="betTimes" :min="1" :max="10" class="betTimesInputW"></el-input-number>
													倍
												</template>
												共   <span class="color-orange mouey-span">999999999</span>元
												奖金 <span class="color-orange mouey-span">999999999</span>元
												盈利 <span class="color-orange mouey-span">999999999</span>元
											</div>
											<div class="line2">
												奖金调节：<el-slider v-model="betBonus" class="betBomusSlider"></el-slider> {{betBonus}}.00%
											</div>
											<div class="line3">
												奖金调节：<span class="color-orange">999999999</span> 元
											</div>
											<a href="javascript:void(0)" class="btnBet">投注</a>
										</div>
									</div>
								</div>
							</template>
						</div>
					</template>
					<div class="bet-right">
						<div class="his-tit">开奖历史</div>
						<div class="table-hea">
							<table>
								<thead>
								<tr>
									<th style="width: 30%;">期号</th>
									<th style="width: 70%;">开奖</th>
								</tr>
								</thead>
							</table>
						</div>
						<div class="table-area pk10">
							<table>
								<tbody>
								<tr class="first">
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-pk10 pk10-01">01</span><span class="ball-pk10 pk10-02">02</span><span class="ball-pk10 pk10-03">03</span><span class="ball-pk10 pk10-04">04</span><span class="ball-pk10 pk10-05">05</span><span class="ball-pk10 pk10-06">06</span><span class="ball-pk10 pk10-07">07</span><span class="ball-pk10 pk10-08">08</span><span class="ball-pk10 pk10-09">09</span><span class="ball-pk10 pk10-10">10</span></td>
								</tr>
								</tbody>
							</table>
						</div>
						<router-link to="" class="link-zoushi">查看完整走势</router-link>
					</div>
				</div>
			</div>
			<div class="lotto-bet-record-area">
				<el-tabs v-model="activeName" class="lotto-bet-record-tabs">
					<el-tab-pane label="游戏记录" name="first">
						<table>
							<thead>
							<tr>
								<th style="width: 138px;">单号</th>
								<th style="width: 106px;">游戏类别</th>
								<th style="width: 138px;">投注期号</th>
								<th style="width: 275px;">玩法类别</th>
								<th style="width: 83px;">金额</th>
								<th style="width: 211px;">下单时间</th>
								<th style="width:84px;">奖金</th>
								<th style="width:43px;">状态</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td style="width: 138px;"><span class="color-blue">12451521441</span></td>
								<td style="width: 106px;">重庆时时彩</td>
								<td style="width: 138px;">20181212023</td>
								<td style="width: 275px;">五星-直选复式</td>
								<td style="width: 83px;">20.00 元</td>
								<td style="width: 211px;">2018-01-23 16:20:00</td>
								<td style="width:84px;"><span class="color-red">20.00</span> 元</td>
								<td style="width:43px;"><span class="color-green">赢</span></td>
							</tr>
							</tbody>
						</table>
						<div class="pagination-wrap">
							<el-pagination
									background
									layout="prev, pager, next"
									:total="100">
							</el-pagination>
						</div>
					</el-tab-pane>
					<el-tab-pane label="追号记录" name="second">
						<table>
							<thead>
							<tr>
								<th style="width: 138px;">单号(追号记录)</th>
								<th style="width: 106px;">游戏类别</th>
								<th style="width: 138px;">投注期号</th>
								<th style="width: 275px;">玩法类别</th>
								<th style="width: 83px;">金额</th>
								<th style="width: 211px;">下单时间</th>
								<th style="width:84px;">奖金</th>
								<th style="width:43px;">状态</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td style="width: 138px;"><span class="color-blue">12451521441</span></td>
								<td style="width: 106px;">重庆时时彩</td>
								<td style="width: 138px;">20181212023</td>
								<td style="width: 275px;">五星-直选复式</td>
								<td style="width: 83px;">20.00 元</td>
								<td style="width: 211px;">2018-01-23 16:20:00</td>
								<td style="width:84px;"><span class="color-red">20.00</span> 元</td>
								<td style="width:43px;"><span class="color-green">赢</span></td>
							</tr>
							</tbody>
						</table>
						<div class="pagination-wrap">
							<el-pagination
									background
									layout="prev, pager, next"
									:total="100">
							</el-pagination>
						</div>
					</el-tab-pane>
				</el-tabs>

			</div>
		</div>
	</div>
</template>

<script>
	import $ from 'jquery'
	import jqueryNiceScroll from 'jquery.nicescroll'
	export default{
		data() {
			return {
				betTimes: 1,
				betBonus: 0,
				curBet: 0,
				curSubBet: 'qy',
				activeName: 'first'
			}
		},
		methods: {
			changeBets (e) {// 玩法切换
				this.curBet = $(e.target).index()
				var _this = this;
				switch (this.curBet){// 切换时默认选中子玩法第一个
					case 2: this.curSubBet = 'qe-zxfs';break;
					case 3: this.curSubBet = 'qs-zxfs';break;
				}
				setTimeout(function () {// 等切换的内容加载出来后，再进行class操作
					switch (_this.curBet){
						case 2: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="qe-zxfs"]').addClass('cur');break;
						case 3: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="qs-zxfs"]').addClass('cur');break;
					}
				},100);
				$(e.target).siblings().removeClass('cur')
				$(e.target).addClass('cur')
			},
			changeSubBets (e) { // 子玩法切换
				this.curSubBet = $(e.target).attr('data-subBet');
				$(e.target).parents('.secondary-link-wrap').find('.sec-link').removeClass('cur')
				$(e.target).addClass('cur')
			}
		},
		mounted() {
			$('.bet-item .bet-ball').on('click', function () {// 投注球状态展示，根据逻辑开发自行添加calss
				$(this).toggleClass('active')
			})
			$('.bet-filter span').on('click', function () {// 筛选展示，根据逻辑开发自行添加calss
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
			$('.bet-money span').on('click', function () {// 投注金额单位展示，根据逻辑开发自行添加calss
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
			$('.table-area').niceScroll({cursorcolor:"#cfcfcf"}) // 开奖历史表格滚动
		},
		mounted () {
			$('.bet-item .bet-ball').on('click', function () {// 投注球状态展示，根据逻辑开发自行添加calss
				$(this).toggleClass('active')
			})
			$('.bet-filter span').on('click', function () {// 筛选展示，根据逻辑开发自行添加calss
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
			$('.bet-money span').on('click', function () {// 投注金额单位展示，根据逻辑开发自行添加calss
				$(this).siblings().removeClass('active')
				$(this).addClass('active')
			})
			$('.table-area').niceScroll({cursorcolor:"#cfcfcf"}) // 开奖历史表格滚动
		}
	}
</script>

<style lang="scss">
	@import '~themes/lottery';
</style>