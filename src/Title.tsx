function Title() {

    const nombres = ['Hernan', 'Juan', 'Carlos', 'Luis', 'Maria']
  
    const nombre = nombres[Math.floor(Math.random() * nombres.length)]
    return <div>
      <h1>Hello {nombre}</h1>
    
    </div>

    
  }
  
  export default Title;