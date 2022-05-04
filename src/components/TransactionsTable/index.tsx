import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th> 
            <th>Data</th>
          </tr>
          
        </thead>
        <tbody>
          <tr>
            <td>
              Desenvolvimento de site
            </td>
            <td className="deposit">R$1.200,00</td>
            <td>Freela</td>
            <td>01/05/2022</td>
          </tr>
          <tr>
            <td>
              Desenvolvimento de site
            </td>
            <td className="deposit">R$1.200,00</td>
            <td>Freela</td>
            <td>01/05/2022</td>
          </tr>
          <tr>
            <td>
              Aluguel
            </td>
            <td className="withdraw">- R$400,00</td>
            <td>Pagamentos</td>
            <td>30/04/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}