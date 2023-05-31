<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Live Demo -->
		<div class="mt-8">
			<a class="text-white hover:underline text-2xl font-bold" href="https://vaness02.github.io/Kelompok_2_4us/index.html" target="_blank" style="font-family: 'Roboto', sans-serif;">Live Demo</a>
			<br><br>
			<a class="text-white hover:underline text-2xl font-bold" href="https://github.com/vaness02/Kelompok_2_4us/tree/other" target="_blank" style="font-family: 'Roboto', sans-serif;">Source Code</a>

		</div>
	</div>
</template>

<style scoped>
.text-white {
	color: white;
}
.font-bold {
	font-weight: bold;
}
.text-2xl {
	font-size: 1.5rem;
}
</style>


  
  <script>
  import feather from 'feather-icons';
  import ProjectHeader from '../components/projects/ProjectHeader.vue';
  import ProjectGallery from '../components/projects/ProjectGallery.vue';
  import ProjectInfo from '../components/projects/ProjectInfo.vue';
  
  import { hasScopeRef } from '@vue/compiler-core';
  
  export default {
	name: 'Projects',
	components: {
	  ProjectHeader,
	  ProjectGallery,
	  ProjectInfo,
	},
	data: () => {
	  return {
		singleProjectHeader: {
		  singleProjectTitle: 'Project UTS Web ',
		  singleProjectDate: 'October 27, 2021',
		  singleProjectTag: 'UI / Frontend',
		},
		projectImages: [
		  {
			id: 1,
			title: 'Kabul Project Management UI',
			img: require('@/assets/images/HTML_Project.jpg'),
		  },
		  {
			id: 2,
			title: 'Kabul Project Management UI',
			img: require('@/assets/images/4us1.jpg'),
		  },
		  {
			id: 3,
			title: 'Kabul Project Management UI',
			img: require('@/assets/images/4us2.jpg'),
		  },
		],
		projectInfo: {
		  clientHeading: 'Tentang Tugas Ini',
		  objectivesDetails:
			'Membuat website online shop. Pada tugas ini kelompok saya memilih produk sepatu untuk dijual-belikan.',
		  technologies: [
			{
			  title: 'Tools & Technologies',
			  techs: [
				'HTML',
				'CSS',
			  ],
			},
		  ],
		  liveDemoLink: 'https://vaness02.github.io/Kelompok_2_4us/index.html', // Tambahkan properti liveDemoLink
		},
	  };
	},
	mounted() {
	  feather.replace();
	},
	updated() {
	  feather.replace();
	},
	methods: {},
  };
  </script>
  
  <style scoped>
  .text-white {
	color: white;
  }
  .font-bold {
	font-weight: bold;
  }
  .text-2xl {
	font-size: 1.5rem;
  }
  </style>
  