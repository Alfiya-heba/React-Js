function List(){
    const fruits=[{id:1,name:"Banana",quantity:3},
                  {id:2,name:"Apple",quantity:1},
                  {id:3,name:"Cherry",quantity:10},
                  
]
fruits.sort((a,b)=>a.name.localeCompare(b.name))
fruits.sort((a,b)=>a.quantity-b.qunatity)
    const lowCalfruits=fruits.filter(fruit=>fruit.quantity<9)
    const fruitsItems=lowCalfruits.map(lowCalfruits=><li key={lowCalfruits.id}>
                                {lowCalfruits.name}: &nbsp;
                                <b>{lowCalfruits.quantity}</b></li>)
    return(<ol>{fruitsItems}</ol>)

}
export default List