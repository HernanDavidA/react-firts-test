import Card, { CardBody } from './components/Card';
import Button from './components/Button';
import List from './components/List';
import { useState } from 'react';
function App() {

  const [ data, setData] = useState(['Goku', 'Vegeta', 'Trunks', 'Piccolo'])

 
  // const [isLoading, setIsLoading] = useState(false)

  const addMinion =  () => setData([...data, 'Minion'])
  const deleteMinion = () => setData(data.slice (0, data.length - 1))


  // const handleSelect = (elemento: string) => {
  //   console.log("mostrando", elemento)
  // }
  // const contenido = list.length ? <List data={list} onSelect={handleSelect}/> : 'Sin elementos'
  // return (
  //   <div>
  //   <Card >
  //        <CardBody title="Hola" text="Esto es un ejemplo" />
  //        {contenido}
  //        <Button isLoading={isLoading} onClick={handleClick}> Hola mundo</Button>

  //   </Card>

  //   </div>
  // );

  return(
    <Card> 
      <Button onClick={addMinion}> Agregar Minion</Button>
      <Button onClick={deleteMinion}> Eliminar Minion</Button>

      <List data={data}/>
    </Card>

  );
}

export default App;