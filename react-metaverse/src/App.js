import './App.css';
import 'aframe'
import 'three'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import classroom from './japanese_classroom.glb'

function App() {
  const loader = new GLTFLoader
  loader.load(classroom,(d)=>{
    const entity =document.getElementById("classroom");
    entity.object3D.add(d.scene)
})
  return (
    <a-scene>
      <a-assets>
      </a-assets>
      <a-entity id="classroom" position="5 -15 5" scale="15 15 15"></a-entity>
    </a-scene>
  );
}

export default App;
