<template>
	<div>
		<ul class="directorList">
			<li v-for="item in directorList" :key="item.id">
				<img :src="item.avatars.small" :alt="item.alt">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>