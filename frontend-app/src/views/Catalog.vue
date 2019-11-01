<template>
  <div class="mt-5">
    <h1>Catalogo</h1>
    <div>
      <b-card-group v-for="(article, index) of articles" :key="index" deck>
        <b-card
          v-bind:title="article.name_article"
          border-variant="info"
          v-bind:header="'Stock: '+ article.stock_article"
          header-border-variant="info"
          align="center"
          class="mt-2"
        >
          <b-button :to="{name:'catalog', params: {id:index}}" variant="success">Comprar ></b-button>
          <template v-slot:footer>
            <em>$ {{article.unit_price_article}}</em>
          </template>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["articles"])
  },
  beforeCreate() {
    this.$store.dispatch("getArticles");
  }
};
</script>