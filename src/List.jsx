function List()
{
    const items = [{id:11, color: 'Purple',priority:1}, 
        {id: 12, color: 'Yellow',priority:2}, 
        {id:13, color: 'Blue' , priority:3}];


    items.sort((a,b) => a.color.localeCompare(b.color));
    

    const listItems = items.map(
        items => <li key={items.id}>{items.priority}:&nbsp;{items.color}</li>
    )
    return (<ul>{listItems}</ul>);

}

export default List;