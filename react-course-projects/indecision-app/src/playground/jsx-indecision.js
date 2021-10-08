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

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}
const renderApp = () => {
  let template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
        <button disabled= {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        {
          /*numbers.map((number) => {
            return <p key={number}>Number: {number}</p>
          })*/
        }
        <ol>
          {/* map over app.options getting back an array of lis (set key and text) */}
          {app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
          }
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