import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);


    const clickHandler = () => setIsEditing((wasEditing) => !wasEditing);

    const changeHandler = (event) => setName(event.target.value);

    return <li className={isActive ? 'active' : null}>
        <span className="player">
            {isEditing ?
                <input type="text" required value={name} onChange={changeHandler} />
                : <span className="player-name">{name}</span>}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>;
}