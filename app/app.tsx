import * as  React from 'react';
import * as Reactdom from 'react-dom';

const Person=()=>{
    var name:string='John Conner';
    return <React.Fragment>
        <h1>Without React Hooks</h1>
        <hr/>
        <h2>Hello My name is {name}</h2>
        <button type="button"
            onClick={()=>{
                name="Jack Ryan";                
            }}
        >Update Name</button><i>Nothing gets updated</i>
    </React.Fragment>    
}

const PersonHook=()=>{
    //How to declare state within the functional component
    //And initialise it's value
    const [name,setName]= React.useState('John Conner') 

    return <React.Fragment>
        <h1>Using React Hooks</h1>
        <hr/>
        <h2>Hello My name is {name}</h2>
        <button type="button"
            onClick={()=>{ 
                setName('Jack Ryan');            
            }}
        >Update Name</button>
    </React.Fragment>    
}

const PersonData=()=>{
    const [person,setPersonState]=React.useState({
                                        fullname:'Jack Ryan',
                                        phone:'0478938475',
                                        basicsalary:2345.90});
    React.useEffect(()=>{
        console.log(person);
    },[person])
    
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setPersonState({...person,[name]:value})
    }
    return <React.Fragment>
        <h3>Person Form</h3>
        <hr/>
        <table>
            <tbody>
                <tr>
                    <td>Full name</td>
                    <td><input type="text" 
                               name={"fullname"} 
                               value={person.fullname}
                               onChange={(e)=>{handleChange(e)}}
                               /></td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td><input type="phone" 
                               name={"phone"} 
                               value={person.phone}
                               onChange={(e)=>{handleChange(e)}}
                               /></td>
                </tr>
                <tr>
                    <td>Basic salary</td>
                    <td><input type="number" 
                               name={"basicsalary"} 
                               value={person.basicsalary}
                               onChange={(e)=>{handleChange(e)}}
                               /></td>
                </tr>
            </tbody>
        </table>
    </React.Fragment> 
}

Reactdom.render(
<React.Fragment>
    <Person/>
    <br/>
    <hr/>
    <PersonHook/>
    <br/>
    <hr/>
    <PersonData/>
</React.Fragment>,document.getElementById("app"));