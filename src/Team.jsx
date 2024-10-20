import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);

    const hendleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const hendleRemove = () => {
        // const newTeam = team-1;
        setTeam(team - 1)
    }
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team}</h3>
            <button onClick={hendleAdd}>Player Add</button>
            <button onClick={hendleRemove}>Remove Player</button>
        </div>
    )
}