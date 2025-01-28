
export default function Home(){
    return (
        <div className = "outer">
            <div className = "container">
                <label htmlFor = "username">Username</label>
                <input type = "text" placeholder = "Username" name = "username"></input>
                <label htmlFor = "password">Password</label>
                <input type = "password" name = "password"></input>
            </div>
        </div>
    )
}