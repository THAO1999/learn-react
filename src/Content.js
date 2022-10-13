import { useState, useEffect} from 'react'

function Content(){
    // let [a, setA] = useState();
    useEffect(() =>{
        console.log(222)
    },[])
    // let handle = () => {
    //     console.log(111)
    // }
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then( posts => {
        console.log(posts)
    })
    return (
        <div>
           <input />
           {console.log(111)}
        </div>
    )
}
export default Content