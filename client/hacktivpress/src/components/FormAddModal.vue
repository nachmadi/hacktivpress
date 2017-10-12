<template lang="html">
  <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="panel panel-primary">
              <div class="panel-heading">
                <h3 class="panel-title">Panel primary</h3>
              </div>
              <div class="panel-body">
                <form class="form-horizontal" @submit.prevent="addOneArticle(article);cancleArticle();">
                  <fieldset>
                    <div class="form-group" >
                      <label for="textArea" class="col-lg-2 control-label">Title</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="article.title"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="textArea" class="col-lg-2 control-label">Content</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="article.content"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="textArea" class="col-lg-2 control-label">Category</label>
                      <div class="col-lg-10">
                        <textarea class="form-control" rows="3" id="textArea" v-model="article.category"/>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default" data-dismiss="modal" @reset="cancleTodolist();">Close</button>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { mapActions} from 'vuex'
export default {
  data () {
    return {
      article: {
        title:"",
        content: "",
        category: "",
        author: null
      }
    }
  },
  methods: {
    ...mapActions([
      'addOneArticle'
    ]),
    cancleArticle () {
      this.article={
        title:"",
        content: "",
        category: "",
        author: null
      }
    }
  }
}
</script>
