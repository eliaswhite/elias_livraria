import axios from "axios";
export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get("http://localhost:4000/editoras");
    return response.data;
  }
  async buscarEditora(id) {
    const response = await axios.get(`http://localhost:4000/editoras/${id}`);
    return response.data;
  }

  async adicionarEditora(editora) {
    const response = await axios.post(
      "http://localhost:4000/editoras",
      editora
    );
    return response.data;
  }

  async excluirEditora(id) {
    const response = await axios.delete(`http://localhost:4000/editoras/${id}`);
    return response.data;
  }
}