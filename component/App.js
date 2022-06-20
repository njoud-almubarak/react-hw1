import './App.css';
import MyCats from './cat';


function App() {
  return (
    <div className='App'>
     <h1> cat store </h1>
    
<div className="cat-cont">
    <MyCats
    image={"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"losy"}
    age={7}/>

<MyCats
    image={"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"snow"}
    age={2}/>


<MyCats
    image={"https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"}
    name={"hidi"}
    age={1}/>


<MyCats
    image={"https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=600"}
    name={"softy"}
    age={10}/>

</div>
    </div>
  );
};



export default App;