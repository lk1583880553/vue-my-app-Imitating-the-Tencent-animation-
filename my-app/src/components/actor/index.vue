<template>
	<mt-loadmore topPullText="上拉刷新" bottomPullText="下拉加载" bottomDropText="释放加载" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		<ul class="actorlist">
			<router-link :to='{path:"/actorDetail", query: {id: item.id}}' tag='li' v-for = 'item of ActorList' :key = 'item.id'>
				<img :src="item.avatars.small" :alt="item.alt">
				{{ item.name }} --- {{item.id}}
			</router-link>
	    </ul>
    </mt-loadmore>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>