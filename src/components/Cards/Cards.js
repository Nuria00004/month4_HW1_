const Cards = ({object})=>{
    console.log(object)
    return (
        <div className="parent">
           <div>
               <h1>{object.title}</h1>
               <h2>{object.subtitle}</h2>
               <button>{object.button}</button>
           </div>
            <div className="img">
                <img src={object.img} alt=""/>
            </div>


        </div>)
}

export default Cards

