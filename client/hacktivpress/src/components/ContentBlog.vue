<template lang="html">
  <div class="container-fluid text-center">
    <div class="col-md-10">
      <Article v-for="article in articles" v-bind:propsArticle="article" v-bind:key="article._id"/>
    </div>
  </div>
</template>

<script>
import Article from '@/components/Article'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Article
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
