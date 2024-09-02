import Banner from './components/Banner/Banner'
import Formulario from './components/Formulario';
import { useState } from 'react';
import Time from './components/Time';
import Rodape from './components/Rodape';
function App() {
  const times = [
    {
      nome:'Programação',
      corPrimária: '#57c278',
      corSecundária: '#d9f7e9'
    },
    {
      nome:'Front-End',
      corPrimária: '#82ccfa',
      corSecundária: '#e8f8ff'
    },
    {
      nome:'Data Science',
      corPrimária: '#a6d157',
      corSecundária: '#f0f8e2'
    },
    {
      nome:'DevOps',
      corPrimária: '#e06b69',
      corSecundária: '#fde7e8'
    },
    {
      nome:'UX e Design',
      corPrimária: '#db6ebf',
      corSecundária: '#fae9f5'
    },
    {
      nome:'Mobile',
      corPrimária: '#ffba05',
      corSecundária: '#fff5d9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimária: '#ff8a29',
      corSecundária: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    debugger
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
    <Banner/>
    <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado ={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time=> <Time 
      key = {time.nome} 
      nome = {time.nome} 
      corPrimária = {time.corPrimária} 
      corSecundária = {time.corSecundária}
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    <Rodape/>
    </div>
  );
}

export default App;

