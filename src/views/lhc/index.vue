<template>
	<div class="lottery-wrap">
		<div class="lottery-head">
			<div class="container">
				<div class="lef-par">
					<img src="/src/assets/images/img-lhc.png" class="lotto-img">
					<div class="hea-nam-are">
						<div class="hea-name">六合彩</div>
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
				<div class="rig-par dra-lhc">
					<div class="kj-tit">第201801171039 期 <span>开奖结果</span></div>
					<div class="draw-a-lotto">
						<span class="ball-lhc lhc-n30">30</span>
						<span class="ball-lhc lhc-n16">16</span>
						<span class="ball-lhc lhc-n10">10</span>
						<span class="ball-lhc lhc-n23">23</span>
						<span class="ball-lhc lhc-n16">16</span>
						<span class="ball-lhc lhc-n10">10</span>
						<span class="ball-lhc lhc-plus">+</span>
						<span class="ball-lhc lhc-n48">48</span>
						<div class="txt-animal-wrap">
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc">龙</span>
							<span class="ball-lhc lhc-blank"></span>
							<span class="ball-lhc">龙</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="lotto-bet-area">
				<div class="bet-top">
					<ul class="primary-link">
						<li class="cur" @click="changeBets">特码</li>
						<li @click="changeBets">正码</li>
						<li @click="changeBets">正码特</li>
						<li @click="changeBets">正码1-6</li>
						<li @click="changeBets">半波</li>
						<li @click="changeBets">一肖</li>
						<li @click="changeBets">特肖</li>
						<li @click="changeBets">连码</li>
						<li @click="changeBets">合肖</li>
						<li @click="changeBets">连肖</li>
						<li @click="changeBets">尾数连</li>
						<li @click="changeBets">全不中</li>
					</ul>
				</div>
				<div class="bet-area">
					<template v-if="curBet === 0"> <!--特码-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">特码</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="top-bar">
									<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
									<a href="javascript:void(0);" class="btn">预设</a>
									金额 <div class="mone-input"><input type="text"></div>
									<div class="float-right">
										<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
									</div>
								</div>
								<!--投注表格区-->
								<div class="bet-cont-c">
									<table class="bet-t">
										<thead>
										<tr>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball txt">单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">大</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合大</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">大单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball txt">双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">小</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合小</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">大双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball txt">小单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">小双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">尾大</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">尾小</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">红波</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball txt">绿波</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">蓝波</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<div class="bet-btn-wrap">
										<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
									</div>
								</div>
							</div>
						</div>
					</template>
					<template v-if="curBet === 1"> <!--正码-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">正码</span></li>
								</ul>
							</div>
							<div class="bet-cont">
								<div class="top-bar">
									<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
									<a href="javascript:void(0);" class="btn">预设</a>
									金额 <div class="mone-input"><input type="text"></div>
									<div class="float-right">
										<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
									</div>
								</div>
								<!--投注表格区-->
								<div class="bet-cont-c">
									<table class="bet-t">
										<thead>
										<tr>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
											<th class="padding-h-5">
												<span class="float-left">号码</span> <span class="float-right">金额</span>
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<table class="bet-t">
										<thead>
										<tr>
											<th colspan="5">
												总和
											</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball txt">总大</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">总小</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">总单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">总双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<div class="bet-btn-wrap">
										<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
									</div>
								</div>
							</div>
						</div>
					</template>
					<template v-if="curBet === 2"> <!--正码特-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link cur"  @click="changeSubBets" data-subBet="zmt-zmy">正码一</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="zmt-zme">正码二</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="zmt-zms">正码三</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="zmt-zmsi">正码四</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="zmt-zmw">正码五</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="zmt-zml">正码六</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'zmt-zmy'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'zmt-zme'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'zmt-zms'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'zmt-zmsi'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'zmt-zmw'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
							<template v-if="curSubBet === 'zmt-zml'">
								<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n11">11</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n21">21</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n31">31</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n41">41</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n22">22</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n32">32</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n42">42</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n3">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n33">33</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n43">43</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n4">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n14">14</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n44">44</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n5">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n15">15</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n25">25</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n6">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n16">16</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n26">26</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n36">36</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n17">17</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n27">27</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n37">37</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n47">47</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n28">28</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n38">38</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n48">48</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n9">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n39">39</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n49">49</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball bet-ball-lhc lhc-n10">10</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n20">20</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
												<th class="padding-h-5">
													<span class="float-left">号码</span> <span class="float-right">金额</span>
												</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
							</template>
						</div>
					</template>
					<template v-if="curBet === 3"> <!--正码1-6-->
						<div class="bet-lef tradition">
							<div class="bet-cont">
									<div class="top-bar">
										<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
										<a href="javascript:void(0);" class="btn">预设</a>
										金额 <div class="mone-input"><input type="text"></div>
										<div class="float-right">
											<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
										</div>
									</div>
									<!--投注表格区-->
									<div class="bet-cont-c">
										<table class="bet-t">
											<thead>
											<tr>
												<th>正码一</th>
												<th>正码二</th>
												<th>正码三</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<table class="bet-t">
											<thead>
											<tr>
												<th>正码三</th>
												<th>正码四</th>
												<th>正码五</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">红波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">蓝波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">绿波</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合单</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">合双</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾大</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											<tr>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td class="active">
													<span class="bet-ball txt">尾小</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
											</tr>
											</tbody>
										</table>
										<div class="bet-btn-wrap">
											<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
										</div>
									</div>
								</div>
						</div>
					</template>
					<template v-if="curBet === 4"> <!--半波-->
						<div class="bet-lef tradition">
							<div class="bet-cont">
								<div class="top-bar">
									<a href="javascript:void(0);" class="btn" :class="{active: kjje}" @click="kjje = !kjje">快捷金额</a>
									<a href="javascript:void(0);" class="btn">预设</a>
									金额 <div class="mone-input"><input type="text"></div>
									<div class="float-right">
										<div class="jgzs" @click="traZst">结果走势 <i class="icon-layer"></i></div>
									</div>
								</div>
								<!--投注表格区-->
								<div class="bet-cont-c">
									<table class="bet-t">
										<thead>
										<tr>
											<th>红单</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active padding-h-20">
												<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
												<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
												<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
												<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
												<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
												<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
												<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
												<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<table class="bet-t">
										<thead>
										<tr>
											<th>红双</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active padding-h-20">
												<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
												<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
												<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
												<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
												<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
												<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
												<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
												<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
												<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<table class="bet-t">
										<thead>
										<tr>
											<th>红大</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active padding-h-20">
												<span class="bet-ball bet-ball-lhc lhc-n29">29</span>
												<span class="bet-ball bet-ball-lhc lhc-n30">30</span>
												<span class="bet-ball bet-ball-lhc lhc-n34">34</span>
												<span class="bet-ball bet-ball-lhc lhc-n35">35</span>
												<span class="bet-ball bet-ball-lhc lhc-n40">40</span>
												<span class="bet-ball bet-ball-lhc lhc-n45">45</span>
												<span class="bet-ball bet-ball-lhc lhc-n46">46</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<table class="bet-t">
										<thead>
										<tr>
											<th>红小</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active padding-h-20">
												<span class="bet-ball bet-ball-lhc lhc-n1">1</span>
												<span class="bet-ball bet-ball-lhc lhc-n2">2</span>
												<span class="bet-ball bet-ball-lhc lhc-n7">7</span>
												<span class="bet-ball bet-ball-lhc lhc-n8">8</span>
												<span class="bet-ball bet-ball-lhc lhc-n12">12</span>
												<span class="bet-ball bet-ball-lhc lhc-n13">13</span>
												<span class="bet-ball bet-ball-lhc lhc-n18">18</span>
												<span class="bet-ball bet-ball-lhc lhc-n19">19</span>
												<span class="bet-ball bet-ball-lhc lhc-n23">23</span>
												<span class="bet-ball bet-ball-lhc lhc-n24">24</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
										</tr>
										</tbody>
									</table>
									<div class="bet-btn-wrap">
										<a href="javascript:void(0);" class="btn-bet">提交注单</a><a href="javascript:void(0);" class="btn-reset">重置投注</a>
									</div>
								</div>
							</div>
						</div>
					</template>
					<div class="bet-right tradition">
						<template v-if="curBet === 0"><!--特码-->
							<div class="hcl-filter">
								<table>
									<tbody>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>合单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>合双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小单</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>尾大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>尾小</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>鼠</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>牛</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>虎</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>兔</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>龙</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>蛇</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>马</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>羊</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>猴</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>鸡</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>狗</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>猪</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>红波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>蓝波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>绿波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>全选</span></el-checkbox></td>
									</tr>
									</tbody>
								</table>
							</div>
						</template>
						<template v-if="curBet === 1"><!--正码-->
							<div class="hcl-filter">
								<table>
									<tbody>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>合单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>合双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小单</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>大双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>小双</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>尾大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>尾小</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>鼠</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>牛</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>虎</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>兔</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>龙</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>蛇</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>马</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>羊</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>猴</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>鸡</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>狗</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>猪</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-red">红</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-green">绿</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>大</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>小</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>单</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span><span class="color-blue">蓝</span>双</span></el-checkbox></td>
									</tr>
									<tr>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>红波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>蓝波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>绿波</span></el-checkbox></td>
										<td><el-checkbox class="myCheckbox" v-model="filterChecked"><span>全选</span></el-checkbox></td>
									</tr>
									</tbody>
								</table>
							</div>
						</template>
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
		<div class="traZst" id="traZst" style="display:none;"> <!--弹窗内容-->
			<div style="width: 498px;height: 464px;">
				<div class="tz-tab-hea">
					<table>
						<thead>
						<tr>
							<th style="width: 90px;">期数</th>
							<th style="width: 50px;">时间</th>
							<th> <!--点击这块下面的表格切换-->
								<span class="btn cur">号码</span>
								<span class="btn">大小</span>
								<span class="btn">单双</span>
								<span class="btn">总和/龙虎</span>
							</th>
						</tr>
						</thead>
						<tbody>
						<tr>
							<td style="width:90px;">10508428</td>
							<td style="width: 50px;">14:52</td>
							<td>
								<span class="ball ball-lhc lhc-n1">1</span>
								<span class="ball ball-lhc lhc-n2">2</span>
								<span class="ball ball-lhc lhc-n3">3</span>
								<span class="ball ball-lhc lhc-n4">4</span>
								<span class="ball ball-lhc lhc-n5">5</span>
							</td>
						<tr>
							<td style="width:90px;">10508428</td>
							<td style="width: 50px;">14:52</td>
							<td>
								<span class="ball big">大</span>
								<span class="ball small">小</span>
							</td>
						</tr>
						<tr>
							<td style="width:90px;">10508428</td>
							<td style="width: 50px;">14:52</td>
							<td>
								<span class="ball single">单</span>
								<span class="ball double">双</span>
								<span class="ball dragon">龙</span>
								<span class="ball tiger">虎</span>
							</td>
						</tr>
						</tr>
						</tbody>
					</table>
				</div>
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
				phActiveName: 'first',
				TraZsDisplay: 'none',
				kjje: false,
				valueCm: '1',
				valueYl: '1',
				valueBetballTable: '1',
				betDXLH:'dx',
				curSubBet: 'tm',
				Bet1options: [{
					value: '1',
					label: '10元'
				}, {
					value: '2',
					label: '100元'
				}, {
					value: '3',
					label: '500元'
				}, {
					value: '4',
					label: '1000元'
				}, {
					value: '5',
					label: '5000元'
				}, {
					value: '6',
					label: '10000元'
				}],
				valueB1: '',
				curBet: 0, // 默认玩法
				filterChecked: true
			}
		},
		methods: {
			traZst () { // 走势弹窗
				this.$layer.alert($('#traZst').html(),{
					title:'六合彩 - 结果走势图'
				});
				$(".vl-notify-alert").addClass('traZst');
				$('.traZst .vl-notify-content>div').niceScroll({cursorcolor:"#cfcfcf"}) // 开奖历史表格滚动
			},
			betBDXLHhandle (e) { // 大小单双龙虎的切换
				$(e.target).siblings().removeClass('cur');
				$(e.target).addClass('cur');
				switch ($(e.target).index()) {
					case 0:this.betDXLH = 'dx';break;
					case 1:this.betDXLH = 'ds';break;
					case 2:this.betDXLH = 'lh';break;
				}
			},
			changeBets (e) {// 玩法切换
				this.curBet = $(e.target).index()
				var _this = this;
				switch (this.curBet){// 切换时默认选中子玩法第一个
					case 2: this.curSubBet = 'zmt-zmy';break;
				}
				setTimeout(function () {// 等切换的内容加载出来后，再进行class操作
					switch (_this.curBet){
						case 2: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="zmt-zmy"]').addClass('cur');break;
					}
				},100);
				$(e.target).siblings().removeClass('cur')
				$(e.target).addClass('cur')
				$("#content").getNiceScroll()[0].init();// 内容变化时，初始化nicescroll插件
			},
			changeSubBets (e) { // 子玩法切换
				this.curSubBet = $(e.target).attr('data-subBet');
				$(e.target).parents('.secondary-link-wrap').find('.sec-link').removeClass('cur')
				$(e.target).addClass('cur')
				$("#content").getNiceScroll()[0].init();// 内容变化时，初始化nicescroll插件
			}
		},
		mounted() {
			$('body').on('click','.bet-ball', function () {// 投注球状态展示，根据逻辑开发自行添加calss
				$(this).parent().toggleClass('active')
			})
		}
	}
</script>

<style lang="scss">
	@import '~themes/lottery'
</style>