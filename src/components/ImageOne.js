import { Parallax } from 'react-parallax';
import Nasa from '../img/t1.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne