<template>
  <div class="mt-5">
    <h1>Catalogo</h1>
    <b-button variant="info" @click="getArticles">Traer</b-button>
    <router-link
      :to="{ name: 'article', params: {id : article} }"
      v-for="(article, index) of articles"
      :key="index"
    >
      <button>{{article}}</button>
    </router-link>
    <div>
      <div>
        <b-card-group deck v-for="(article, index) of articles" :key="index">
          <b-card
            title="S"
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center"
          >
            <b-button :to="{name:'catalog', params: {id:index}}" variant="primary">{{article.name}}</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["articles"]),
    ...mapActions(["getArticles"])
  }
};
</script>