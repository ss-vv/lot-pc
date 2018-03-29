<template>
    <div class="home-page">
        <div class="left-p float-left">
            <div class="par1 float-left">
                <div class="pro-ban">
                    <el-carousel height="210px">
                        <el-carousel-item v-for="item in lunbo" :key="item.ind">
                            <div>
                                <img :src="item.src" >
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="pro-txt">
                    <el-row>
                        <el-col :span="8">
                            <div class="txt">存款到账</div>
                            <div class="mount">0.3秒</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="txt">取款到账</div>
                            <div class="mount">0.3秒</div>
                        </el-col>
                        <el-col :span="8">
                            <div class="txt">存款到账</div>
                            <div class="mount">0.3秒</div>
                        </el-col>
                    </el-row>
                </div>
                <div class="price-list">
                    <div class="wra">
                      <ul>
                          <li>恭喜  b***u  会员在 <span class="color-blue">重庆时时彩</span> <span class="float-right">喜中 <span class="color-orange">30447.00</span> 元</span></li>
                          <li>恭喜  b***u  会员在 <span class="color-blue">重庆时时彩</span> <span class="float-right">喜中 <span class="color-orange">30447.00</span> 元</span></li>
                          <li>恭喜  b***u  会员在 <span class="color-blue">重庆时时彩</span> <span class="float-right">喜中 <span class="color-orange">30447.00</span> 元</span></li>
                          <li>恭喜  b***u  会员在 <span class="color-blue">重庆时时彩</span> <span class="float-right">喜中 <span class="color-orange">30447.00</span> 元</span></li>
                      </ul>
                    </div>
                </div>
            </div>
            <div class="par2 float-left">
                <div class="tit">优惠活动</div>
                <div class="promo-lis">
                    <el-carousel height="440px" arrow="always" trigger="click" :autoplay=false>
                        <el-carousel-item v-for="item in promoList" :key="item.ind">
                            <div class="promo-item-wrap">
                                <div class="promo-item" v-for="data in item.data">
                                    <div class="icon-cz" :class="data.cz"></div>
                                    <div class="float-left txt-info">
                                        <div>
                                            {{data.czName}} <span class="color-blue">{{data.qs}}</span>
                                        </div>
                                        <div>
                                            <span class="color-orange">开奖号码：{{data.num}}</span>
                                        </div>
                                    </div>
                                    <router-link to="" class="btn-tz">立即投注</router-link>
                                </div>
                            </div>
                        </el-carousel-item>
                        <div class="dot"></div>
                    </el-carousel>
                </div>
            </div>
            <div class="clear"></div>
            <div class="par3">
                <div class="lef-p">
                    <div class="tit">新手指南</div>
                    <div class="new-guide">
                        <div class="g-item">
                            <div class="icon ng-1"></div>
                            <div class="txt1">注册用户</div>
                            <div class="txt2">输入基本信息成为会员</div>
                        </div>
                        <div class="g-item">
                            <div class="icon ng-2"></div>
                            <div class="txt1">进行存款</div>
                            <div class="txt2">存款获取游戏筹码</div>
                        </div>
                        <div class="g-item">
                            <div class="icon ng-3"></div>
                            <div class="txt1">开始投注</div>
                            <div class="txt2">选择彩种开始投注</div>
                        </div>
                        <div class="g-item">
                            <div class="icon ng-4"></div>
                            <div class="txt1">提取现金</div>
                            <div class="txt2">玩到足够额度可申请取款</div>
                        </div>
                    </div>
                </div>
                <div class="float-left qrcode">
                    <div class="qcode-tab">
                        <el-tabs v-model="qcodeActiveName" tab-position="left">
                            <el-tab-pane label="苹果下载端" name="first">
                                <img src="/src/assets/images/qrsample.png">
                            </el-tab-pane>
                            <el-tab-pane label="安卓下载端" name="second">
                                <img src="/src/assets/images/qrsample.png">
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                    <div class="q-txt">扫描二维码移动端上更多精彩！</div>
                </div>
            </div>
        </div>
        <div class="rig-p float-left">
            <div class="tit">通知公告</div>
            <div class="notice-lis">
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
                <div class="notice-item">
                    <router-link to="">
                        <div class="new-item float-left">最新</div>
                        <div class="float-left txt">
                            <div class="title">站点服务规则（彩民必读）</div>
                            <div class="tim">2017-11-17 14:57:08 </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data () {
        return {
            qcodeActiveName: 'first',
            lunbo: [
                { src:"/src/assets/images/lun1.png", ind:1},
                { src:"/src/assets/images/lun1.png", ind:2}
            ],
            promoList: [
                { name:'lun1',ind:1,data:[
                    {cz:'ssc',czName:'重庆时时彩',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'pk10',czName:'北京pk10',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'k3',czName:'快3',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'lhc',czName:'六合彩',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'pl3',czName:'排列3',qs:'20180223674',num:'0 0 3 4 6'}
                    ]
                },
                { name:'lun2',ind:2,data:[
                    {cz:'fc3d',czName:'福彩3d',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'kl8',czName:'快乐8',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'xy28',czName:'幸运28',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'lhc',czName:'六合彩',qs:'20180223674',num:'0 0 3 4 6'},
                    {cz:'pl3',czName:'排列3',qs:'20180223674',num:'0 0 3 4 6'}
                ]
                }
            ]
        }
    },
    mounted () {
        $('.notice-lis').niceScroll({cursorcolor:"#cfcfcf"}) // 右侧内容超出滚动
    }
}
</script>

<style lang="scss">
    @import '~themes/home'
</style>