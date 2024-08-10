import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import{useTypewriter,Cursor} from 'react-simple-typewriter'
import Laptop from './lol.png';
import Server from './server.png';
import Serve from './serve.png';
import KI from './der.png';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import axios from 'axios';
import Moment from 'react-moment';
import './App.css'
import {data} from './data.js'
import { AiOutlineSearch, AiFillTag } from 'react-icons/ai';


const url='https://api.openweathermap.org/data/2.5/weather?q=Giza&units=imperial&appid=9f2e3b6fc2ce504b3e7bea6aac8f6f8e'


function App() {


  return (
    //Background for the entire page
    <div className='bg-white w-full h-full'>
   

      <NavBar/>
      <Hero/>
      <Features/>
      <Items/>
      <Search/>
      <Footer/>

    </div>
  );
}
function NavBar(){
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white w-full bg-white'>
     <h1 className='w-full text-3xl font-bold text-[#000]'>Uber<span className='w-full text-3xl font-bold text-[#e85d04] pl-3'>Eats</span></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 '>Home</li>
        <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04]'>
        <Link to="Items" spy={true} 
      smooth={true} 
      offset={-50} 
      duration={500} >Products</Link></li>
        <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04]'> 
          <Link to="Search" spy={true} 
      smooth={true} 
      offset={-140} 
      duration={500} >New</Link></li>
        <li className='p-4 font-bold hover:text-[#e85d04] hover:border-b-4 border-[#e85d04] cursor-pointer text-[#000000]'>About</li>
        <li className='p-4 font-bold hover:text-[#e85d04] cursor-pointer text-[#000000] hover:border-b-4 border-[#e85d04]'> <Link to="Footer" spy={true} 
      smooth={true} 
      offset={-140} 
      duration={500} >Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden z-100 overflow-hidden'>
          {nav ? <AiOutlineClose size={20} color='black'/> : <AiOutlineMenu size={20} color='black'/>}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[300px] h-full border-r border-r-gray-900 bg-[#e85d04] ease-in-out duration-500 z-10' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#fff] m-4'>Uber Eats</h1>
          <li className='p-4 border-b border-gray-600'>
          Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

function Hero(){
  return(
    <div className='max-w-[1640px] w-full mx-auto p-4 cur block' id='Hero'>
      <div className='max-h-[500px] relative z-1'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
       
    </div>
    
  );
}
function Features(){
  return(
    <div className='max-w-[1640px] w-full mx-auto p-4' id='Features'>
      <div className='grid md:grid-cols-3 gap-4'>
      <div className='max-h-[170px] relative z-1'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black ml-[140px] absolute bottom-4  rounded-full p-[5px]'>Order Now</button>
            </div>
            <img className='w-full max-h-[170px] object-cover rounded-lg' src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
        <div className='max-h-[170px] relative z-1'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
          <p className='px-2'>Added Daily</p>
          <button className='border-white bg-white text-black ml-[140px] absolute bottom-4  rounded-full p-[5px]'>Order Now</button>
            </div>
            <img className='w-full max-h-[170px] object-cover rounded-lg' src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
        <div className='max-h-[170px] relative z-1'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
            <p className='px-2'>Tasty Treats</p>
            </div>
            <img className='w-full max-h-[170px] object-cover rounded-lg' src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="/" />
        </div>
      </div>

    </div>
  )
}
function Items(){
  const[foods,Setfoods]=useState(data);
  const filtertype=(category)=>{
    Setfoods(
  data.filter((item)=>{
      return item.category===category;
    })
  )}
  const filterprice=(price)=>{
    Setfoods(
  data.filter((item)=>{
      return item.price===price;
    })
  )}

  return(
    <div className='curvy p-0' id='Items'>
    <div className=' w-full mx-auto p-4'>
      <p className='flex justify-center text-7xl  text-[#e85d04] font-extrabold'>Try it out!</p>
      <div className='flex flex-col lg:flex-row justify-between'>



      <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>Setfoods(data)}
            >
              All
            </button>
            <button
            
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full' onClick={()=>filtertype('burger')}
            >
              Burgers
            </button>
            <button
            
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filtertype('pizza')}
            >
            
              Pizza
            </button>
            <button
             
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filtertype('salad')}
            >
              Salads
            </button>
            <button
            
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filtertype('chicken')}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
             
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filterprice('$')}
            >
              $
            </button>
            <button
             
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filterprice('$$')}
            >
              $$
            </button>
            <button
            
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filterprice('$$$')}
            >
              $$$
            </button>
            <button
              
              className='m-1 border-orange-600  bg-orange-600 text-white p-3 rounded-full'
              onClick={()=>filterprice('$$$$')}
            >
              $$$$
            </button>
          </div>
        </div>
     
      </div>
      <div className='grid md:grid-cols-2 gap-6 pt-4'>
        {foods.map((item,index)=>(
          <div key={index} className='pb-3 grid-rows-3  hover:scale-105 duration-300 shadow-xl '>
            <img src={item.image} className='w-full object-cover h-[300px] row-span-2 rounded-t-lg ' alt={item}/>
            <p className='pl-3'>{item.name}</p>
           <div className='flex justify-center'> <button className='bg-[#e85d04]  flex justify-center mt-[50px] px-4 py-4 rounded-full'>Order Now</button></div>
           <div className='flex justify-end pr-3 '> 
           <p className='rounded-full flex  bg-[#e85d04]  w-10 h-6 text-center px-auto justify-center '>{item.price}</p>
           </div>
           
            </div>
        ))}
      </div>
 
</div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mb-[-1px] '>
  <path fill="#e85d04" fill-opacity="1" d="M0,96L24,128C48,160,96,224,144,256C192,288,240,288,288,245.3C336,203,384,117,432,96C480,75,528,117,576,117.3C624,117,672,75,720,64C768,53,816,75,864,85.3C912,96,960,96,1008,112C1056,128,1104,160,1152,160C1200,160,1248,128,1296,122.7C1344,117,1392,139,1416,149.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
</svg>
    </div>
  )
}
function Search(){
  const[data,Setdata]=useState(null);
  const[search,Setsearch]=useState(2000);
//cf57f3ce006344e6a2338539974f89c7
  const url=`https://api.spoonacular.com/mealplanner/generate?apiKey=2f6c70a3d664485491f231d39485c4d4&timeFrame=day&targetCalories=${search}`
  function getCalories(){
    fetch(url).then((response)=>response.json()).then((data)=>
    {
      Setdata(data)
      console.log(data);
  }
).catch((error)=>console.log(error.message))
if(!data) return ("Sorry");
  }
  function handleChange(e) {
    Setsearch(e.target.value);
  }
  return( <div className='max-w-[1640px] w-full mx-auto p-4 cur block bg-[#e85d04]' id='Search'>
    <div className='flex justify-center mt-[-42px] md:mt-[-145px]' id='Search'>
      <p className='font-bold text-7xl text-[#fff] mt[2px] '>Search</p>
      </div>
      <div className=' rounded-full flex items-center px-2 w-[300px] sm:w-[400px] lg:w-[500px] mt-16 mx-auto'>
      <AiOutlineSearch size={25} />
        <input
          className='bg-white p-2 w-full focus:outline-none rounded-full'
          value={search}
          onChange={handleChange}
          
          type='number'
          
          placeholder='Search foods'
        />
        <button onClick={getCalories} className='rounded-lg bg-white ml-5 p-2'>Search</button>
        </div>
        <div>
        <br/>
        {data&&<MealList data={data} className='mt-[200px]'/>}
        </div>
    </div>
  )
}
function MealList({data}){
  const nutrients=data.nutrients;
  return(
    <main>
      
      <ul className='grid md:grid-cols-4'>
          <li className='font-bold text-2xl text-white'>Calories: {nutrients.calories.toFixed(0)}</li>
          <li className='font-bold text-2xl text-white'>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}g</li>
          <li className='font-bold text-2xl text-white'>Fat: {nutrients.fat.toFixed(0)}g</li>
          <li className='font-bold text-2xl text-white'>Protein: {nutrients.protein.toFixed(0)}g</li>
        </ul>
        <section className='meals grid md:grid-cols-3 mt-[100px] gap-4'>
        {data.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal}  />;
        })}
        </section>
    </main>
    
  );
}
function Meal({meal}){
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=2f6c70a3d664485491f231d39485c4d4&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className='hover:scale-105 duration-300'>
      
      <img src={imageUrl} alt="recipe" className='rounded-md'/>
      <h1 className='text-white text-5xl'>{meal.title}</h1>
      <ul className="instructions mt-[15px]">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black' id='Footer'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#000]'>Uber<span className='w-full text-3xl font-bold text-[#e85d04] pl-3'>Eats</span></h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className=' text-black font-bold'>Solutions</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='text-black font-bold'>Support</h6>
        <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
    </div>
    <div>
        <h6 className='text-black font-bold'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>
             About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='text-black font-bold'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};






export default App;
