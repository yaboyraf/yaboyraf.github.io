//console.log("@@ app.js is running")

const app = {
  title: 'Indecision App',
  subtitle: 'Let the computer decide',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  // console.log('form submitted')
  const option = e.target.elements.option.value

  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    renderApp()
  }
}

const removeAll = () => {
  app.options = []
  renderApp()
}
// JSX means: Javascript XML

const appRoot = document.getElementById('app')

const renderApp = () => {
  let template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
        <p>{app.options.length}</p>
        <button onClick={removeAll}>Remove All</button>
        <ol>
          <li>{app.options[0]}</li>
          <li>{app.options[1]}</li>
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

renderApp()