<template>
  <article class="portfolio active" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">

      <ul class="filter-list">

        <li class="filter-item" v-for="(category, index) in Categories" :key="index">
          <button :class="{ active: category === selectedCategory }" @click="selectedCategory = category">{{ category
          }}</button>
        </li>

      </ul>

      <div class="filter-select-box" @click="toggleDropdown">

        <button class="filter-select">
          <div class="select-value">{{ selectedCategory }}</div>
          <div class="select-icon">
            <ion-icon :name="dropdownOpen ? 'chevron-up' : 'chevron-down'"></ion-icon>
          </div>
        </button>

        <ul v-if="dropdownOpen" class="dropdown-menu dropdown">
          <li class="dropdown-item" v-for="(category, index) in Categories" :key="index">
            <button @click.stop="selectCategory(category)" class="dropdown-button filter-select" style="margin: 3px 20px;">{{ category }}</button>
          </li>
        </ul>

      </div>

      <ul class="project-list">

        <li class="project-item active" v-for="project in filterProject" :key="project.id">
          <a :href="project.link" target="_blank">

            <figure class="project-img">
              <div class="project-item-icon-box">
                <font-awesome-icon icon="fa-regular fa-eye" />
                <ion-icon name="eye-outline"></ion-icon>
              </div>

              <img :src="project.img" :alt="project.title" loading="lazy">
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <p class="project-category">{{ project.category }}</p>

          </a>
        </li>


      </ul>

    </section>

  </article>
</template>
<script>

import project1 from "../assets/images/project1.jpg"
import project2 from "../assets/images/project2.jpg"
import project3 from "../assets/images/project3.jpg"
import project4 from "../assets/images/project4.jpg"
import project5 from "../assets/images/project5.jpg"



export default {


  name: 'Portfolio',
  data() {
    return {
      selectedCategory: "All",
      dropdownOpen: false,
      Categories: ["All", "Web Development", "Web Design", "Applications"],
      Projects: [
        {
          id: 1,
          title: "QuickBite",
          category: "Web Development",
          img: project1,
          link: "https://quicckbitee.netlify.app/"
        },
        {
          id: 2,
          title: "Pretty Picks",
          category: "Web Development",
          img: project2,
          link: "https://prettypicks.netlify.app/"
        },
        {
          id: 3,
          title: "Doin Website",
          category: "Web Design",
          img: project3,
          link: "https://bijoymalaker.github.io/doin-website/"
        },
        {
          id: 4,
          title: "Project Burger",
          category: "Applications",
          img: project4,
          link: "https://bijoymalaker.github.io/project_burger/"
        },
        {
          id: 4,
          title: "Simple Project",
          category: "Web Design",
          img: project5,
          link: "#"
        },
      ]
    }
  },
  computed: {
    filterProject() {
      if (this.selectedCategory === "All") {
        return this.Projects;
      } else {
        return this.Projects.filter(project => project.category === this.selectedCategory);
      }
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.dropdownOpen = false;
    }
  }
}
</script>
<style></style>