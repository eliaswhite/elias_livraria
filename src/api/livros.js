import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("http://localhost:4000/livros");
    return response.data;
  }
  async buscarLivro(id) {
    const response = await axios.get(`http://localhost:4000/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("http://localhost:4000/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`http://localhost:4000/livros/${id}`);
    return response.data;
  }

}