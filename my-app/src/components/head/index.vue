<template>
	<!--<div class="goTop" @click="goTop">
		<mt-header title="首页">
		<mt-button icon="back" slot="left" @click="goback">返回</mt-button>
		<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>-->
	<div class="goTop">
		<!--顶栏-->
		<header class="top-bar no-title">
		    <a class="btn-top back">[返回]</a>
		
		    <h1 class="top-title">#top_title#</h1>
		
		    <div class="top-logo">[腾讯动漫LOGO]</div>
		
		    <div class="padding"></div>
		    <a class="btn-top search" href="/search/index">[搜索]</a>
		    <a class="btn-top menu">[菜单]</a>
		</header>
		<!--导航菜单-->
		<div class="nav-menu-box" data-animating="" style="display: none;">
			<div class="nav-menu-bg"></div>
			<div class="nav-menu">
				<ul class="nav-list">
					<li class="item" data-name="index">
						<a class="link" href="/">
							<i class="icon index">[家]</i>
							<span class="name">首页</span>
						</a>
					</li>
					<li class="item" data-name="bookshelf">
						<a class="link" href="/bookshelf/index">
							<i class="icon collect">[袋]</i>
							<span class="name">收藏</span>
						</a>
					</li>
					<li class="item" data-name="history">
						<a class="link" href="/bookshelf/index?type=his">
							<i class="icon history">[钟]</i>
							<span class="name">历史</span>
						</a>
					</li>
					<li class="item" data-name="category">
						<a class="link" href="/category/index">
							<i class="icon category">[分]</i>
							<span class="name">分类</span>
						</a>
					</li>
					<li class="item" data-name="rank">
						<a class="link" href="/rank/index?type=pgv">
							<i class="icon rank">[奖]</i>
							<span class="name">排行</span>
						</a>
					</li>
					<li class="item" data-name="schedule">
						<a class="link" href="/comic/schedule">
							<i class="icon time">[表]</i>
							<span class="name">追更</span>
						</a>
					</li>
				</ul>
				<a class="btn-home" href="/home/index">[我的地盘]</a>
			</div>
		</div>
	</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped</style>