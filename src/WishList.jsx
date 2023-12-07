import React from "react"
import ReactDOM from "react-dom"

export default function WishList() {
    const [stateList, setStateList] = React.useState(() => {
        const storedState = localStorage.getItem("wishListState");
        return storedState ? JSON.parse(storedState) : {
            items: [],
            item: "",
            price: "",
            link: "",
        };
    });

    React.useEffect(() => {
        localStorage.setItem("wishListState", JSON.stringify(stateList));
    }, [stateList]);

    console.log(stateList)
    
    function add() {
         event.preventDefault()
        setStateList(prevState => {
            const newItem = {
                item: prevState.item,
                price: prevState.price,
                link: prevState.link
            };

            return {
                ...prevState,
                items: [...prevState.items, newItem],
                item: "",
                price: "",
                link: ""
            };
        });
    }

    function remove(index) {
        setStateList(prevState => {
            const updatedItems = prevState.items.filter((item, i) => i !== index);

            return {
                ...prevState,
                items: updatedItems,
            };
        });
    }

    function handleChange(event) {
        const {name, value} = event.target
        setStateList(stateList => ({
            ...stateList,
            [name]: value
        }))
    }

    return (
        <>
            <div className="container">
                <h1>Wish List</h1>
                <form>
                        <input 
                        type="text" 
                        placeholder="item"
                        name="item"
                        value={stateList.item}
                        onChange={handleChange}
                        />
                        <input type="number"
                        min="1"
                        step="any"
                        placeholder="price"
                        name="price"
                        value={stateList.price}
                        onChange={handleChange}
                        />
                        <input type="text" 
                        placeholder="link"
                        name="link"
                        value={stateList.link}
                        onChange={handleChange}
                        />
                    <div>
                        <button className="form-button" onClick={add}>Add Item</button>
                    </div>
                    </form>
                    <ul>
                    {stateList.items.map((item, index) => (
                        <li key={index}>
                            {item.item} - ${item.price} - {item.link}
                        <button
                            className="delete-btn" 
                            onClick={() => remove(index)}>Delete
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}