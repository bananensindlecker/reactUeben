import {useState} from "react";

//testen Hooks
function MyComponent() {
    const [name, setName ] = useState <string> ("Guest");//<String> def. den input als String!
    const [age, setAge] = useState <number>(0);
    const [isStudent, setisStudent] = useState <boolean>(false);

    const updateName = ()=>{
        setName("Levi")
    }
    const incrementAge =()=>{
        setAge(age + 1);
    }
    const updateIsStudent =()=>{
        isStudent ? setisStudent(false):setisStudent(true);
    }



    return(
        <div>
            <p>Name:{name}</p>
            <p>Alter:{age}</p>
            <p>ist ein Schüler: {isStudent?"Ja":"nein"}</p>
            <button onClick={updateName}></button>
            <button onClick={incrementAge}></button>
            <button onClick={updateIsStudent}></button>
        </div>
    )

}
export default MyComponent;