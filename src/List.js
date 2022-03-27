import image from "./pc3.jpg"
import img from "./test.png"
import video from "./video1.mp4"
import"./Style.css"
const List =()=>{
    
          return (
            <div>
              <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
                <h1 className="title red">checkpoint JSX</h1>
                <br />
                <img src={img} alt="img" width="900px" height="500px"/>
                <br />
                <img src={image} alt="img" width="900px" height="500px" />
                <br />
              <video src={video} autoPlay="true" width="900px" height="300px"/>
              </div>
            </div>
          );
          
}
export default List;