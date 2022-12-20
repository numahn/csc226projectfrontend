import React, {useState, useEffect} from "react";


function MyComponent() {
    const [data, setData] = useState([])
    const [letter, setLetter] = useState('')
    // useEffect(() => {
    //     async function fetchData() {
    //        // const response = await fetch('http://gateway.marvel.com/v1/public/characters?limit=1&ts=1&apikey=e1507f1f8e648b01ac038f2245e303bd&hash=04fc414cfa0e7febff922982bf0d0a80')
    //         const data = await response.json()
    //         console.log(data)
    //         setData(data.data.results)
    //     }
    //     fetchData()
    //     }, [data])
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const callSection = async () => {
        //Using direct call since PHP does not recognize data given from API, returns HTML
        const response = await fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letter}&limit=50&ts=1&apikey=003483fd18aaa6d070638c87d5ecff50&hash=b6c6651270e73c445980fedaa6fb252e`)
        const json = await response.json()
        setData(json.data.results)

    }
    return (
        <>
            <div className="title">
                List of Marvel Characters
            </div>
            <div className="pagination">
                {alpha.map(item => (
                    <div className="section" onClick={(e) => {
                        setLetter(e.target.innerHTML)
                        console.log(letter)
                        callSection()
                    }}>
                        {item.toUpperCase()}
                    </div>
                ))}
            </div>
            <div className="list">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MyComponent
