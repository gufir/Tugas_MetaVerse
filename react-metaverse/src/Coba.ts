import * as THREE from "three"
import { CanvasRenderer, Light } from "three.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

//SCENE

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa8def0);

//Camera
const camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.y = 5;
camera.position.z = 5;
camera.position.x = 0;

//RENDERER
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

//Control
const orbitControls = new OrbitControls(camera,renderer,domElement);
orbitControls.enableDamping = true;
orbitControls.minDistance = 5;
orbitControls.maxDistance = 15;
orbitControls.enablePan = false;
orbitControls.maxPolarAngle = Math.PI / 2-0.05;
orbitControls.update();

//LIGHTs
Light()

//FLOOR
generatFloor()

// MODEL
new GLTFLoader().load('models/Soldier.glb',function(gltf){
    const model = gltf.scene;
    model.transverse(function (object: any){
        if (object.isMesh) object.castShadow = true;
    })
    scene.add(model);
})
