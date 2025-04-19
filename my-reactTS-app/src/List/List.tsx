import styles from "./List.module.css"

interface Props {
    category?: string;
    items: Array<Items>;
    sort?: boolean;
  }
interface Items{
    id:number;
    name:string;
    color:string;
}

function List({category="Kategorie",items,sort=false}:Props) {

    const itemCategory = category;
    const itemList = items;

    sort ?itemList.sort((a,b)=> a.name.localeCompare(b.name)):null;//sortiert alphabetisch

    //const yellowFruits = listItems.filter(fruit => fruit.color == "yellow")

    const listItems = itemList.map((item)=>
        <li key={item.id}className={styles.listItem}>
            {item.name}: {item.color}
        </li>
);


    return(
        <>
        <h2 className={styles.listTitle}>{itemCategory}:</h2>
        <ol className={styles.listItems}>
            {listItems}
        </ol>
        </>
    )
}
export default List