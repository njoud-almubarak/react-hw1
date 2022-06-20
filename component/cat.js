import './App.css';
const Cats= (c)=>{
    return (
    <div>
          <img className="cat-img" src={c.image} alt="cat "/>
          <h3>Name:{c.name}</h3>
          <h3>Age:{c.age} month</h3>

    </div>
    );
};



export default Cats;