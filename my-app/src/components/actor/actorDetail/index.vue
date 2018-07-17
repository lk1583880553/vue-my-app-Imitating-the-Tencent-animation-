<template>
	<main>
		<h2 style="text-align: center;">演员详情</h2>
		<ul>
		   	<li>
		   		<p>id:{{id}}姓名:{{name}}</p>
		   		<img :src="imgSrc" style="width: 150px;min-height: 150px;border: 1px solid #ccc"/>
		   	</li>
	   </ul>
	</main>
</template>

<script src="./script.js"></script>
<style lang="scss" src="./style.scss" scoped></style>