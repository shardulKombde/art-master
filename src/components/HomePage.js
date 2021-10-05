import React from 'react'
import styled from 'styled-components'
import hero from '../assets/header.jpg'
import landscape from '../assets/landscape.jpg'
import abstract from '../assets/abstract.jpg'
import contemporary from '../assets/contemporary.jpg'
import knife from '../assets/knife.jpg'
import modernArt from '../assets/modernArt.jpg'
import portrait from '../assets/portrait.jpg'
import {  Footer } from '../components'
import { useHistory, Link } from 'react-router-dom';


const HomePage = () => {
    
    let history = useHistory();

    const Add = () => {
    history.push("/AddYourWork");
  }

  const Buy = () => {
    history.push('/BuyPaintings')
  }

 return <Home>
 <section className="header-image">
     <div className="image-head">
         <img className="hero-img" src={hero}/>
         <div className="header1">
             <div className="hero_container1">
                 <button  className="btn_div" onClick={() => {
                     history.push("/AddYourWork")
                 }}><a>ADD YOUR WORK</a></button>
             </div>
             <div className="hero_container2">
                 <button   className="btn_med" onClick={Buy}><a>EXPLORE PAINTINGS</a></button>
             </div>
         </div>
     </div>
 </section>

 {/*-------------------- add work ----------------------------------------------------*/}
  <section className="addWork">

 <div className="container">
 <div className="container1">
     <div className="rectangle1">
     <div className="circle1"><h2 className="one">01</h2></div>
     <h3 class="heading1">REGISTER YOURSELF</h3>
        <p class="info1">To add your work <br/> register yourself first.</p>
     
      
     </div>
 </div>
 <div className="container2">
     <div className="rectangle2">
     <div className="circle2"><h2>02</h2></div>
     <h3 class="heading2"> ADD DETAILS</h3>
     <p class="info2">Add all your details <br/> such as your name, type <br/>
      of your art, profile  <br/> picture price, etc.</p>
     
    
     </div>
 </div>
 <div className="container3">
     <div className="rectangle3">
     <div className="circle3"><h2>03</h2></div>
     <h3 class="heading3"> UPLOAD PHOTOS </h3>
     <p class="info3">Upload photos of your <br/> Artwork.</p>
     
    
     </div>

 </div>
 </div>
 <div className="rectangle">
  <h2 className="work"><span className="how-to">How to </span> Add your Work</h2>
  {/* <div className="clickButton">
  <button className="workButton" onClick={Add}>Add Your Work</button>
  </div> */}
  <div className="clickme">
      <button onClick={Add}  className="add-your-work"><a>Add your work</a></button>
  </div>


  </div>

 </section>
 
  {/*----------x---------- add work ------------------------x----------------------------*/}

  {/*---------------------- painting types  ---------------------------------------------*/}
<section className="painting-types">
    <div className="text1">
      <h1 className="landscape"><a>Landscape</a></h1>
      <h1 className="portrait"><a>Portrait</a></h1>
      <h1 className="abstract"><a>Abstract</a></h1>
    </div>
    <div >
       <img className="landscape-img" src={landscape}/>
    
        <img className="portrait-img" src={portrait}/>
        <img className="abstract-img" src={abstract}/>
   
</div>


<div>
       <img className="contemporary-img" src={contemporary}/>
   
        <img className="modernArt-img" src={modernArt}/>
        <img className="knife-img" src={knife}/>
</div>
<div className="text1">
<h1 className="contemporary"><a>Contemporary</a></h1>
      <h1 className="modernArt"><a>Modern-Art</a></h1>
      <h1 className="knife"><a>Other</a></h1>
</div>
</section>
 
  {/*-----------x----------- painting types  -----------------x----------------------------*/}

 {/* ----------------------buy work ----------------------------------------------------*/}

 <section className="BuyWork">
 
<div className="buycontainer">
<div className="buycontainer1">
    <div className="buyrectangle1">
    <div className="buycircle1"><h2 className="one">01</h2></div>
   
       <p class="info1">To buy a painting  <br/> register yourself first.</p>
       <h3 class="heading1">REGISTER YOURSELF</h3>
     
    </div>
</div>
<div className="buycontainer2">
    <div className="buyrectangle2">
    <div className="buycircle2"><h2>02</h2></div>
   
    <p class="info2">Find the perfect piece <br/>by browsing our  <br/>
   
    carefully <br/>curated collection .</p>
    
    <h3 class="heading2">DISCOVER ARTWORK YOU LOVE</h3>
    </div>
</div>
<div className="buycontainer3">
    <div className="buyrectangle3">
    <div className="buycircle3"><h2>03</h2></div>
    
    <p class="info3">Checkout smoothly by <br/> sharing required details. <br/>
   
    Once we receive your <br/>  order, we will ship your <br/> artwork securely.</p>
    
    <h3 class="heading3"> EASILY PLACE YOUR ORDER ONLINE</h3>
    </div>

</div>
</div>
<div className="buyrectangle">
 <h2 className="buywork"><span className="buyhow-to">How to </span> Buy Artwork</h2>
 <div className="clickme">
     <button onClick={Buy}  className="buy-your-work"> <a href="">Explore Paintings</a></button>
 </div>
 </div>
</section>

 {/* ----------------------buy work ----------------------------------------------------*/}



<Footer />
 </Home>
}

const Home = styled.section`

.hero-img{
    width:100%;
    height:508px;
    margin-top:-2%;
    
}
.header1{
    position:absolute;
    top:40%;
    left:4%;
    ${'' /* margin-top:-40%;
    margin-left:-50%; */}
}
.btn_div{
  background-color:var(--addbtn);
  border:none;
  height:70px;
  width:350px;
  border-radius:15px;
  text-align:center;
  cursor:pointer;
  filter: drop-shadow(8px 8px 3px #bbbfca);
  &:hover{
      background-image: linear-gradient(to right, #88CFFD 0%, #CAE8FC 51%, #E3F1F7 100%);
  }
}
.btn_div a{
   color: var(--black);
   text-decoration: none;
   font-family: 'Abril Fatface', cursive;  
   font-weight:bold;   
   font-size:20px;
   letter-spacing:1.5px; 
}
.btn_med{
background-color:var(--exbtn);
border:none;
height:70px;
width:350px;
border-radius:15px;
text-align:center;
margin-top:10%;
margin-left:17%;
cursor:pointer;
filter: drop-shadow(8px 8px 3px #bbbfca);

&:hover{

      background-image: linear-gradient(to right, #F4ECE5 0%, #FFCC9B 51%, #F6A344 100%);
  }
}
.btn_med a
{
    color: var(--black);
    text-decoration: none;
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;   
   font-size:20px;
   letter-spacing:1.5px; 
}

${'' /* @media screen and (min-width:1300px){
.header1{
    position:absolute;
    top:40%;
}
.btn_div a {
  font-size:1.6rem;
}
.btn_med a {
  font-size:1.6rem;
}
} */}
 @media  screen and (max-width:992px) {
.hero-img{
  margin-top:-6%;
}
}

@media screen and (max-width:900px){
    .btn_div{
        width:300px;

    }
    .btn_med{
        width:300px;

    }
}



${'' /*------------------------- add work ---------------------------------------------*/}

.container{
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    justify-content:space-around;
    margin-top:20%;
    h2{
        margin-top:20px;
        font-size:3rem;
    }
    .one{
        color:var(--white);
    }
}
.rectangle1{
    position:relative;
    width:320px;
    height:400px;
    background-color:var(--addbtn);
    text-align:center;
    align-content:center;
    display:flex;
    flex-direction:column;
   z-index:1;
}
.rectangle2{
    position:relative;
    width:320px;
    height:400px;
    background-color:var(--rect2);
    text-align:center;
    align-content:center;
    display:flex;
    flex-direction:column;
    z-index:1;
    
}
.rectangle3{
    position:relative;
    z-index:1;
    width:320px;
    height:400px;
    background-color:var(--rect3);
    text-align:center;
    display:flex;
    flex-direction:column;
    align-content:center;
    
}
.circle1{

    height: 100px;
    width:100px;
    background-color: var(--circle1);
    border-radius: 50%; 
    border: 5px solid #BBBBBB;
    z-index: 1;
    text-align:center;
    margin-left:99px;
    margin-top:-17%;
}
.circle2
{

    height: 100px;
    width:100px;
    margin-left:99px;
    margin-top:-17%;
    background-color:var(--circle2);
    border-radius: 50%; 
    border: 5px solid #707070;
    z-index: 1;
    text-align:center;
}
.circle3
{

    margin-left:99px;
    margin-top:-17%;
    height: 100px;
    width:100px;
    background-color: var(--circle3);
    border-radius: 50%; 
    border: 5px solid var(--black);
    z-index: 1;
    text-align:center;
}
.heading1
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-top:12%;
}
.heading2
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-top:12%;
}
.heading3
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-top:12%;
}
.info1
{
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
   margin-top:15%;
}
.info2
{
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
    margin-top:15%;
}
.info3
{
    margin-top:15%;
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);

}
.rectangle{
    position: relative;
    width: 100%;
    height: 400px;
    background-color: var(--black);
    margin-top:-200px;
    z-index: 0;
   justify-content:center;
   align-item:center;
   text-align:center;
   margin-bottom:20%;
}

.work
{
    position: absolute;
    top:59%;
    left:10%;
    right:10%;
    z-index: 1;
    align-self:center;
    color: white;
    font-family: 'Tangerine', cursive;
    font-size: 4rem;
    word-spacing: 1rem;
}
.how-to
{
    color: #BBBBBB;
}


.add-your-work
{
   
    align-self:center;
    margin-top:310px;
    background-color:var(--addbtn);
    border-radius: 20px;
    width: 250px;
    height: 55px;
    text-align: center;
    display: inline-block;
    box-shadow: -3px 5px 25px  var(--box);
    border: none;
    cursor:pointer;
    &:hover{
        width: 270px;
        height: 65px;
        background-image: linear-gradient(to right, #88CFFD 0%, #CAE8FC 51%, #E3F1F7 100%);
    }
   
}
.add-your-work a
{
    position: center;
    z-index: 2;
    font-size: x-large;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
}


@media (max-width: 970px) {
    .work{
        font-size:3rem;
    }

    .container{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-content:center;

    }
    .rectangle1{
        margin-top:20%;
    }
    .rectangle2{
        margin-top:20%;
    }
    .rectangle3{
        margin-top:20%;
    }



   
}
${'' /*------------x------------- add work ------------------x---------------------------*/}

${'' /*---------------------------- painting type ---------------------------------------*/}
.text1{
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    justify-content:space-around;
    align-content:center;
}
.landscape{
    font-size: 10.5rem; 
    opacity: 1;
    margin-top:-5%;
  a{
    color: var(--landscape);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bold;
    font-style: italic;
    &:hover{
        color:var(--black);
        font-style:normal;
    }
  }
}
.portrait{
    font-size: 7.7rem; 
    opacity: 1;
    margin-top:-2%;
    a{
        color: var(--potrait);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bolder;
    font-style: italic;
    &:hover{
        color:var(--black);
        font-style:normal;
    }
    }
}
.abstract{
    font-size: 6.5rem; 
    opacity: 1;
    margin-top:-1%;
    a{
        color: var(--body);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bolder;
    font-style: italic;
    &:hover{
        color:var(--black);
        font-style:normal;
    }
    }
}

.landscape-img{
    width:500px;
    height:300px;
    margin-left:-1%;
}
.portrait-img{
    width:220px;
    height:300px;
    margin-left:4%;
}
.abstract-img{
    width:220px;
    height:300px;
   margin-left:4%;
}
.contemporary-img{
    width:230px;
    height:300px;
    margin-left:-1%;
    margin-top:4%;
}
.modernArt-img{
    width:220px;
    height:300px;
    margin-left:4%;
    margin-top:4%;
}
.knife-img{
    width:490px;
    height:300px;
    margin-left:4%;
    margin-top:4%;
}


.contemporary{
    font-size: 5.5rem; 
    margin-left:-5%;
    margin-top:2%;
   a{
    color: var(--body);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bolder;
    font-style: italic;
    &:hover{
        font-style:normal;
        color:var(--black);
    }
   }
}
.modernArt{
    font-size: 6.7rem; 
    margin-left:-7%;
    margin-top:2%;
    a{
        color:var(--potrait);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bolder;
    font-style: italic;
    &:hover{
        font-style:normal;
        color:var(--black);
    }
    }
}
.knife{
    font-size: 9.5rem; 
    margin-left:-7%;
    a{
        color:var(--landscape);
    text-decoration: none;
    font-family: 'Tangerine', cursive;
    font-weight: bolder;
    font-style: italic;
    &:hover{
        font-style:normal;
        color:var(--black);
    }
    }
}
@media (max-width: 1033px){
    .landscape-img{
      width:550px;
      margin-bottom:5%;
    }
    .portrait-img{
      width:240px;
      height:350px;
    
    }
    .abstract-img{
      width:240px;
      height:390px;
      margin-right:63%;
    }
    .contemporary-img{
        width:400px;
      height:450px;
      margin-left:1%;
      
    }
    .modernArt-img{
        width:350px;
      height:500px;
      margin-left:9%;
      margin-top:2%;
    }
    .knife-img{
        width:550px;
        height:320px;
        position:absolute;
        right:9%;
        margin-top:-35%;
        
    }
}


@media (max-width: 1114px) {
    .landscape{
      font-size:8.5rem;
    }
    .portrait{
        font-size:5.7rem;
    }
    .abstract{
        font-size:4.5rem;
    }
    .contemporary{
        font-size:3.5rem;
    }
    .modernArt{
        font-size:4.7rem;
    }
    .knife{
        font-size:7.5rem;
    }
}
@media (max-width: 870px) {
    .landscape{
      font-size:7.5rem;
    }
    .portrait{
        font-size:4.7rem;
    }
    .abstract{
        font-size:3.5rem;
    }
    .contemporary{
        font-size:2.5rem;
    }
    .modernArt{
        font-size:3.7rem;
    }
    .knife{
        font-size:6.5rem;
    }
}
@media (max-width: 740px;) {
    .landscape{
      font-size:5.5rem;
    }
    .portrait{
        font-size:3.7rem;
    }
    .abstract{
        font-size:2.5rem;
    }
    .contemporary{
        font-size:1.5rem;
    }
    .modernArt{
        font-size:2.7rem;
    }
    .knife{
        font-size:5.5rem;
    }
}
@media (max-width: 727px;) {
    .landscape{
      font-size:4.5rem;
    }
    .portrait{
        font-size:2.7rem;
    }
    .abstract{
        font-size:1.5rem;
    }
    .contemporary{
        font-size:0.5rem;
    }
    .modernArt{
        font-size:1.7rem;
    }
    .knife{
        font-size:4.5rem;
    }
}
@media (max-width: 1033px;){
    .landscape-img{
       width:1600px;
    }
    .portrait-img{
      width:300px;
    }
    .abstract-img{
      width:300px;
    }
    .contemporary-img{
      width:300px;
    }
    .modernArt-img{
      width:300px;
    }
    .knife-img{
      width:600px;
    }
}


${'' /*-------------x--------------- painting type -------------x--------------------------*/}

${'' /* --------------------------buy work----------------------------------------------- */}

.BuyWork{
    margin-top:30%;
}
.buycontainer{
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    justify-content:space-around;
    h2{
        margin-top:20px;
        font-size:3rem;
    }
    .one{
        color:var(--white);
    }
}
.buyrectangle1{
    position:relative;
    width:320px;
    height:400px;
    background-color:var(--exbtn);
    text-align:center;
    align-content:center;
    display:flex;
    flex-direction:column-reverse;
    z-index:1;
    
}
.buyrectangle2{
    position:relative;
    width:320px;
    height:400px;
    background-color:var(--exrect2);
    text-align:center;
    align-content:center;
    display:flex;
    flex-direction:column-reverse;
    z-index:1;
}
.buyrectangle3{
    position:relative;
    z-index:1;
    width:320px;
    height:400px;
    background-color:var(--exrect3);
    text-align:center;
    display:flex;
    flex-direction:column-reverse;
    align-content:center;
}
.buycircle1{

    height: 100px;
    width:100px;
    background-color: var(--circle1);
    border-radius: 50%; 
    border: 5px solid #BBBBBB;
    z-index: 1;
    text-align:center;
    margin-left:99px;
    margin-bottom:-15%;
}
.buycircle2
{

    height: 100px;
    width:100px;
    margin-left:99px;
    margin-bottom:-15%;
    background-color:var(--circle2);
    border-radius: 50%; 
    border: 5px solid #707070;
    z-index: 1;
    text-align:center;
}
.buycircle3
{

    margin-left:99px;
    margin-bottom:-15%;
    height: 100px;
    width:100px;
    background-color: var(--circle3);
    border-radius: 50%; 
    border: 5px solid var(--black);
    z-index: 1;
    text-align:center;
}
.heading1
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-bottom:12%;
}
.heading2
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-bottom:3%;
}
.heading3
{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    font-size:1.7rem;
    margin-bottom:8%;
}
.info1
{
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
    margin-bottom:40%;
}
.info2
{
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
    margin-bottom:12%;
}
.info3
{
    margin-top:5%;
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
    margin-bottom:1%;
}
.buyrectangle{
    position: relative;
    width: 100%;
    height: 400px;
    background-color: var(--black);
    margin-top:-600px;
     z-index: 0;
   justify-content:center;
   align-item:center;
   text-align:center;
   margin-bottom:40%;
}

.buywork
{
    position: absolute;
    top:27%;
    left:10%;
    right:10%;
    z-index: 1;
    align-self:center;
    color: white;
    font-family: 'Tangerine', cursive;
    font-size: 4rem;
    word-spacing: 1rem;
}
.buyhow-to
{
    color: #BBBBBB;
}

.buy-your-work
{
   
    align-self:center;
    margin-top:31px;
    background-color:var(--exbtn);
    
    border-radius: 20px;
    width: 250px;
    height: 55px;
    text-align: center;
    display: inline-block;
    box-shadow: -3px 5px 25px  var(--box);
    border: none;
    &:hover{
        width: 270px;
        height: 65px;
        background-image: linear-gradient(to right, #F4ECE5 0%, #FFCC9B 51%, #F6A344 100%);

}
}
.buy-your-work a
{
    position: center;
    z-index: 2;
    font-size: x-large;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
}


@media (max-width: 970px) {
    .buywork{
        font-size:3rem;
    }

    .buycontainer{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-content:center;

    }
    .buyrectangle{
        margin-top:-1520px;
        margin-bottom:220%;
    }
    .buyrectangle1{
        margin-top:20%;
    }
    .buyrectangle2{
        margin-top:20%;
    }
    .buyrectangle3{
        margin-top:20%;
        
    }
    .heading1{
        margin-bottom:3%;
    }
    .heading2{
        margin-bottom:-3%;
    }
    .heading3{
        margin-bottom:-1%;
    }

   
}

${'' /* ------------x--------------buy work------------------x----------------------------- */}

`

export default HomePage