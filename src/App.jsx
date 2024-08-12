import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Produto from "./components/Produto";

import styles from "./App.module.css"

function App() {
  // Utilize a API abaixo para puxar a lista de produto
  // https://ranekapi.origamid.dev/json/api/produto
  // Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
  // https://ranekapi.origamid.dev/json/api/produto/notebook

  return (
    <div className={styles.content}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
          <Route path="produto/:id" element={<Produto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
