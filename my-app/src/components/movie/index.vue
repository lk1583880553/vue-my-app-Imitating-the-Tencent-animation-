<template>
	<div>
		<h3>兄弟组件通信</h3>
		<v-box></v-box>
		<v-pox></v-pox>
		<hr/>
		<ul class="movieList">
			<li v-for="item in movieList" :key="item.movieId">
				<img :src="item.pic_url" :alt="item.alt">
				{{item.movieName}}
			</li>
		</ul>
	</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>