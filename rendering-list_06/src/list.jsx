function List(props){

    const category=props.category;
    const itemList=props.items;
   
// fruits.sort((a,b)=>a.name.localeCompare(b.name))
// fruits.sort((a,b)=>a.quantity-b.qunatity)
    // const lowCalfruits=fruits.filter(fruit=>fruit.quantity<9)
    const fruitsItems=itemList.map(items=><li key={items.id}>
                                {items.name}: &nbsp;
                                <b>{items.quantity}</b></li>)
    return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{fruitsItems}</ol>
   
    </>);

}
List.defaultProps={
    category:"category"

};
export default List;