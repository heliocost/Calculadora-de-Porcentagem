
import './App.css';

function App() {


function porcentagem () {


  var porcentagem =  parseFloat(document.getElementById("porcent").value);

  var valor = parseFloat(document.getElementById("valor_total").value);

  var valorTotal = document.getElementById("total");

  if (valor > 0  && porcentagem > 0) {

    var result = ((porcentagem / 100) * valor);

   
  
    document.getElementById("porcent").value = null;
    document.getElementById("valor_total").value = null;



    valorTotal.innerHTML = `${porcentagem} % de ${valor} = ${result.toFixed(0)}`;
    
  } else {

    valorTotal.innerHTML = "Nenhum cálculo.";


  }


}


  return (
    <div className="App">
      <header className="App-header">

        <div id="container" >

                <div id="primeirotitlo">
                  Calculadora de Porcentagem
                  </div>
                <hr/>

                <div id="container_dois">
                  
                 <span> Quanto é </span> <input id="porcent" type="number" placeholder=" % " />
                 <span> de </span> <input id="valor_total" type="number" placeholder="valor"/> ?
                </div>

                <div>
                  <h1 id="total">Nenhum cálculo.</h1>
                </div>

                <hr/>
              <div>
                <button id="botao_result" onClick={()=>{porcentagem()}}>Calcular</button>
              </div>

        </div>


      </header>
    </div>
  );
}

export default App;
