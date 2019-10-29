<template>
  <div class="mt-5">
    <h1>Catalogo</h1>
    <pre>
      {{articles}}
    </pre>
    <div>
      <b-card-group deck v-for="(article, index) of articles" :key="index">
        <b-card
          v-bind:title="article.name_article"
          border-variant="secondary"
          v-bind:header="'Stock: '+ article.stock_article"
          header-border-variant="secondary"
          align="center"
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