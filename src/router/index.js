import { createRouter, createWebHistory } from "vue-router";
import EditorasView from "@/views/EditorasView.vue";
import CategoriasView from "@/views/CategoriasView.vue";
import AutoresView from "@/views/AutoresView.vue";
import LivrosView from "@/views/LivrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/editoras",
      name: "editoras",
      component: EditorasView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriasView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
  ],
});

export default router;
