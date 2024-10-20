export default function Friend({friend}) {
    // console.log(friend)
    const {name, email} = friend;
    // console.log(name)
    return (
        <div style={{border:'2px solid purple', margin:'5px', borderRadius:'10px'}}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}