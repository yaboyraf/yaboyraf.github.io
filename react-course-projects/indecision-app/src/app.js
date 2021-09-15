//console.log("@@ app.js is running")

let app = {
  title: 'Indecision App',
  subtitle: 'Let the computer decide',
  options: ['yes', 'no']
}

// JSX means: Javascript XML
let template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
        <ol>
          <li>{app.options[0]}</li>
          <li>{app.options[1]}</li>
        </ol>
    </div>
)

let user = {
  name: 'Raf',
  age: 28,
  location: 'San Jose'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
  const templateTwo = (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={minusOne}>-1</button>
       <button onClick={addOne}>+1</button>
       <button onClick={reset}>0</button>
    </div>
 )
 ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()