import React from "react"

export default function WishList() {
    const [stateList, setStateList] = React.useState({
        item: "",
        price: null,
        link: ""
    })

    function add() {

    }

    function remove() {

    }

    function handleChange(event) {
        const {name, value} = event.target
        setStateList(prevList => ({
            ...prevList,
            [name]: value
        }))
    }

    return (
        <>
            <h1>Wish List</h1>
                <div>
                    <input 
                    type="text" 
                    placeholder="item"
                    name="item"
                    value={stateList.item}
                    onChange={handleChange}
                    />
                    <input type="text" 
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
                </div>
                <div>
                    <button className="form-button" onClick={add}>Add Item</button>
                    <button className="form-button" onClick={remove}>Delete Item</button>
                </div>
        </>
    )
}