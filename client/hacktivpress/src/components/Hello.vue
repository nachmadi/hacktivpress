<template>
  <div>
    <HeaderBlog/>
    <Sidebar/>
    <ContentBlog/>
    <FooterBlog/>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import Sidebar from '@/components/Sidebar'
import ContentBlog from '@/components/ContentBlog'
import FooterBlog from '@/components/FooterBlog'
export default {
  components: {
    HeaderBlog,
    Sidebar,
    ContentBlog,
    FooterBlog
  }
}
</script>
