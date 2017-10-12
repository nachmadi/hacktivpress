<template>
  <div>
    <HeaderBlog/>
    <Sidebar/>
    <FormAddModal/>
    <FormEditModal/>
    <ContentBlog/>
    <FooterBlog/>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import Sidebar from '@/components/Sidebar'
import FormAddModal from '@/components/FormAddModal'
import FormEditModal from '@/components/FormEditModal'
import ContentBlog from '@/components/ContentBlog'
import FooterBlog from '@/components/FooterBlog'
export default {
  components: {
    HeaderBlog,
    Sidebar,
    FormAddModal,
    FormEditModal,
    ContentBlog,
    FooterBlog
  }
}
</script>
