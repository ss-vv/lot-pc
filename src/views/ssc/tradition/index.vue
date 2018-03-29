<template>
	<div class="lottery-wrap l-tradition">
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
						<router-link to="/ssc/official">官方</router-link>
						<router-link to="/ssc/tradition" class="cur">信用</router-link>
					</div>
					<ul class="primary-link">
						<li class="cur" @click="changeBets">数字盘</li>
						<li @click="changeBets">双面</li>
						<li @click="changeBets">一字定位</li>
						<li @click="changeBets">二字定位</li>
						<li @click="changeBets">三字定位</li>
						<li @click="changeBets">一字组合</li>
						<li @click="changeBets">组选三</li>
						<li @click="changeBets">组选六</li>
						<li @click="changeBets">跨度</li>
						<li @click="changeBets">龙虎</li>
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
											<th>万位</th>
											<th>千位</th>
											<th>百位</th>
											<th>十位</th>
											<th>个位</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td class="active">
												<span class="bet-ball">0</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">0</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">0</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">0</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">0</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">1</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">2</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">3</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">4</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">5</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">6</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<td>
												<span class="bet-ball">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball">7</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<th>万位</th>
											<th>千位</th>
											<th>百位</th>
											<th>十位</th>
											<th>个位</th>
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
												<span class="bet-ball txt">质</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">质</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">质</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">质</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">质</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<span class="bet-ball txt">合</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
											</td>
											<td>
												<span class="bet-ball txt">合</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
											<th colspan="4">总和、龙虎和</th>
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
										<tr>
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
												<span class="bet-ball txt">和</span>
												<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 2"> <!--一字定位-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li> <span class="sec-link cur"  @click="changeSubBets" data-subBet="yzdw-wdw">万位</span><span class="sec-link"  @click="changeSubBets" data-subBet="yzdw-qdw">千位</span> <span class="sec-link"  @click="changeSubBets" data-subBet="yzdw-bdw">百位</span><span class="sec-link"  @click="changeSubBets" data-subBet="yzdw-sdw">十位</span><span class="sec-link"  @click="changeSubBets" data-subBet="yzdw-gdw">个位</span></li>
								</ul>
							</div>
							<template v-if="curSubBet === 'yzdw-wdw'"> <!--万定位-->
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
												<th>万位</th>
												<th>千位</th>
												<th>百位</th>
												<th>十位</th>
												<th>个位</th>
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
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="4">总和、龙虎和</th>
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
											<tr>
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
													<span class="bet-ball txt">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzdw-qdw'"> <!--千定位-->
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
												<th>万位</th>
												<th>千位</th>
												<th>百位</th>
												<th>十位</th>
												<th>个位</th>
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
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzdw-bdw'"> <!--百定位-->
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
												<th>万位</th>
												<th>千位</th>
												<th>百位</th>
												<th>十位</th>
												<th>个位</th>
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
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzdw-sdw'"> <!--十定位-->
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
												<th>万位</th>
												<th>千位</th>
												<th>百位</th>
												<th>十位</th>
												<th>个位</th>
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
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzdw-gdw'"> <!--个定位-->
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
												<th>万位</th>
												<th>千位</th>
												<th>百位</th>
												<th>十位</th>
												<th>个位</th>
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
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">质</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball txt">合</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 3"> <!--二字定位-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link cur"  @click="changeSubBets" data-subBet="ezdw-wq">万千</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-wb">万百</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-ws">万十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-wg">万个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-qb">千百</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-qs">千十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-qg">千个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-bs">百十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-bs">百个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="ezdw-sg">十个</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'ezdw-wq'"> <!--万千-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-wb'"> <!--万百-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-ws'"> <!--万十-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-wg'"> <!--万个-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-qb'"> <!--千百-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-qs'"> <!--千十-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-qg'"> <!--千个-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-bs'"> <!--百十-->
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-bg'"> <!--百个-->
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'ezdw-sg'"> <!--十个-->
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 4"> <!--三字定位-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link cur"  @click="changeSubBets" data-subBet="szdw-wqb">万千百</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-wqs">万千十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-wqg">万千个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-wbs">万百十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-wbg">万百个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-wsg">万十个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-qbs">千百十</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-qbg">千百个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-qsg">千十个</span>
										<span class="sec-link"  @click="changeSubBets" data-subBet="szdw-bsg">百十个</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'szdw-wqb'"> <!--万千百-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-wqs'"> <!--万千十-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-wqg'"> <!--万千个-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-wbs'"> <!--万百十-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-wbg'"> <!--万百个-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-wsg'"> <!--万十个-->
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
												<th colspan="5">万千定位（万）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-qbs'"> <!--千百十-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-qbg'"> <!--千百个-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-qsg'"> <!--千十个-->
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
												<th colspan="5">万千定位（千）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'szdw-bsg'"> <!--百十个-->
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
												<th colspan="5">万千定位（百）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（十）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th colspan="5">万千定位（个）</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 5"> <!--一字组合-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link txt6 cur"  @click="changeSubBets" data-subBet="yzzh-qwyzzh">全五一字组合</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="yzzh-qsyzzh">前三一字组合</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="yzzh-zsyzzh">中三一字组合</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="yzzh-hsyzzh">后三一字组合</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'yzzh-qwyzzh'"> <!--全五一字组合-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzzh-qsyzzh'"> <!--前三一字组合-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzzh-zsyzzh'"> <!--中三一字组合-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'yzzh-hsyzzh'"> <!--后三一字组合-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 6"> <!--组选三-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link txt6 cur"  @click="changeSubBets" data-subBet="zxs-qszxs">前三组选三</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="zxs-zszxs">中三组选三</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="zxs-hszxs">后三组选三</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'zxs-qszxs'"> <!--前三组选三-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'zxs-zszxs'"> <!--中三组选三-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'zxs-hszxs'"> <!--后三组选三-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 7"> <!--组选六-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link txt6 cur"  @click="changeSubBets" data-subBet="zxs-qszxl">前三组选六</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="zxs-zszxl">中三组选六</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="zxs-hszxl">后三组选六</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'zxs-qszxl'"> <!--前三组选六-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'zxs-zszxl'"> <!--中三组选六-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'zxs-hszxl'"> <!--后三组选六-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 8"> <!--跨度-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link txt6 cur"  @click="changeSubBets" data-subBet="kd-qskd">前三跨度</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="kd-zskd">中三跨度</span>
										<span class="sec-link txt6"  @click="changeSubBets" data-subBet="kd-hskd">后三跨度</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'kd-qskd'"> <!--前三跨度-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'kd-zskd'"> <!--中三跨度-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
							<template v-if="curSubBet === 'kd-hskd'"> <!--后三跨度-->
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
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">0</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">1</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">2</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">3</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">4</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">5</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">6</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">7</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">8</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">9</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
					<template v-if="curBet === 9"> <!--龙虎-->
						<div class="bet-lef tradition">
							<div class="secondary-link-wrap">
								<ul>
									<li>
										<span class="sec-link cur"  @click="changeSubBets" data-subBet="lh">龙虎</span>
									</li>
								</ul>
							</div>
							<template v-if="curSubBet === 'lh'"> <!--龙虎-->
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
												<th>万千</th>
												<th>万百</th>
												<th>万十</th>
												<th>万个</th>
												<th>千百</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<th>千十</th>
												<th>千个</th>
												<th>百十</th>
												<th>百个</th>
												<th>十个</th>
											</tr>
											</thead>
											<tbody>
											<tr>
												<td class="active">
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">龙</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">和</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
																v-for="item in Bet1options"
																:key="item.value"
																:label="item.label"
																:value="item.value">
														</el-option>
													  </el-select>
													</template>
												</span>
												</td>
												<td>
													<span class="bet-ball">虎</span>
													<span class="bet-times">x 9.85</span>
												<span class="bet-input float-right">
													<template v-if="!kjje">
														<input type="text">
													</template>
													<template v-if="kjje"> <!--快捷金额按钮勾选时显示，其它的号码球也一样-->
														<el-select v-model="valueB1" placeholder="请选择" class="select-input">
														<el-option
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
								<span class="ball">6</span>
								<span class="ball">1</span>
								<span class="ball">0</span>
								<span class="ball">6</span>
								<span class="ball">9</span>
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
								<span class="ball dragon">龙</span>
								<span class="ball tiger">虎</span>
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
					title:'时时彩 - 结果走势图'
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
					case 2: this.curSubBet = 'yzdw-wdw';break;
					case 3: this.curSubBet = 'ezdw-wq';break;
					case 4: this.curSubBet = 'szdw-wqb';break;
					case 5: this.curSubBet = 'yzzh-qwyzzh';break;
					case 6: this.curSubBet = 'zxs-qszxs';break;
					case 7: this.curSubBet = 'zxs-qszxl';break;
					case 8: this.curSubBet = 'kd-qskd';break;
					case 9: this.curSubBet = 'lh';break;
				}
				setTimeout(function () {// 等切换的内容加载出来后，再进行class操作
					switch (_this.curBet){
						case 2: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="yzdw-wdw"]').addClass('cur');break;
						case 3: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="ezdw-wq"]').addClass('cur');break;
						case 4: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="szdw-wqb"]').addClass('cur');break;
						case 5: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="yzzh-qwyzzh"]').addClass('cur');break;
						case 6: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="zxs-qszxs"]').addClass('cur');break;
						case 7: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="zxs-qszxl"]').addClass('cur');break;
						case 8: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="kd-qskd"]').addClass('cur');break;
						case 9: $('.sec-link').removeClass('cur');$('.sec-link[data-subbet="lh"]').addClass('cur');break;
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
			$('.ph-tabs-table-wra').niceScroll({cursorcolor:"#cfcfcf"}) // 开奖历史表格滚动
		}
	}
</script>

<style lang="scss">
	@import '~themes/lottery';
</style>