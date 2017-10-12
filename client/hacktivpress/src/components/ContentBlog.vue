<template lang="html">
  <div class="container-fluid text-center">
    <div class="col-md-10">
      <ArticleIsi v-for="article in articles" v-bind:propsArticle="article" v-bind:key="article._id"/>
    </div>
  </div>
</template>

<script>
import ArticleIsi from '@/components/ArticleIsi'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    ArticleIsi
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>
