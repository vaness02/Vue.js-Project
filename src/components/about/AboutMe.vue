<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Saya adalah mahasiswa yang sedang menempuh pendidikan di Universitas Tarumanagara pada saat ini dengan jurusan teknik informatika',
				},
				{
					id: 2,
					bio:
						'Hobi saya adalah mendengarkan musik, saya hampir selalu mendengarkan musik kapanpun, untuk meningkatkan produktivitas saya atau sekedar bersantai.',
				},
				{
					id: 2,
					bio:
						'Selain itu, Saya juga memiliki hobi dalam merakit komputer, kadang saya suka membongkar komputer saya sendiri untuk sekedar dibersihkan atau mengganti pastanya. Saya juga memiliki hobi untuk merakit keyboard, entah sekedar mengganti keycapsnya atau mengganti switch keyboard agar feel tekanan dan suara yang dikeluarkan dari keyboard tersebut dapat saya dengar atau rasakan dengan puas.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/fotoformal.jpg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
