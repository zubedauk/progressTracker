import React,{useEffect,useState} from 'react'
function Container(){
    const [urlSearch,setURLSearch]=useState(null)
    function urlFunc(urlSearch){
        document.getElementById("main").innerHTML=""
        setURLSearch(urlSearch)
    }
    //this function is used to make refresh data after new entry
    const [addChange,setChange]=useState(null)
    const [load,setLoad]=useState(null);
    function addFreshFunc(addChange){
        alert("thanks.your data is updated now")
        document.getElementById("main").innerHTML="";
        setChange(addChange)
        setLoad('https://ontrack-team3.herokuapp.com/students')
    }
    //this function is used to make refresh data after delete a record
    return(
        <div id="container">
        <Header urlFunc={urlFunc} />
        <hr></hr>
        <Main url='https://ontrack-team3.herokuapp.com/students' cnt='https://ontrack-team3.herokuapp.com/students' urlFunc={urlFunc} addFreshFunc={addFreshFunc} />
        {urlSearch && (<Main url={urlSearch} cnt={urlSearch} urlFunc={urlFunc} addFreshFunc={addFreshFunc} />)}
        {addChange && (<Main url={load} cnt={addChange} urlFunc={urlFunc} addFreshFunc={addFreshFunc}  /> )}
        <hr></hr>
        <Footer />
        </div>
    )
}
//component header
function Header(prop){
    const [searchLocation,setSearchLocation]=useState("");
    const [searchClass,setSearchClass]=useState("");
    const [searchName,setSearchName]=useState("");
//this function is used for search against location class and terms(name,buddy)
    function search(){
       let query;
       if(searchLocation==="location"){
           searchLocation("")
       }
        query=`https://ontrack-team3.herokuapp.com/students/search?location=${searchLocation}&className=${searchClass}&term=${searchName}` 
        prop.urlFunc(query);
    }
    return(
        <header id="header">
            <div id="logo">
                <img alt="logo" id="logo" src="data:image/png;base64,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"/>
            </div>
            <div id="nav-search">
                <nav class="nav navbar-light bg-light" id="nav">
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Student</a>
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Attendance</a>
                    <a href="www.google.com" class="btn btn-outline-success btnSize">Education</a>
                    <a href="https://miro.com/app/board/o9J_lfv1mQI=/" class="btn btn-outline-success btnSize">PD</a>
                </nav>
                <div  id="search">
                        <li >
                            <a class="nav-link" href="www.google" id="home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <select name="selectLocation" id="selectLocation" onChange={function(e){setSearchLocation(e.target.value)}}>
                            <option value="">Location</option>
                            <option value="London">London</option>
                            <option value="Birmingham">Birmingham</option>
                            <option value="Manchester">Manchester</option>
                        </select>
                        </li>
                        <li class="nav-item">
                        <select name="selectClass" id="selectClass" onChange={function(e){setSearchClass(e.target.value)}}>
                            <option value="">Class</option>
                            <option value="Class1">Class1</option>
                            <option value="Class2">Class2</option>
                            <option value="Class5">Class5</option> 
                        </select>
                        </li>
                        <li>
                            <div style={{display:'flex'}}>
                                <input onChange={function(e){setSearchName(e.target.value)}} name="txtTerm" id="txtName" style={{fontSize:'1.4rem',width:'10rem'}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button style={{fontSize:'1.4rem'}} class="btn btn-outline-success my-2 my-sm-0"  id="btnSearch" onClick={search}>Search</button>
                            </div>
                        </li>
                </div>
            </div>   
            <div id="login">
               <img src="data:image/jpeg;base64,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pJixHxDheOA1AYAcgFspdOixT7xxIGIbkBy9VzSWbE4lVEoQVoorqVFJKMVZIxkkllJJLGVGMkkspJJAYySSykvClzh7DhOc5rWibnG60az0GmegAq70ChtgwhDGMsXO7zjmf5kJDQuCo6qMIe0iD3jhIDuN/U6dWA1zmV9BgsNso5pdZ/bntPQo08qu954iIt5eEREAREQBERAEREAREQBYxoLXtLXNDmuEiDpH80rJeoCnVlVjoDp4uhkya/UTkHbfI78FwyV9ewOBDgC1wkQRMEHMEHNVysKic2boM3tzLM3t3E/MN+O/JeJisA106W7h6en0MVXD21gQskksx6YHQQRmCNB2JJeQZDCSSWckQGEkks0QGEkks0QGEkks5JJAYSSSzks4EB0R12G0udplhdB0k5AeuialGLk8sVdnUm3ZGk/trxOAAGk7FYqnqa6RFijtjFjD9zaduzRvy6atqdsGT3EPi65dlmxo17TjuBkpRe7hMDs+nU3/AI/s3UqGXpS3heIi9M0hERAEREAREQBERAEREAREQBERAF6vEQHHTarhRsXC67K+3snZPQdxmoOk1JGZi0CKNbeyeLSfQmepWleLNWwtKtrJa8e3nvuVTpRnvRRTgbpmHDNsiHDeMwvZK6xoDIguva141OaHDzXBFqGA7IPadjyfJ0wOAXmT9ly/ZK/foZpYV/tZWZJJTr7OdyNLxw73o4LX/wBORP8AeZ/xuH5lnfs/ELsv4oreHqcCGkklMizj9MdnCET+db2WcZ96I87GhrR5zPmux9nV3vSXj6XOrDzZX5LODBdEMobXRNrRhxcZAcSrRCqejsx9neOc4hMTHWA4kDgF3bNAWqn7L/7JfT1foWxwv/JkBRbPE4xXSHdZgeL+gA3qbgQGw2hrGhrRoA06Sdu0rai9OlQp0laCtzxNMIRh1UF4iK4mEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAF6vEQBERAEREAREQBERAEREAREQBERAf/9k=" alt="logo" />
            </div>
        </header>
    )
}
// Main Component
function Main(prop){
    //this function is used to edit a record
    const [edit,setEdit]=useState(null);
    function editFunc(e){
        let editId=e.target.parentNode.parentNode.id;
            setEdit(editId);   
    }
    //Following method is used to remove component edit
    function editCancelFunc(){
        setEdit(null);
    }
    //following function is used to delete a record
    function delFunc(e){
        let id=e.target.parentNode.parentNode.id;
        let del=Math.random(101,200);
        const requestDel = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }      
        };
        var proceed = window.confirm("Are you sure?\nPress Ok to delete the record or press Cancel to finish?");
        if (proceed) {
            fetch(`https://ontrack-team3.herokuapp.com/students/${id}`, requestDel) 
            prop.addFreshFunc(del);
           
        } 
    }
    //API to extract al  students records on main page load
    const [data,setData]=useState([]);
    useEffect(
        function(){
        const url=prop.url;
        fetch(url)
            .then(function(obj){
                return obj.json();
            })
            .then(function(db){
                setData(db);
            })
            .then(function(error) {
                console.log(error);
            });
        }
    ,[prop.cnt,prop])
//setAdd method is used to on/off the new entry div
const [add,setAdd]=useState(null);
//following method is used to on off adButton
function addCancelFunc(){
     if(add===null){
        setAdd("add");
        document.getElementById("addNew").textContent="X"
        document.getElementById("addNew").style.backgroundColor="red";
    }
    else{
        setAdd(null)
        document.getElementById("addNew").textContent="AddNew"
        document.getElementById("addNew").style.backgroundColor="green";
    }
}
return(
<main id="main">
    <div id="frmAdd">
        <button type="button" class="btn btn-success" id="addNew" onClick={addCancelFunc}>Add New</button>                      
    </div>
    {add && (<AddNew addCancelFunc={addCancelFunc} addFreshFunc={prop.addFreshFunc}/>)}
    {edit && (<Edit addFreshFunc={prop.addFreshFunc} editId={edit} editCancelFunc={editCancelFunc}/>)}
    <table class="table table-striped table-bordered" >
    <caption>List of users</caption>
    <thead>
        <tr>
        <th scope="col" style={{fontSize:'1.4rem'}}>#</th>
        <th scope="col" style={{fontSize:'1.4rem'}} >Name</th>
        <th scope="col" style={{fontSize:'1.4rem'}}>Photo</th>
        <th scope="col" style={{fontSize:'1.4rem'}}>Edu Buddy</th>
        <th scope="col" style={{fontSize:'1.4rem'}}>PD Buddy</th>
        <th scope="col" style={{fontSize:'1.4rem'}}>GitHub</th>
        <th scope="col" style={{fontSize:'1.4rem'}}>English Test</th>
        <th scope="col" style={{fontSize:'1.1rem',width:'11.2rem'}}>Language Support</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
    {
    data.map(function(obj){
        function testFunc(val){
            if(val.toLowerCase() ==="no".toLowerCase()){
                
                return true;
            }else{
                return  false;
            }      
        }
        function tLightFunc(val){
            if(val.toLowerCase()==="good"){
                return <span style={{color:'orange',fontSize:'1.4rem',fontWeight:'bold',fontStyle:'italic'}}>Good</span>
            }
            if(val.toLowerCase()==="excellent"){
                return <span style={{color:'green',fontSize:'1.4rem',fontWeight:'bold',fontStyle:'italic'}}>Excellent</span>
            }
            if(val.toLowerCase()==="poor"){
                return <span style={{color:'red',fontSize:'1.4rem',fontWeight:'bold',fontStyle:'italic'}}>Poor</span>
            }
        }
        return(<>
            <tr id={obj.id} key={obj.id}>
                <th scope="row" key={obj.id} value={obj.id}>{obj.id}</th>
                <td style={{fontSize:'1.4rem'}} value={obj.name}>{obj.name}</td>
                <td style={{fontSize:'1.4rem'}} value={obj.photo}>
                    {
                        testFunc(obj.photo) ? (<span style={{color:'green',fontSize:'2rem'}}>&#10004;</span>):(<span style={{color:'red',fontSize:'2rem'}}>&#10005;</span>)
                    }
                </td>
                <td style={{fontSize:'1.4rem'}} value={obj.pdBuddy}>{obj.pdBuddy}</td>
                <td style={{fontSize:'1.4rem'}} value={obj.eduBuddy}>{obj.eduBuddy}</td>
                <td  value={obj.gitHub}><a style={{fontSize:'1.4rem'}} href="gitHub.com">{obj.gitHub}</a> </td>
                <td style={{fontSize:'1.4rem'}} value={obj.englishTest}>
                    {
                        tLightFunc(obj.englishTest)
                    }
                </td>
                <td style={{fontSize:'1.4rem',textAlign:'center'}} value={obj.languageSupport}>
                    {
                        testFunc(obj.languageSupport) ? (<span style={{color:'green',fontSize:'2rem'}}>&#10004;</span>):(<span style={{color:'red',fontSize:'2rem'}}>&#10005;</span>)
                    }
                </td>
                <td id="tdEdit">
                    <button style={{fontSize:'1.4rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnEdit" onClick={editFunc}>Edit</button>
                </td>
                <td id="tdDel">
                    <button  style={{fontSize:'1.4rem',borderColor:'red'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btDel" onClick={delFunc}>X</button>  
                </td>
                <td>
                    <a href="./component/StudentProfile.jsx">
                        <button style={{fontSize:'1.4rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnProfile">Profile</button>
                    </a>
                </td>
            </tr>
        </>)
    })
    }
    </tbody>
    </table>
</main>
)
}
//component addNew
function AddNew(prop){
    const [name,setName]=useState(null)
    const [photo,setPhoto]=useState("yes")
    const [edu,setEdu]=useState(null)
    const [pd,setPD]=useState(null)
    const [gitHub,setGitHub]=useState(null)
    const [english,setEnglish]=useState("Excellent")
    const [languageSupport,setLanuageSupport]=useState("Yes")
    const [location,setLocation]=useState(null);
    const [className,setClassName]=useState(null);
    const addChange=Math.random(100);
     //following method is used to validate form
    function validate(){
     
        if(name===null){
            alert("Enter the name please")
            return false
        }
        if(className===null){
            alert("Enter class name please")
            return false
        }
        if(location===null){
            alert("Enter location  please")
            return false
        }
        if(edu===null){
            alert("Enter the Education Buddy please")
            return false
        }
        if(pd===null){
            alert("Enter the personal development buddy")
            return false
        }
        if(gitHub===null){
            alert("Enter github id please")
            return false
        }
       
        return true;
    }
    //following method is used to send new entry to server
    const post = () => {
        if(validate()){
            let student = {
                name: name,
                photo:photo,
                pdBuddy:pd,
                eduBuddy:edu,
                location:location,
                className:className,
                gitHub:gitHub,
                englishTest:english,
                languageSupport:languageSupport
            };
            const requestPost = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            };
            fetch("https://ontrack-team3.herokuapp.com/students", requestPost)
            var proceed = window.confirm("Saved:Press Ok if You like to add more or press Cancel to finish?");
            if (proceed) {
                setName("")
                setEdu("");
                setPD("") ;
                setGitHub(""); 
                setLocation("")
                setClassName("")
                prop.addFreshFunc(addChange)
            } else {
               prop.addCancelFunc('https://ontrack-team3.herokuapp.com/students');
            }
        }
    }
    //following method is used to send msg to component main to hide the this component
    return(
        <div id="newEntry">
            <table class="table table-striped table-bordered" >
                <thead>
                    <tr>
                        <th scope="col" style={{fontSize:'1.4rem'}}>Name</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>Photo</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>Class</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>Location</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>Edu Buddy</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>PD Buddy</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>GitHub</th>
                        <th scope="col" style={{fontSize:'1.4rem'}}>English Test</th>
                        <th scope="col" style={{fontSize:'1.1rem'}}>Language Support</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>  
                    <tbody>
                    <tr>
                        <td style={{fontSize:'1.4rem'}}><input style={{width:'15rem'}} placeholder="Enter Name" type="text" name="txtName" id="txtName" value={name} onChange={function(e){setName(e.target.value)}} /></td>
                        <td style={{fontSize:'1.4rem'}}>
                            <select name="txtPhoto" onChange={function(e){setPhoto(e.target.value)}}>
                                <option style={{fontSize:'1.4rem'}} value="yes">Yes</option>
                                <option style={{fontSize:'1.4rem'}} value="No">No</option>
                            </select>                        
                        </td>
                        <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} placeholder="Enter Class" type="text" name="txtClassName" id="txtClassName" value={className} onChange={function(e){setClassName(e.target.value)}} /></td>
                        <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} placeholder="Enter Location" type="text" name="txtLocation" id="txtLocation" value={location} onChange={function(e){setLocation(e.target.value)}} /></td>
                        <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} type="text" placeholder="Enter Edu Buddy" name="txtEdu" value={edu} onChange={function(e){setEdu(e.target.value)}} /></td>
                        <td><input style={{width:'10rem'}} type="text" name="txtPD" value={pd} placeholder="Enter PD Buddy" onChange={function(e){setPD(e.target.value)}} /></td>
                        <td style={{fontSize:'1.2rem'}}><input type="text" name="txtGitHub" placeholder="Enter GitHub ID" value={gitHub} onChange={function(e){setGitHub(e.target.value) }} /></td>
                        <td style={{fontSize:'1.4rem'}}>
                            <select name="selectEnglishTest" onChange={function(e){setEnglish(e.target.value)}} >
                                <option style={{fontSize:'1.4rem'}} value="Excellent">Excellent</option>
                                <option style={{fontSize:'1.4rem'}} value="Good">Good</option>
                                <option style={{fontSize:'1.4rem'}} value="Poor">Poor</option>
                            </select>
                        </td>
                        <td style={{fontSize:'1.4rem'}}>
                            <select name="selectLanguageSupport" onChange={function(e){setLanuageSupport(e.target.value)}}>
                                <option style={{fontSize:'1.4rem'}} value="Yes">Yes</option>
                                <option style={{fontSize:'1.4rem'}} value="No">No</option>
                            </select>
                        </td>
                        <td>
                                <button style={{fontSize:'1.4rem'}} class="btn btn-success my-2 my-sm-0" onClick={post} id="btnSave">Save</button>
                        </td>
                    </tr>
                    </tbody>
            </table>
           <hr></hr> 
        </div>
    )
}
//edit component
function Edit(prop){
const [name,setName]=useState(null)
const [photo,setPhoto]=useState("yes")
const [edu,setEdu]=useState(null)
const [pd,setPD]=useState(null)
const [gitHub,setGitHub]=useState(null)
const [english,setEnglish]=useState("Excellent")
const [languageSupport,setLanuageSupport]=useState("Yes")
const [location,setLocation]=useState(null);
const [className,setClassName]=useState(null);
let editChange=Math.random(300,400);
function validate(){
    if(name===null){
        alert("Enter the name please")
        return false
    }
    if(className===null){
        alert("Enter class name please")
        return false
    }
    if(location===null){
        alert("Enter location  please")
        return false
    }
    if(edu===null){
        alert("Enter the Education Buddy please")
        return false
    }
    if(pd===null){
        alert("Enter the personal development buddy")
        return false
    }
    if(gitHub===null){
        alert("Enter github id please")
        return false
    }
    return true;
}
//following method is used to send new entry to server
const edit = () => {
    if(validate()){
        let student = {
            name: name,
            photo:photo,
            pdBuddy:pd,
            eduBuddy:edu,
            location:location,
            className:className,
            gitHub:gitHub,
            englishTest:english,
            languageSupport:languageSupport
        };
        const requestEdit = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        };
        var proceed = window.confirm("Saved:Press Ok if You like to add more or press Cancel to finish?");
        if (proceed) {
            fetch(`https://ontrack-team3.herokuapp.com/students/${prop.editId}`, requestEdit)

            setName("")
            setEdu("");
            setPD("") ;
            setGitHub(""); 
            setLocation("")
            setClassName("")         
            prop.editCancelFunc();
            prop.addFreshFunc(editChange)
        } 
    }
}
//following method is used to send msg to component main to hide the this component
return(
    <div id="edit">
        <table class="table table-striped table-bordered" >
            <thead>
                <tr>
                    <th scope="col" style={{fontSize:'1.4rem'}}>Name</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>Photo</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>Edu Buddy</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>PD Buddy</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>GitHub</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>English Test</th>
                    <th scope="col" style={{fontSize:'1.1rem'}}>Language Support</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>Class</th>
                    <th scope="col" style={{fontSize:'1.4rem'}}>Location</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
                </thead>  
                <tbody>
                <tr>
                    <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} type="text" placeholder="Enter name" name="txtName" onChange={function(e){setName(e.target.value)}} />{document.getElementById(prop.editId).children[1].textContent}</td>
                    {/* <td style={{fontSize:'1.4rem'}}><input value={document.getElementById(prop.editId).children[1].textContent} style={{width:'15rem'}} placeholder="Enter Name" type="text" name="txtName" id="txtName" onChange={function(e){setName(e.target.value)}} /><p contenteditable="true">This is an editable paragraph.</p></td> */}
                    <td style={{fontSize:'1.4rem'}}>
                        <select name="txtPhoto" onChange={function(e){setPhoto(e.target.value)}} >
                            <option style={{fontSize:'1.4rem'}} value="yes">Yes</option>
                            <option style={{fontSize:'1.4rem'}} value="No">No</option>
                        </select>                        
                    </td>
                    <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} type="text" placeholder="Enter Edu Buddy" name="txtEdu" onChange={function(e){setEdu(e.target.value)}} />{document.getElementById(prop.editId).children[3].textContent}</td>
                    <td><input style={{width:'10rem'}} type="text" name="txtPD" placeholder="Enter PD Buddy" onChange={function(e){setPD(e.target.value)}} />{document.getElementById(prop.editId).children[4].textContent}</td>
                    <td style={{fontSize:'1.4rem'}}><input style={{width:'15rem'}} type="text" name="txtGitHub" placeholder="Enter GitHub ID" onChange={function(e){setGitHub(e.target.value) }} />{document.getElementById(prop.editId).children[5].textContent}</td>
                    <td style={{fontSize:'1.4rem'}}>
                        <select name="selectEnglishTest" onChange={function(e){setEnglish(e.target.value)}} >
                            <option style={{fontSize:'1.4rem'}} value="Excellent">Excellent</option>
                            <option style={{fontSize:'1.4rem'}} value="Good">Good</option>
                            <option style={{fontSize:'1.4rem'}} value="Poor">Poor</option>
                        </select>
                    </td>
                    <td style={{fontSize:'1.4rem'}}>
                        <select name="selectLanguageSupport" onChange={function(e){setLanuageSupport(e.target.value)}}>
                            <option style={{fontSize:'1.4rem'}} value="Yes">Yes</option>
                            <option style={{fontSize:'1.4rem'}} value="No">No</option>
                        </select>
                    </td>
                    <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} placeholder="Enter Class" type="text" name="txtClassName" id="txtClassName"  onChange={function(e){setClassName(e.target.value)}} /></td>
                    <td style={{fontSize:'1.4rem'}}><input style={{width:'10rem'}} placeholder="Enter Location" type="text" name="txtLocation" id="txtLocation" onChange={function(e){setLocation(e.target.value)}} /></td>
                    <td>
                            <button style={{fontSize:'1.4rem'}} class="btn btn-success my-2 my-sm-0" onClick={edit} id="btnSave">Save</button>
                    </td>
                    <td>
                        <button  style={{fontSize:'1.4rem',color:'white',borderColor:'red',backgroundColor:'red',display:'flex'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnCancel" onClick={prop.editCancelFunc}>X</button>
                    </td>
                </tr>
                </tbody>
        </table>
       <hr></hr> 
    </div>
)
}
//component footer
function Footer(){
    return( <footer id="footer">
        <a href="www.google.com">Contact cyf</a>
        <a href="www.google.com">FaceBook</a>
        <a href="www.google.com">Insta</a>
    </footer>
    )
}
export default Container;