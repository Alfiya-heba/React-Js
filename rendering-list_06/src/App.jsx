
import List from './list.jsx'
function App() {
  const fruits=[{id:1,name:"Banana",quantity:3},
                  {id:2,name:"Apple",quantity:1},
                  {id:3,name:"Cherry",quantity:10},
                  {id:4,name:"pineapple",quantity:50},
                  {id:5,name:"strawberry",quantity:69},
                  
]

const vegetables=[{id:6,name:"Potato",quantity:30},
                  {id:7,name:"Tomato",quantity:12},
                  {id:8,name:"Cucumber",quantity:15},
                  {id:9,name:"Chilli",quantity:58},
                  {id:10,name:"Pumpkin",quantity:66},
                  
]
 

  return (
    <>
    {fruits.length>0 ? <List items={fruits} category="Fruits" /> : null}
    {vegetables.length> 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  )
}

export default App
