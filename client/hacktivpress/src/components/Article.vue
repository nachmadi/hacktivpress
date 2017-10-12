<template lang="html">
  <div class="col-md-8">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{propsArticle.title}}</h3>
      </div>
      <div class="panel-body">
          {{propsArticle.task}}
          {{propsArticle.content}}
          {{propsArticle.category}}
        <div class="col-lg-10 col-lg-offset-2">
          <button type="button" class="btn btn-sm" data-toggle="modal" data-target="#myModalEdit" @click="setArticle(propsArticle);">edit</button>
          <button class="btn btn-sm-primary" @click="deleteOneArticle(propsArticle._id);">delete</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'
export default {
  props: ['propsArticle'],
  methods: {
    ...mapActions([
      'deleteOneArticle',
      'setArticle'

    ])
  }
}
</script>
