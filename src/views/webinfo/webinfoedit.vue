<template>
  <article-detail :is-edit="true" />
</template>

<script>
import ArticleDetail from './components/WebInfoDetail'

export default {
  name: 'WebInfoEdit',
  components: { ArticleDetail }
}
</script>

