<template>
	<div class="lottery-wrap">
		<div class="lottery-head">
			<div class="container">
				<div class="lef-par">
					<img src="/src/assets/images/img-k3.png" class="lotto-img">
					<div class="hea-nam-are">
						<div class="hea-name">快3</div>
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
				<div class="rig-par dra-k3">
					<div class="kj-tit">第201801171039 期 <span>开奖结果</span></div>
					<div class="draw-a-lotto">
						<span class="ball-dice dice-1"></span>
						<span class="ball-dice dice-2"></span>
						<span class="ball-dice dice-3"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="lotto-bet-area">
				<div class="bet-top">
					<div class="bet-switch">
						<router-link to="/k3/official" class="cur">官方</router-link>
						<router-link to="/k3/tradition">信用</router-link>
					</div>
					<ul class="primary-link">
						<li class="cur" @click="changeBets">三同号通选</li>
						<li @click="changeBets">三同号单选</li>
						<li @click="changeBets">二同号复选</li>
						<li @click="changeBets">二同号单选</li>
						<li @click="changeBets">三不同号</li>
						<li @click="changeBets">二不同号</li>
						<li @click="changeBets">三连号通选</li>
					</ul>
				</div>
				<div class="bet-area">
					<template v-if="curBet === 0"> <!--三同号通选-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">三同号通选</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">对所有相同的三个号码（111、 <br>222、333、444、555、666）进 <br>行投注。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										全包豹子(111,222,333,444,555,666)投注，开出任意豹子即中奖。。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">三同号</span>
											<div class="bet-item">
												<span class="bet-ball active bet-ball-long">通选</span>
												<span class="lryl">12</span>
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
					<template v-if="curBet === 1"> <!--三同号单选-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">三同号单选</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">对相同的三个号码（111、222、 <br>333、444、555、666）中的任意 <br>一个进行投注。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										单选1个豹子(111,222,333,444,555,666)投注，选号与开奖号码一致即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">三同号</span>
											<div class="bet-item">
												<span class="bet-ball active bet-ball-long">111</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">222</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">333</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">444</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">555</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">666</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
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
					<template v-if="curBet === 2"> <!--二同号复选-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">二同号复选</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">从11～66中任选1个或多个号码。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										选择对子(11,22,33,44,55,66)投注，开奖号码中包含选择的对子即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">二同号</span>
											<div class="bet-item">
												<span class="bet-ball active bet-ball-long">11</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">22</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">33</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">44</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">55</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">66</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
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
					<template v-if="curBet === 3"> <!--二同号单选-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">二同号单选</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">选择1对相同号码（11 , 22 , 33 , <br>44 , 55 , 66）和1个不同号码(1 , 2
												<br> , 3 , 4 , 5 , 6)投注。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										选择1个对子和1个不同号码投注，选号与开奖号码一致即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">二同号</span>
											<div class="bet-item">
												<span class="bet-ball active bet-ball-long">11</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">22</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">33</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">44</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">55</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball bet-ball-long">66</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
											</div>
										</li>
										<li>
											<span class="exact-b long-txt">二不同</span>
											<div class="bet-item">
												<span class="bet-ball active ">1</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">2</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">3</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">4</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">5</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">6</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
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
					<template v-if="curBet === 4"> <!--三不同号-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">三不同号</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">从1～6中任选3个或多个号码。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										至少选择3个不同号码投注，选号与开奖号码一致即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">三不同</span>
											<div class="bet-item">
												<span class="bet-ball active ">1</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">2</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">3</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">4</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">5</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">6</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
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
					<template v-if="curBet === 5"> <!--二不同号-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">二不同号</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">从1～6中任选2个或多个号码。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										至少选择2个不同号码投注，选号与开奖号码一致即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">二不同</span>
											<div class="bet-item">
												<span class="bet-ball active ">1</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">2</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">3</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">4</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball ">5</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-item">
												<span class="bet-ball">6</span>
												<span class="lryl">12</span>
											</div>
											<div class="bet-filter">
												<span class="active">全</span><span>清</span>
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
					<template v-if="curBet === 6"> <!--三连号通选-->
						<div class="bet-lef official">
							<div class="secondary-link-wrap">
								<ul>
									<li><span class="sec-tit long-txt">三连号通选</span> <span class="sec-link cur long-txt">标准选号</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="bet-cont-hea">
									<div class="float-left">
										<el-tooltip class="wf-tip" effect="dark" placement="top">
											<div slot="content">对所有3个相连的号码（123、 <br>234、345、456）进行投注。</div>
											<el-button><i class="el-icon-question"></i></el-button>
										</el-tooltip>
										全包顺子(123,234,345,456)投注，开出任意顺子即中奖。
									</div>
									<div class="float-right">
										<a href="javascript:void(0);" class="btn-lryl active">冷热</a>
										<a href="javascript:void(0);" class="btn-lryl">遗漏</a>
									</div>
								</div>
								<div class="bet-cont-con">
									<ul>
										<li>
											<span class="exact-b long-txt">三连号</span>
											<div class="bet-item">
												<span class="bet-ball active bet-ball-long">通选</span>
												<span class="lryl">12</span>
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
					<div class="bet-right">
						<div class="his-tit">开奖历史</div>
						<div class="table-hea">
							<table>
								<thead>
								<tr>
									<th style="width: 50%;">期号</th>
									<th style="width: 50%;">开奖</th>
								</tr>
								</thead>
							</table>
						</div>
						<div class="table-area k3">
							<table>
								<tbody>
								<tr class="first">
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
								</tr>
								<tr>
									<td>20180122090</td>
									<td><span class="ball-k3 k3-1">01</span><span class="ball-k3 k3-2">02</span><span class="ball-k3 k3-3">03</span></td>
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
				activeName: 'first'
			}
		},
		methods:{
			changeBets (e) {// 玩法切换
				this.curBet = $(e.target).index()
				$(e.target).siblings().removeClass('cur')
				$(e.target).addClass('cur')
			}
		},
		mounted() {
			$('body').on('click','.bet-ball', function () {// 投注球状态展示，根据逻辑开发自行添加calss
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