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
						<router-link to="/pk10/official">官方</router-link>
						<router-link to="/pk10/tradition" class="cur">信用</router-link>
					</div>
					<ul class="primary-link">
						<li class="cur" @click="changeBets">数字盘</li>
						<li @click="changeBets">双面</li>
						<li @click="changeBets">冠军</li>
						<li @click="changeBets">亚军</li>
						<li @click="changeBets">季军</li>
						<li @click="changeBets">第四名</li>
						<li @click="changeBets">第五名</li>
						<li @click="changeBets">第六名</li>
						<li @click="changeBets">第七名</li>
						<li @click="changeBets">第八名</li>
						<li @click="changeBets">第九名</li>
						<li @click="changeBets">第十名</li>
						<li @click="changeBets">冠亚和</li>
					</ul>
				</div>
				<div class="bet-area">
					<template v-if="curBet === 0"> <!--数字盘-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">数字盘</span></li>
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
											<th>冠军</th>
											<th>亚军</th>
											<th>季军</th>
											<th>第四名</th>
											<th>第五名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<th>第六名</th>
											<th>第七名</th>
											<th>第八名</th>
											<th>第九名</th>
											<th>第十名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 1"> <!--双面-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">双面</span></li>
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
											<th>冠军</th>
											<th>亚军</th>
											<th>季军</th>
											<th>第四名</th>
											<th>第五名</th>
										</tr>
										</thead>
										<tbody>
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
											<td>
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
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<th>第六名</th>
											<th>第七名</th>
											<th>第八名</th>
											<th>第九名</th>
											<th>第十名</th>
										</tr>
										</thead>
										<tbody>
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
											<td>
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
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">龙</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">虎</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 2"> <!--冠军-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">冠军</span></li>
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
											<th colspan="5">冠军</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 3"> <!--亚军-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">亚军</span></li>
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
											<th colspan="5">亚军</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 4"> <!--季军-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">季军</span></li>
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
											<th colspan="5">季军</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 5"> <!--第四名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第四名</span></li>
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
											<th colspan="5">第四名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 6"> <!--第五名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第五名</span></li>
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
											<th colspan="5">第五名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 7"> <!--第六名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第六名</span></li>
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
											<th colspan="5">第六名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 8"> <!--第七名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第七名</span></li>
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
											<th colspan="5">第七名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 9"> <!--第八名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第八名</span></li>
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
											<th colspan="5">第八名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 10"> <!--第九名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第九名</span></li>
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
											<th colspan="5">第九名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 11"> <!--第十名-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">第十名</span></li>
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
											<th colspan="5">第十名</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-01">01</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-02">02</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-03">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-04">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-05">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-06">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-07">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-08">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-09">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball bet-ball-pk10 bet-ball-pk10-10">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 12"> <!--冠亚和-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur">冠亚和</span></li>
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
											<th colspan="5">冠亚和</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball txt">03</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">04</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">05</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">06</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">07</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">08</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">09</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">10</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">11</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">12</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">13</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">14</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">15</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">16</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">17</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">18</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">19</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">和大</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">和小</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">和单</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">和双</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
						<div class="ph-tabs">
							<el-tabs v-model="phActiveName">
								<el-tab-pane label="出码排行" name="first">
									<div class="ph-head">
										出码排行
										<div class="ph-head-select">
											<el-select v-model="valueCm" placeholder="请选择">
												<el-option
														v-for="item in cmOptions"
														:key="item.value"
														:label="item.label"
														:value="item.value">
												</el-option>
											</el-select>
										</div>
										<div class="ph-tabs-table-wra">
											<template v-if="valueCm === '1'">
												<table class="ph-tabs-table">
													<tbody>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													</tbody>
												</table>
											</template>
											<template v-if="valueCm === '2'">
												<table class="ph-tabs-table">
													<tbody>
													<tr>
														<td style="width: 50%;">
															第二球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第二球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													</tbody>
												</table>
											</template>
										</div>
									</div>
								</el-tab-pane>
								<el-tab-pane label="遗漏排行" name="second">
									<div class="ph-head">
										遗漏排行
										<div class="ph-head-select">
											<el-select v-model="valueYl" placeholder="请选择">
												<el-option
														v-for="item in ylOptions"
														:key="item.value"
														:label="item.label"
														:value="item.value">
												</el-option>
											</el-select>
										</div>
										<div class="ph-tabs-table-wra">
											<template v-if="valueYl === '1'">
												<table class="ph-tabs-table">
													<tbody>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													</tbody>
												</table>
											</template>
											<template v-if="valueYl === '2'">
												<table class="ph-tabs-table">
													<tbody>
													<tr>
														<td style="width: 50%;">
															第二球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第二球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													<tr>
														<td style="width: 50%;">
															第一球 - - <span class="color-orange">0</span>
														</td>
														<td style="width: 50%;">2期</td>
													</tr>
													</tbody>
												</table>
											</template>
										</div>
									</div>
								</el-tab-pane>
							</el-tabs>
						</div>
						<router-link to="" class="link-zoushi">查看完整走势</router-link>
					</div>
				</div>
			</div>
			<div class="lotto-bet-ball-table"> <!--传统玩法大小单双龙虎区域-->
				<div class="bet-ball-table-select">
					<el-select v-model="valueBetballTable" placeholder="第一球">
						<el-option
								v-for="item in betBallOptions"
								:key="item.value"
								:label="item.label"
								:value="item.value">
						</el-option>
					</el-select>
				</div>
				<template v-if="valueBetballTable === '1'"> <!--第一球-->
					<div class="bet-ball-table">
						<div class="bet-ball-dxlh">
							<span class="cur" @click="betBDXLHhandle">大小</span>
							<span @click="betBDXLHhandle">单双</span>
							<span @click="betBDXLHhandle">龙虎</span>
						</div>
						<table class="table-1">
							<tr>
								<th>号码</th>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
							<tr>
								<td>出球率</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
							</tr>
						</table>
						<template v-if="betDXLH === 'dx'">
							<table class="table-2">
								<tr>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
								</tr>
								<tr>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td></td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td></td>
									<td>大</td>
									<td></td>
									<td>大</td>
									<td>大</td>
									<td></td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
								</tr>
							</table>
						</template>
						<template v-if="betDXLH === 'ds'">
							<table class="table-2">
								<tr>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
								</tr>
								<tr>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
								</tr>
							</table>
						</template>
						<template v-if="betDXLH === 'lh'">
							<table class="table-2">
								<tr>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
								</tr>
								<tr>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
								</tr>
							</table>
						</template>
					</div>
				</template>
				<template v-if="valueBetballTable === '2'"> <!--第二球-->
					<div class="bet-ball-table">
						<div class="bet-ball-dxlh">
							<span class="cur" @click="betBDXLHhandle">大小</span>
							<span @click="betBDXLHhandle">单双</span>
							<span @click="betBDXLHhandle">龙虎</span>
						</div>
						<table class="table-1">
							<tr>
								<th>号码（2）</th>
								<th>0</th>
								<th>1</th>
								<th>2</th>
								<th>3</th>
								<th>4</th>
								<th>5</th>
								<th>6</th>
								<th>7</th>
								<th>8</th>
								<th>9</th>
							</tr>
							<tr>
								<td>出球率</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td>10</td>
							</tr>
						</table>
						<template v-if="betDXLH === 'dx'">
							<table class="table-2">
								<tr>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
								</tr>
								<tr>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td></td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>大</td>
									<td>小</td>
									<td></td>
									<td>大</td>
									<td></td>
									<td>大</td>
									<td>大</td>
									<td></td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>小</td>
									<td>大</td>
									<td>小</td>
									<td>大</td>
								</tr>
							</table>
						</template>
						<template v-if="betDXLH === 'ds'">
							<table class="table-2">
								<tr>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
								</tr>
								<tr>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>双</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
									<td>单</td>
								</tr>
							</table>
						</template>
						<template v-if="betDXLH === 'lh'">
							<table class="table-2">
								<tr>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
								</tr>
								<tr>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>虎</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
									<td>龙</td>
								</tr>
							</table>
						</template>
					</div>
				</template>
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
							<th>
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
								<span class="ball ball-pk10 ball-pk10-01">01</span>
								<span class="ball ball-pk10 ball-pk10-02">02</span>
								<span class="ball ball-pk10 ball-pk10-03">03</span>
								<span class="ball ball-pk10 ball-pk10-04">04</span>
							</td>
						</tr>
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
							</td>
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
				cmOptions: [{
					value: '1',
					label: '第一球'
				}, {
					value: '2',
					label: '第二球'
				}],
				ylOptions: [{
					value: '1',
					label: '第一球'
				}, {
					value: '2',
					label: '第二球'
				}],
				betBallOptions: [{
					value: '1',
					label: '第一球'
				}, {
					value: '2',
					label: '第二球'
				}],
				valueCm: '1',
				valueYl: '1',
				valueBetballTable: '1',
				betDXLH:'dx',
				curSubBet: 'yzdw-wdw',
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
				curBet: 0 // 默认玩法
			}
		},
		methods: {
			traZst () { // 走势弹窗
				this.$layer.alert($('#traZst').html(),{
					title:'PK10 - 结果走势图'
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
			$('.bet-ball').on('click', function () {// 投注球状态展示，根据逻辑开发自行添加calss
				$(this).parent().toggleClass('active')
			});
			$('.ph-tabs-table-wra').niceScroll({cursorcolor:"#cfcfcf"}) // 开奖历史表格滚动
		}
	}
</script>

<style lang="scss">
	@import '~themes/lottery'
</style>