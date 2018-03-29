<template>
	<div class="lottery-wrap">
		<div class="lottery-head">
			<div class="container">
				<div class="lef-par">
					<img src="/src/assets/images/img-ssc.png" class="lotto-img">
					<div class="hea-nam-are">
						<div class="hea-name">时时彩</div>
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
					<div class="kj-tit">第201801171039 期 <span>开奖结果</span></div>
					<div class="draw-a-lotto">
						<span class="ball-normal">6</span>
						<span class="ball-normal">3</span>
						<span class="ball-normal">1</span>
						<span class="ball-normal">8</span>
						<span class="ball-normal">9</span>
						<div class="ball-txt-wrap">
							<span class="ball-txt">17</span>
							<span class="ball-txt">单</span>
							<span class="ball-txt">小</span>
							<span class="ball-txt">虎</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="lotto-bet-area">
				<div class="bet-top">
					<div class="bet-switch">
						<router-link to="/ssc/official" class="cur">官方</router-link>
						<router-link to="/ssc/tradition">信用</router-link>
					</div>
					<ul class="primary-link">
						<li class="cur" @click="changeBets">定位胆</li>
						<li @click="changeBets">五星</li>
						<li @click="changeBets">四星</li>
						<li @click="changeBets">后三</li>
						<li @click="changeBets">前三</li>
						<li @click="changeBets">前二</li>
						<li @click="changeBets">不定位</li>
					</ul>
				</div>
				<div class="bet-area">
                    <template v-if="curBet === 0"> <!--定位胆-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">定位胆</div> <span class="sec-link cur">定位胆</span></li>
                                </ul>
                            </div>
                            <div class="bet-cont">
                                <div class="bet-cont-hea">
                                    <div class="float-left">
                                        <el-tooltip class="wf-tip" effect="dark" content="投注方案：万位1 开奖号码：万位1，即中定位胆万位。" placement="top">
                                            <el-button><i class="el-icon-question"></i></el-button>
                                        </el-tooltip>
                                        在万位、千位、百位、十位、个位任意位置上任意选择1个或1个以上号码。
                                    </div>
                                    <div class="float-right">
                                        <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                        <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                    </div>
                                </div>
                                <div class="bet-cont-con">
                                    <ul>
                                        <li>
                                            <span class="exact-b">万位</span>
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
                                            <span class="exact-b">千位</span>
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
                                            <span class="exact-b">百位</span>
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
                                            <span class="exact-b">十位</span>
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
                                            <span class="exact-b">个位</span>
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
					<template v-if="curBet === 1"> <!--五星-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">五星直选</div> <span class="sec-link cur" @click="changeSubBets" data-subBet="wxzx-zxfs">直选复式</span><span class="sec-link" @click="changeSubBets" data-subBet="wxzx-zxds">直选单式</span></li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'wxzx-zxfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：13456 开奖号码：13456，即中五星直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从万位、千位、百位、十位、个位各选一个号码组成一注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">万位</span>
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
                                                <span class="exact-b">千位</span>
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
                                                <span class="exact-b">百位</span>
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
                                                <span class="exact-b">十位</span>
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
                                                <span class="exact-b">个位</span>
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
                            <template v-if="curSubBet === 'wxzx-zxds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：23456 开奖号码：23456，即中五星直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个五位数号码组成一注。
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
                    <template v-if="curBet === 2"> <!--四星-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">四星直选</div> <span class="sec-link cur" @click="changeSubBets" data-subBet="sxzx-zxfs">直选复式</span><span class="sec-link" @click="changeSubBets"data-subBet="sxzx-zxds">直选单式</span></li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'sxzx-zxfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：3456 开奖号码后四位：3456，即中四星直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从千位、百位、十位、个位各选一个号码组成一注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">万位</span>
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
                                                <span class="exact-b">千位</span>
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
                                                <span class="exact-b">百位</span>
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
                                                <span class="exact-b">十位</span>
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
                                                <span class="exact-b">个位</span>
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
                            <template v-if="curSubBet === 'sxzx-zxds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：23456 开奖号码：23456，即中五星直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个五位数号码组成一注。
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
                    <template v-if="curBet === 3"> <!--后三-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">后三直选</div>
                                        <span class="sec-link cur" @click="changeSubBets" data-subBet="hszx-zxfs">直选复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zxds">直选单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-hszh">后三组合</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zxhz">直选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zxkd">直选跨度</span>
                                    </li>
                                    <li><div class="sec-tit">后三组选</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zsfs">组三复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zsds">组三单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zlfs">组六复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zlds">组六单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-hhzx">混合组选</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zuxhz">组选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-zxbd">组选包胆</span>
                                    </li>
                                    <li><div class="sec-tit">后三其它</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-hzws">和值尾数</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="hszx-tsh">特殊号</span>
                                    </li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'hszx-zxfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：345 开奖号码后三位：345，即中后三位直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从百位、十位、个位各选一个号码组成一注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">百位</span>
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
                                                <span class="exact-b">十位</span>
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
                                                <span class="exact-b">个位</span>
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
                            <template v-if="curSubBet === 'hszx-zxds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：345开奖号码：345，即中后三直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个3位数号码组成一注。
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
                            <template v-if="curSubBet === 'hszx-hszh'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：购买：6+7+8，由以下三注：678(三星)、78(二星)、8(一星)构成 <br>  开奖号码：678，即可中奖 一星、二星、三星各一注。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从百位、十位、个位各选一个号码组成三注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">百位</span>
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
                                                <span class="exact-b">十位</span>
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
                                                <span class="exact-b">个位</span>
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
                            <template v-if="curSubBet === 'hszx-zxhz'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值：1，开奖号码： <br>后三位001、010、100，即中后三 <br>直选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-27中任意选择1个或1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">0</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">18</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">19</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">20</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">21</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">22</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">23</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">24</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">25</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">26</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">27</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet ==='hszx-zxkd'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：跨度：8，开奖号码 <br>：**129，最大号码9与最小号码1相 <br>减值等于8，所选号与跨度号码相
                                                    <br>同即中奖。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">跨度</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='hszx-zsfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：588开奖号码：后三位 <br>588(顺序不限)，即可中后三组选 <br>三。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择2个或2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">组三</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='hszx-zsds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：001 开奖号码：后三位 <br>010(顺序不限)，即中后三组选三。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。
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
                            <template v-if="curSubBet ==='hszx-zlfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：258开奖号码：后三位 <br>852(顺序不限)，即可中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择3个或3个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">组六</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='hszx-zlds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：123 开奖号码：后三 <br>位321(顺序不限)，即中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个三位数号码（三个数字完全不相同）。
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
                            <template v-if="curSubBet ==='hszx-hhzx'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：001和123 开奖号码： <br>后三位010(顺序不限)，即中后三组 <br>选三，或后三位312(顺序不限)，即
                                                    <br>中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动至少输入三个号码构成一注(不包含豹子号)。
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
                            <template v-if="curSubBet ==='hszx-zuxhz'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值：3，开奖号码：<br>后三位003(顺序不限)，即中后三组 <br>选三，或者后三位012(顺序不限)即 <br>中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从1-26中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">18</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">19</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">20</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">21</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">22</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">23</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">24</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">25</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">26</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet ==='hszx-zxbd'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：包胆3：开奖号码：后 <br>三位3XX或者33X，即中后三组选 <br>三，后三位3XY，即中后三组选六</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">包胆</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='hszx-hzws'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值尾数8 开奖号码 <br>：后三位936，和值尾数为8，即中和 <br>值尾数。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b long-txt">和值尾数</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='hszx-tsh'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：豹子顺子对子 开奖号 <br>码：后三位888，即中豹子；后三 <br>位678，即中顺子；后三位558，即
                                                    <br>中对子。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            选择1个或一个以上特殊号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">特殊号</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long active">豹子</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long">顺子</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long">对子</span>
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
                            </template>
                        </div>
                    </template>
                    <template v-if="curBet === 4"> <!--前三-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">前三直选</div>
                                        <span class="sec-link cur" @click="changeSubBets" data-subBet="qszx-zxfs">直选复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zxds">直选单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-qszh">前三组合</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zxhz">直选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zxkd">直选跨度</span>
                                    </li>
                                    <li><div class="sec-tit">前三组选</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zsfs">组三复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zsds">组三单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zlfs">组六复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zlds">组六单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-hhzx">混合组选</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zuxhz">组选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-zxbd">组选包胆</span>
                                    </li>
                                    <li><div class="sec-tit">前三其它</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-hzws">和值尾数</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszx-tsh">特殊号</span>
                                    </li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'qszx-zxfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：345 开奖号码前三位：345，即中前三位直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从万位、千位、百位各选一个号码组成一注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">万位</span>
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
                                                <span class="exact-b">千位</span>
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
                                                <span class="exact-b">百位</span>
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
                            <template v-if="curSubBet === 'qszx-zxds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" content="投注方案：345开奖号码：345，即中前三直选。" placement="top">
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个3位数号码组成一注。
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
                            <template v-if="curSubBet === 'qszx-qszh'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：购买：6+7+8，由以下三注：678(三星)、78(二星)、8(一星)构成 <br>  开奖号码：678，即可中奖 一星、二星、三星各一注。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从万位、千位、百位各选一个号码组成三注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">万位</span>
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
                                                <span class="exact-b">千位</span>
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
                                                <span class="exact-b">百位</span>
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
                            <template v-if="curSubBet === 'qszx-zxhz'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值：1，开奖号码： <br>后三位001、010、100，即中后三 <br>直选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-27中任意选择1个或1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">0</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">18</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">19</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">20</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">21</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">22</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">23</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">24</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">25</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">26</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">27</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet ==='qszx-zxkd'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：跨度：8，开奖号码 <br>：**129，最大号码9与最小号码1相 <br>减值等于8，所选号与跨度号码相
                                                    <br>同即中奖。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">跨度</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='qszx-zsfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：588开奖号码：后三位 <br>588(顺序不限)，即可中后三组选 <br>三。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择2个或2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">组三</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='qszx-zsds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：001 开奖号码：后三位 <br>010(顺序不限)，即中后三组选三。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个三位数号码（三个数字中必须有二个数字相同）。
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
                            <template v-if="curSubBet ==='qszx-zlfs'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：258开奖号码：后三位 <br>852(顺序不限)，即可中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择3个或3个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">组六</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='qszx-zlds'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：123 开奖号码：后三 <br>位321(顺序不限)，即中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个三位数号码（三个数字完全不相同）。
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
                            <template v-if="curSubBet ==='qszx-hhzx'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark"  placement="top">
                                                <div slot="content">投注方案：001和123 开奖号码： <br>后三位010(顺序不限)，即中后三组 <br>选三，或后三位312(顺序不限)，即
                                                    <br>中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动至少输入三个号码构成一注(不包含豹子号)。
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
                            <template v-if="curSubBet ==='qszx-zuxhz'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值：3，开奖号码：<br>后三位003(顺序不限)，即中后三组 <br>选三，或者后三位012(顺序不限)即 <br>中后三组选六。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从1-26中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">18</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">19</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">20</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">21</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">22</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">23</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">24</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">25</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">26</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet ==='qszx-zxbd'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：包胆3：开奖号码：后 <br>三位3XX或者33X，即中后三组选 <br>三，后三位3XY，即中后三组选六</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">包胆</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='qszx-hzws'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值尾数8 开奖号码 <br>：后三位936，和值尾数为8，即中和 <br>值尾数。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b long-txt">和值尾数</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet ==='qszx-tsh'">
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：豹子顺子对子 开奖号 <br>码：后三位888，即中豹子；后三 <br>位678，即中顺子；后三位558，即
                                                    <br>中对子。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            选择1个或一个以上特殊号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">特殊号</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long active">豹子</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long">顺子</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball bet-ball-long">对子</span>
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
                            </template>
                        </div>
                    </template>
                    <template v-if="curBet === 5"> <!--前二-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">前二直选</div>
                                        <span class="sec-link cur" @click="changeSubBets" data-subBet="qezx-zxfs">直选复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qezx-zxds">直选单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qezx-zxhz">直选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qezx-zxkd">直选跨度</span>
                                    </li>
                                    <li><div class="sec-tit">前二组选</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszux-zsfs">组选复式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszux-zsds">组选单式</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszux-zshz">组选和值</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="qszux-zsbd">组选包胆</span>
                                    </li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'qezx-zxfs'"> <!--直选复式-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：58 开奖号码前两位 <br>：58，即中前二直选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从万位、千位中至少各选1个号码组成一注。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">万位</span>
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
                                                <span class="exact-b">千位</span>
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
                            <template v-if="curSubBet === 'qezx-zxds'"> <!--直选单式-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：58 开奖号码前两位 <br>：58，即中前二直选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个二位数号码组成一注。
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
                            <template v-if="curSubBet === 'qezx-zxhz'"> <!--直选和值-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值1 开奖号码前两 <br>位：01或10，即中前二和值。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-18中任意选择1个或1个以上的和值号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">0</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">18</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet === 'qezx-zxkd'"> <!--直选跨度-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：跨度9 开奖号码 <br>：90***，最大值9与最小值0相减之 <br>差即为跨度值，当所选号与跨度号
                                                    <br>码相同，即为中奖。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">跨度</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'qszux-zsfs'"> <!--组选复式-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：58 开奖号码：前两位 <br> 58 或 85(顺序不限，不含对子 <br>号)，即为中奖。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择2个或2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">组选</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'qszux-zsds'"> <!--组选单式-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：58 开奖号码：前二位 <br> 58 或者 85(顺序不限，不含对子 <br>号)，即中前二组选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            手动输入号码，至少输入1个二位数号码组成一注。
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
                            <template v-if="curSubBet === 'qszux-zshz'"> <!--组选和值-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：和值1 开奖号码前两 <br>位：01或10(顺序不限，不含对子 <br>号)，即中前二组选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从1-17中任意选择1个或者1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <div class="float-left">
                                                    <span class="exact-b">和值</span>
                                                </div>
                                                <div class="float-left" style="width: 440px;">
                                                    <div class="bet-item">
                                                        <span class="bet-ball active">1</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">2</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">4</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">5</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">6</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">7</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">8</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">9</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">10</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">11</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">12</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">13</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">14</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">15</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">16</span>
                                                        <span class="lryl">12</span>
                                                    </div>
                                                    <div class="bet-item">
                                                        <span class="bet-ball">17</span>
                                                        <span class="lryl">12</span>
                                                    </div>
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
                            </template>
                            <template v-if="curSubBet === 'qszux-zsbd'"> <!--组选包胆-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：包胆8 开奖号码：前二 <br>位 8×，且×不等于8，即中前二组 <br>选。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">胆码</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                        </div>
                    </template>
                    <template v-if="curBet === 6"> <!--不定位-->
                        <div class="bet-lef official">
                            <div class="secondary-link-wrap">
                                <ul>
                                    <li><div class="sec-tit">三星</div>
                                        <span class="sec-link cur" @click="changeSubBets" data-subBet="sx-qsym">前三一码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-qsem">前三二码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-hsym">后三一码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-hsem">后三二码</span>
                                    </li>
                                    <li><div class="sec-tit">四星</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-qsiym">前四一码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-qsiem">前四二码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-hsiym">后四一码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="sx-hsiem">后四二码</span>
                                    </li>
                                    <li><div class="sec-tit">五星</div>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="wx-wxem">五星二码</span>
                                        <span class="sec-link" @click="changeSubBets" data-subBet="wx-wxsm">五星三码</span>
                                    </li>
                                </ul>
                            </div>
                            <template v-if="curSubBet === 'sx-qsym'"> <!--前三一码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：1 开奖号码：前三位， <br>至少出现1个1，即中前三一码不定 <br>位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-qsem'"> <!--前三二码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：12 开奖号码：前三位， <br>至少出现1和2各一个，即中前三二 <br>码不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-hsym'"> <!--后三一码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：1 开奖号码：后三位至 <br>少出现1个1，即中后三一码不定 <br>位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-hsem'"> <!--后三二码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：12 开奖号码：后三位至 <br>少出现1和2各一个，即中后三二码 <br>不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-qsiym'"> <!--前四一码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：1 开奖号码：前四位至 <br>少出现1个1，即中前四不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-qsiem'"> <!--前四二码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：12 开奖号码：前四位至 <br>少出现1和2各一个，即中前四二码 <br>不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-hsiym'"> <!--后四一码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：1 开奖号码：后四位至 <br>少出现1个1，即中后四不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择1个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'sx-hsiem'"> <!--后四二码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：12 开奖号码：后四位至 <br>少出现1和2各一个，即中后四二码 <br>不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'wx-wxem'"> <!--五星二码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：12 开奖号码：至少出现 <br>1和2各一个，即中五星二码不定 <br>位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中选择2个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                            <template v-if="curSubBet === 'wx-wxsm'"> <!--五星三码-->
                                <div class="bet-cont">
                                    <div class="bet-cont-hea">
                                        <div class="float-left">
                                            <el-tooltip class="wf-tip" effect="dark" placement="top">
                                                <div slot="content">投注方案：123 开奖号码：至少出 <br>现1和2及3各一个，即中五星三码 <br>不定位。</div>
                                                <el-button><i class="el-icon-question"></i></el-button>
                                            </el-tooltip>
                                            从0-9中任意选择3个以上号码。
                                        </div>
                                        <div class="float-right">
                                            <a href="javascript:void(0);" class="btn-lryl active">冷热</a>
                                            <a href="javascript:void(0);" class="btn-lryl">遗漏</a>
                                        </div>
                                    </div>
                                    <div class="bet-cont-con">
                                        <ul>
                                            <li>
                                                <span class="exact-b">不定位</span>
                                                <div class="bet-item">
                                                    <span class="bet-ball active">0</span>
                                                    <span class="lryl">12</span>
                                                </div>
                                                <div class="bet-item">
                                                    <span class="bet-ball">01</span>
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
                        </div>
                    </template>
					<div class="bet-right">
                        <div class="his-tit">开奖历史</div>
                        <div class="table-hea">
                            <table>
                                <thead>
                                <tr>
                                    <th style="width: 35%;">期号</th>
                                    <th style="width: 65%;">开奖</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="table-area ssc">
                            <table>
                                <tbody>
                                <tr class="first">
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
                                </tr>
                                <tr>
                                    <td>20180122090</td>
                                    <td><span class="ball">1</span><span class="ball">2</span><span class="ball">3</span><span class="ball">4</span><span class="ball">5</span><span class="txt">和值：25</span>|<span class="txt">组六</span></td>
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
            activeName: 'first',
            curBet: 0,
            curSubBet: 'dwd'
        }
    },
    methods: {
      changeBets (e) {// 玩法切换
          this.curBet = $(e.target).index()
          var _this = this;
          switch (this.curBet){// 切换时默认选中子玩法第一个
              case 1: this.curSubBet = 'wxzx-zxfs';break;
              case 2: this.curSubBet = 'sxzx-zxfs';break;
              case 3: this.curSubBet = 'hszx-zxfs';break;
              case 4: this.curSubBet = 'qszx-zxfs';break;
              case 5: this.curSubBet = 'qezx-zxfs';break;
              case 6: this.curSubBet = 'sx-qsym';break;
          }
          setTimeout(function () {// 等切换的内容加载出来后，再进行class操作
              switch (_this.curBet){
                  case 1: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="wxzx-zxfs"]').addClass('cur');break;
                  case 2: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="sxzx-zxfs"]').addClass('cur');break;
                  case 3: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="hszx-zxfs"]').addClass('cur');break;
                  case 4: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="qszx-zxfs"]').addClass('cur');break;
                  case 5: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="qezx-zxfs"]').addClass('cur');break;
                  case 6: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="sx-qsym"]').addClass('cur');break;
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
    }
}
</script>

<style lang="scss">
	@import '~themes/lottery';
</style>