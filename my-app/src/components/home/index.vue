<template>
	<div>
	    <wc-swiper class="swiper" v-if="list.length" @transitionend="transitionend" ref="swiper2" :defaultSlide="0" :interval="4000" :pagination="true">
	        <wc-slide v-for="(index, key) in imgList" :key="key">
	            <router-link :to="{ path:'/comicDetail'}">
					<img :src= index></img>
				</router-link>
	        </wc-slide>
	    </wc-swiper> 
		<!--分类列表-->
		<ul class="menu-list">
        <li class="item">
            <a class="link" href="/category/index" data-name="category">
                <i class="icon category">[分]</i>
                <span class="name">分类</span>
            </a>
        </li>
        <li class="item">
            <a class="link" href="/rank/index?type=pgv" data-name="rank">
                <i class="icon rank">[奖]</i>
                <span class="name">排行</span>
            </a>
        </li>
        <li class="item">
            <a class="link" href="/comic/schedule" data-name="schedule">
                <i class="icon time">[表]</i>
                <span class="name">追更</span>
            </a>
        </li>
        <li class="item">
            <a class="link" href="/bookshelf/index?type=his" data-name="history">
                <i class="icon history">[钟]</i>
                <span class="name">历史</span>
            </a>
        </li>
    </ul>
	<!--条漫推荐-->
	<section class="recommend">
		<h2 class="sub-title">
			<strong class="title-content">[无良推荐]</strong>
			<small class="desc">“看看小编们的恶趣味吧”</small>
			<a class="link-more" href="/index/more/type/suggest">[更多]</a>
		</h2>
		<!-- 智能推荐模块配置 end -->
		<ul class="comic-list col-3 no-tag recommend-list">
				<li class="comic-item item-1" v-for="item of hotMovieList" :key="item.id">
					<a class="comic-link" href="/" data-id="547278" data-trace-id="910_112.234.246.12_1530844933" data-pos="1">
						<div class="comic-cover">
							<img class="cover-image" :src="item.cover_url">
						</div>
						<div class="comic-content">
							<strong class="comic-title">{{item.title}}</strong>
							<small class="comic-desc">
								{{item.short_desc}}
							</small>
						</div>
					</a>
				</li>
				
			</ul>
	</section>
    <!--每日一推-->
	<section class="light-comic">
    <h2 class="sub-title">
        <strong class="title-content">[每日一推]</strong>
        <small class="desc">“弹幕君出没，快去抓住它！”</small>
        <a class="link-more" href="/">[更多]</a>
    </h2>
        <div class="light-comic-recommend" data-id="631863">
			<router-link :to="{ path:'/comicDetail'}" class="link comic-cover">
				<img class="cover-image" src="https://manhua.qpic.cn/operation/0/23_09_49_137fe1ddc046bc8eaf7376fdcf61e966_1521769765735.jpg/0">
            <a class="link comic-title">
                <span class="text">女神在上</span>
                <small class="artist">作者：2m</small>
            </a>
			</router-link>
        </div>
    </section>
    <!--特别君-->
	<section class="promotion">
        <h2 class="sub-title">
            <strong class="title-content">[特别君]</strong>
            <small class="desc"></small>
        </h2>
        <ul class="promotion-list">
            <li class="promotion-item">
                <a class="promotion-link" href="/" data-pos="1">
                    <img class="promotion-cover" src="../../common/index/images/promotion-topics.jpg">
                </a>
            </li>
            <li class="promotion-item">
                <a class="promotion-link" href="/" data-pos="2">
                    <img class="promotion-cover" src="../../common/index/images/promotion-vip.jpg">
                </a>
            </li>
        </ul>
    </section>
    <!--今日更新-->
	<section class="update-today">
		<h2 class="sub-title">
			<strong class="title-content">[今日我更新]</strong>
			<small class="desc">“已把作者逼疯，吐血ing...”</small>
			<a class="link-more" href="/">[更多]</a>
		</h2>
		<div class="update-area">
			<aside class="npc-2">[NPC图片2]</aside>
			<ul class="comic-list col-1">
				<li class="comic-item item-1" v-for="item of hotMovieDetil" :key="item.id">
					<a class="comic-link" href="/" data-id="632719" data-pos="1">
						<div class="comic-cover">
							<img class="cover-image" :src="item.cover_url">
						</div>
						<div class="comic-content">
							<strong class="comic-title">{{item.title}}</strong>
							<small class="comic-artist">描述：{{item.short_desc}}</small>
							<small class="comic-artist">更新到{{item.id}}话</small>
							<ul class="rank-bar">
								<li class="rank-star">[星]</li>
								<li class="rank-star">[星]</li>
								<li class="rank-star">[星]</li>
								<li class="rank-star">[星]</li>
								<li class="rank-star">[星]</li>
								<li class="rank-score">9.2</li>
							</ul>
						</div>
					</a>
				</li>
			</ul>
		</div>
	</section>
		<footer class="bottom">
			<div class="bottom-row">
				<i class="npc-3">[NPC图片3]</i>
				<a class="link f-3" href="http://ac.qq.com/index?platform=1">电脑版</a>
				<!--<a class="link f-3 em" href="http://ac.qq.com/index?platform=1">电脑版</a>-->
				<!--<a class="link f-2">旧版</a>-->
				<a class="link f-2" href="/help.html">帮助</a>
				<a class="link f-4 support" href="http://wap.3g.qq.com/g/s?aid=wapsupport&amp;fid=1130">意见反馈</a>
			</div>
		</footer>
	</div>
</template>
<script src="./script.js"></script>
<style lang="scss" src="./style.scss"></style>