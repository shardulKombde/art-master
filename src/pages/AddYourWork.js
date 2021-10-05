import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from '../components'
import { FaCamera,FaUpload,FaPen,FaTrashAlt,FaRupeeSign,FaEllipsisV,FaTimes,FaArrowLeft } from 'react-icons/fa'
import uploadImage from '../assets/upload-image.png'
import {db} from '../firebase'
import {useHistory} from 'react-router-dom'
import {v4 as uuidv4 } from 'uuid'
import ReactCardFlip from 'react-card-flip';






let unsubscribe = () => {}

const AddYourWork = ({user}) => {


  const [state,setState] = useState({
  profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwaLDKaK49tsHmdMGOrmTdns5qiw080F2Yw&usqp=CAU"
  })

  const history = useHistory()
  const [isFlipped,setIsFlipped] = useState(false)
  const [name,setName] = useState('')
  const [paintingname,setPaintingname] = useState('')
  const [paintingtype,setPaintingtype] = useState('')
  const [paintingmedium,setPaintingmedium] = useState('')
  const [paintingdimension,setPaintingdimension] = useState('')
  const [phone,setPhone] = useState('')
  const [price,setPrice] = useState('')
  const [id,setId] = useState('')
  const [button,setButton] = useState(false)
  const [myPaintings,setPaintings] = useState([])


  var paint = {
    id:id,
    Name:name,
    PaintingName:paintingname,
    PaintingType:paintingtype,
    PaintingMedium:paintingmedium,
    PaintingDimension:paintingdimension,
    ContactNumber:phone,
    Price:price
  }


  useEffect(()=>{
    if(user){
      const docRef = db.collection('paintings').doc(user.uid)
       unsubscribe = docRef.onSnapshot(docSnap=>{
        if(docSnap.exists){
          // console.log(docSnap.data().paintings)
          setPaintings(docSnap.data().paintings)
        }else{
          console.log("no docs")
        }
      })
    }else{
      history.push('/login')
    }

    return()=>{
      unsubscribe()
    }

  },[])

  const addPainting = () => {
    // newPainting.id = uuidv4()
    // console.log(newPainting)
    db.collection('paintings').doc(user.uid).set({
      paintings:[...myPaintings,paint]
    })
  }

  const deletePainting = (deletePainting) =>{
    // console.log(deletePainting)
    const docRef = db.collection('paintings').doc(user.uid)
    docRef.get().then(docSnap=>{
      const result = docSnap.data().paintings.filter(painting => painting.id !== deletePainting.id)
      // console.log(result)
      docRef.update({
        paintings:result
      })
    })
  }

  const updatePainting = (updatePainting) => {

    const docRef = db.collection('paintings').doc(user.uid)
    docRef.get().then(docSnap=>{
      const result = docSnap.data().paintings.filter(painting => painting.id === updatePainting.id)
      // console.log('updatePainting',result)
     
      // console.log('new painting',updatePainting);
      addPainting(updatePainting)
       deletePainting(result[0])
     
    })
    setButton(false)
  }
  const updateForm = (updatePainting) =>{
    setButton(true)
    setId(updatePainting.id)
    setName(updatePainting.Name)
    setPaintingname(updatePainting.PaintingName)
    setPaintingtype(updatePainting.PaintingType)
    setPaintingmedium(updatePainting.PaintingMedium)
    setPaintingdimension(updatePainting.PaintingDimension)
    setPhone(updatePainting.ContactNumber)
    setPrice(updatePainting.Price)
  }

 
   const imageHandler = (e) => {
  
      const reader = new FileReader();
      reader.onload = () => {
      if(reader.readyState === 2){
      setState({profileImg: reader.result })
      }
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  
    const {profileImg} = state




    const [image,setImage] = useState({
      paintingImg:(uploadImage)
    })

    const paintingImageHandler = (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if(reader.readyState === 2){
          setImage({paintingImg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0]);
    }

    const {paintingImg} = image



  return <AddWork>
     <Navbar/>
    <Sidebar/>
     <section className="add-work">
       <div className="rectangleAdd">
       <h2 className="addHeading">Add Your Work</h2>
       <div className="parts">
       <div className="circle">
       <div className="img-holder">
         <img src={profileImg} alt="" id="img" className="profile-img"/>
         <div className="camcircle"></div>
       </div>
       <input className="profile-input" type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler} />
       <div className="addp">
       
      <label htmlFor="input" className="img-upload"> <FaCamera className="camera"/></label>
       </div>
       </div>

         <div className="information">
          <label className="yourname" for="name">Your Name:</label>
          <input  
            className="style"  
            type="text" 
            id="name" 
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            /> <br/>

          <label className="contactNumber" for="contact">Contact Number :</label>
          <input 
            className="style" 
            type="number" 
            id="contact-number" 
            name="contact-number"
            placeholder="Your Contact Number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            /><br/> 

          <label className="paintingname" for="painting-name">Name of Painting :</label>
          <input 
            className="style" 
            type="text" 
            id="painting-name" 
            name="painting-name"
            placeholder="Your painting's name"
            value={paintingname}
            onChange={(e)=>setPaintingname(e.target.value)}
            /> <br/>

          <label className="paintingtype" for="painting-type">Type of Painting :</label>
          <input  
            className="style" 
            type="text" 
            id="painting-type" 
            name="painting-type"
            placeholder="Abstract/Modern Art/Portrait..etc"
            value={paintingtype}
            onChange={(e)=>setPaintingtype(e.target.value)}
            /><br/>

          <label className="paintingmedium" for="painting-medium">Painting Medium :</label>
          <input 
             className="style" 
             type="text" 
             id="painting-medium" 
             name="painting-medium"
             placeholder="oil/acrylic/watercolor..etc"
             value={paintingmedium}
             onChange={(e)=>setPaintingmedium(e.target.value)}
             /><br/>

          <label className="paintingdimension" for="painting-dimension">Painting Dimensions :</label>
          <input 
             className="style" 
             type="text" 
             id="painting-dimension" 
             name="painting-dimension"
             placeholder="width x height"
             value={paintingdimension}
             onChange={(e)=>setPaintingdimension(e.target.value)}
             /><br/>

          

          <label className="paintingprice" for="painting-price">Painting Price :</label>
          <input 
            className="style" 
            type="number" 
            id="painting-price" 
            name="painting-price"
            placeholder="painting's price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            /><br/>

          <div className="painting-img-holder">
            <img src={paintingImg} id="painting-img" className="painting-img"/>
          </div>
          <input type="file" name="painting-upload" id="painting-input" accept="image/*" onChange={paintingImageHandler}/>
          <div className="addpainting">
          <label className="painting-upload" htmlFor="painting-input"><FaUpload className="arrow"/> Upload Your Painting</label><br/>
          </div>

         </div>
       </div>
       <div className="click">
       <button className="submitBtn" onClick={()=>addPainting(paint)}><a>SUBMIT</a></button>
       </div>
       { button ? <div className="click">
       <button className="submitBtn" onClick={()=>updatePainting(paint)}><a>Update</a></button>
       </div> : <></>
      }
    </div>

    

    <div className="row">
   
   <ul className="collection">
  
     {myPaintings.map(painting=>{
 
      
        return ( 
         
       <div className="column">
      
         <div className="Rect">
         <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div className="front">
             <div className="img-price">
               <img src={paintingImg}  className="your-painting"/>
               <h4 className="pricep">  <span><FaRupeeSign className="rupee"/></span>{painting.Price}</h4>
               <FaEllipsisV key={painting.id} className="more" onClick={() => setIsFlipped((prev) => !prev)}/>
              
                <div className="update-delete">
               
                <FaPen className="update" onClick={()=>updateForm(painting)}/>
                <FaTrashAlt className="delete"  onClick={()=>deletePainting(painting)}/>
             </div>
             </div>
             </div>
             <div className="back">
                <div className="details">
                    <h4 className="namep">Name of Painting: <br/> <br/> <span  className="paintss">{painting.PaintingName}</span></h4>
                    <h4 className="tpainting">Type of Painting: <br/><br/>  <span className="paintss">{painting.PaintingType}</span> </h4>
                    <h4 className="paintingm">Painting Medium: <br/> <br/> <span className="paintss">{painting.PaintingMedium}</span> </h4>
                    <h4 className="paintingd">Painting Dimensions: <br/> <br/> <span className="paintss">{painting.PaintingDimension}</span></h4>
                 </div>
                 <FaArrowLeft key={painting.id} className="more more1" onClick={() => setIsFlipped((prev) => !prev)}/>
                
              </div>
              </ReactCardFlip>
              </div>
              
   
             
 
 
                  
           </div>
             
    )
   })}
  
   </ul> 
   
 </div>
   
 </section>
<Footer/>
</AddWork>

}

const AddWork = styled.section`


.row{
  align-content:center;
}

.column {
  float: left;
  width: 25.5%;
  margin-left:5%;

}
.row:after {
  content: "";
  display: table;
  clear: both;
}

.Rect{
  position:relative;
  display:flex;
  justify-content:space-around; 
  align-content:center;
  height:400px;
  margin-left:7%;
  margin-bottom:7%;
  background:#fff;
  ${'' /* border: 3px solid #F6A344 ; */}
  border-left: 5px solid #F6A344;
  border-right: 5px solid #88CFFD;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  -webkit-backgr0ound-size: 100% 5px;
  -moz-background-size: 10% 5px;
  background-size: 100% 5px;
  background-image: -webkit-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD), -webkit-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD);
  background-image: -moz-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD), -moz-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD);
  background-image: -o-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD), -o-linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD);
  background-image: linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD), linear-gradient(25deg,#F6A344,#FFCC9B,#F4ECE5,#E3F1F7,#CAE8FC,#88CFFD);
  
}
.more{
 
 
  height:25px;
  width:40%;
  margin-top:10%;
  margin-left:-72%;
  cursor:pointer;
         
}

.more1{
  margin-top:2%;
}

.details{
  font-family: 'Viaoda Libre', cursive;
  margin-top:6%;
  text-align:left;
  
  color:var(--heading);
  align-content:center;
  margin-left:20%;
}
.update-delete{

  font-size:1.8rem;
  margin-top: -13%;
  margin-left:50%;
  
}
.update{
   color:#88CFFD;
   cursor:pointer;
   &:hover{
  font-size:2.5rem;
  }
}
.delete{
margin-left:2rem;
cursor:pointer;
color:#F6A344;
&:hover{
  font-size:2.5rem;
}
}
.namep{
font-size:1.3rem;
margin-bottom:8%;
text-transform:capitalize;
}
.tpainting{
  font-size:1.3rem;
  margin-bottom:8%;
  text-transform:capitalize;
}
.paintingm{
  font-size:1.3rem;
  margin-bottom:8%;
}
.paintingd{
  font-size:1.3rem;
margin-bottom:8%;
}
.img-price{
  margin-top:15%;
  align-content:center;
}
.your-painting{

  height:230px;
  width:85%;
  border:1px solid grey;
  margin-top:-6%;
  cursor:pointer;

}
.pricep{
  color:var(--heading);
  margin-top:3%;
  font-family: 'Cabin', sans-serif;
}
.rupee{
   margin-top:1%;  
}
.paintss{
  color:#A9B2B5;
  
  text-transform:lowercase;
}
.rectangleAdd{
  position:relative;
  background-color:var(--white);
  height:1480px;
  width:90%;
  align-content:center;
  margin-left:5%;
  margin-top:4%;
  margin-bottom:10%;
  text-align:center;
  border:5px solid #F6A344;
}
.addHeading{
  font-family:'tangerine',cursive;
  font-size:3.8rem;
  padding-top:2rem;
  color:var(--heading);
}
.profile-img{
  position:relative;
  z-index:0;
  height:300px;
  width:300px;
  margin-bottom:40%;
  border-radius:50%;
}

#input[type="file"]{
  display:none;
}
#painting-input[type="file"]{
  display:none;
}
.camcircle{
  position:relative;
  z-index:2;
  width:65px;
  height:65px;
  border-radius:50%;
  background-color:#88CFFD;
  margin-top:-64%;
  margin-left:70%;

}
.addp{
  margin-top:-16%;
 margin-left:61%;

}
.camera{
  font-size:2rem;
position:relative;
z-index:4;
&:hover{
  font-size:2.3rem;
  
 }
}


.parts{
  display:flex;
  flex-direction:row;
  flex-flow:wrap;
  justify-content:space-around;
  margin-top:7%;
}
label{
  font-family: 'Cabin', sans-serif;
    color: var(--circle1);
    font-size: 1.6rem;
    letter-spacing:1.3px;
    
}
.style{
  width: 90%;
    height: 30px;
    border-radius: 5px;
    border:none;
    background-color:#f4f4f2;
    text-align:center;
    margin-bottom:4%;
    font-size:1.6rem;
    font-family: 'Cabin', sans-serif;
    color: var(--circle1);
    
   
}
.style:focus{
  outline:none;
}

.yourname{
  margin-right:64%;
}
.paintingname{
  margin-right:45%;
}
.paintingtype{
  margin-right:48%;
}
.paintingmedium{
  margin-right:48%;
}
.paintingdimension{
  margin-right:37%;
}
.paintingprice{
  margin-right:56%;
}
.contactNumber{
  margin-right:50%;
}
.painting-img{
  height:300px;
  width:300px;
  
}
.addpainting{
  background-color:#88CFFD;
  width:70%;
  text-align:center;
  border-radius:5px;
  margin-left:16%;
  height:30px;
  &:hover{
    background-color:transparent;
    border:2px solid var(--explorebtn);
  }
}
.painting-upload{
 
  font-size:1.3rem;
  font-family: 'Cabin', sans-serif;
  color: var(--heading);
 
}
.click{
  margin-top:10%;
}
.submitBtn{
  border:none;
  width:170px;
  height:50px;
  border-radius:10px;
  background-color:var(--heading);
  a{
    font-size:2rem;
  font-family: 'Cabin', sans-serif;
    color: var(--white); 
    font-weight:bolder;
    cursor:pointer;
  }
  &:hover{
    background-color:var(--black);
  }
}

@media (max-width: 900px){
  .rectangleAdd{
    height:1700px;
  }
  .information{
    margin-top:10%;
  }
  .row{
    align-content:center;
    margin-left:15%;
  }
  .column {
  float: left;
  width: 65%;
  margin-left:5%;

}
}
@media (max-width: 480px){
  .rectangleAdd{
    height:1200px;
    width:96%;
    margin-left:2%;
    margin-right:2%;
  }
  .addHeading{
  font-size:2.5rem;
}
.profile-img{
  position:relative;
  z-index:0;
  height:150px;
  width:150px;
  margin-bottom:40%;
  border-radius:50%;
}
.camcircle{
  position:relative;
  z-index:2;
  width:45px;
  height:45px;
  border-radius:50%;
  background-color:#88CFFD;
  margin-top:-66%;
  margin-left:70%;

}
.addp{
  margin-top:-25%;
 margin-left:69%;

}
.camera{
  font-size:1.5rem;
position:relative;
z-index:4;
&:hover{
  font-size:1.8rem;
  
 }
}
.style{
  width: 80%;
    height: 30px;
    border-radius: 5px;
    border:none;
    background-color:#f4f4f2;
    text-align:center;
    margin-bottom:4%;
    font-size:1.6rem;
    font-family: 'Cabin', sans-serif;
    color: var(--circle1);
    
   
}
  .information{
    margin-top:10%;
  }
  .row{
    align-content:center;
    margin-left:15%;
  }
  .column {
  float: left;
  width: 65%;
  margin-left:5%;

}
label{
  font-size:1rem;
}
.yourname{
  margin-right:50%;
  
}
.paintingname{
  margin-right:30%;
}
.paintingtype{
  margin-right:35%;
}
.paintingmedium{
  margin-right:33%;
}
.paintingdimension{
  margin-right:22%;
}
.paintingprice{
  margin-right:40%;
}
.contactNumber{
  margin-right:35%;
}
.painting-img{
  height:200px;
  width:200px;
  
}
.addpainting{
  background-color:#88CFFD;
  width:80%;
  text-align:center;
  border-radius:5px;
  margin-left:10%;
  margin-right:10%;
  height:30px;
  &:hover{
    background-color:transparent;
    border:2px solid var(--explorebtn);
  }
}
.painting-upload{
 
  font-size:1rem;
  font-family: 'Cabin', sans-serif;
  color: var(--heading);
 
}
.click{
  margin-top:10%;
}
.submitBtn{
  border:none;
  width:170px;
  height:30px;
  border-radius:10px;
  background-color:var(--heading);
  a{
    font-size:1rem;
  font-family: 'Cabin', sans-serif;
    color: var(--white); 
    font-weight:bolder;
    cursor:pointer;
  }
  &:hover{
    background-color:var(--black);
  }
}
.Rect{
  position:relative;
${'' /*   
  height:400px; */}
  width:140%;
  margin-left:-12%;
 
  margin-bottom:7%;
  
  
}
}

`

export default AddYourWork