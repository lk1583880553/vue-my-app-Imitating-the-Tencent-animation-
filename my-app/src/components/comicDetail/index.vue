<template>
	<video-bg :sources="['../../../static/img/video.mp4']" img="../../../static/img/bg.jpg">
		<div class="VideoBg__content">
		  <slot>
		  </slot>
		</div>
	</video-bg>
</template>

<script src="./script.js"></script>
<style src="./style.scss"></style>