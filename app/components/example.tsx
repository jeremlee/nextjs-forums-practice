'use client'
export const ExampleMsg = () => {
    console.log("Example component")
    return (
        <>
        <button className="border border-white" onClick = {()=>{
            alert("nindot playlist ni guada guys")
        }}>
            Press me
        </button>
        <button className="border border-white" onClick = {()=>{
            window.location.href = "dashboard"
        }}>
            Go other page
        </button>
        <button className="border border-white" onClick = {()=>{
            window.location.href = "register"
        }}>
            Register
        </button>
    
    </>
    )
}