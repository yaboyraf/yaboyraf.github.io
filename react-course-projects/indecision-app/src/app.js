//console.log("@@ app.js is running")

let app = {
  title: 'Indecision App',
  subtitle: 'Let the computer decide',
  options: ['One', 'Two']
}

// JSX means: Javascript XML
var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>app.subtitle</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No Options'}</p>
        <ol>
          <li>item 1</li>
          <li>item 2</li>
        </ol>
    </div>
)

var user = {
  name: 'Raf',
  age: 28,
  location: 'San Jose'
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  }
}

var templateTwo = (
   <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
   </div>
)
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)