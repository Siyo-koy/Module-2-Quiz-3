// Alysza Mae T. Balansag
// I only learned this today man I am going to die.
// "Everything is just like Ren'py GUI if you're crazy enough" - My mantra

const scene = new THREE.Scene();
const aspect = window.innerWidth/window.innerHeight;
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 ); 
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color ( 0xffffff );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

/// insert code here

// Lighting
const light = new THREE.HemisphereLight( 0xe3c8a3 , 0x365f75, 1);
light.position.set(0.5,1.5,0);
const ambientLight = new THREE.AmbientLight( 0x857174 );

// Items
const diceTower = createDiceTower();

// Positions
//room.position.set(1.5,0,1.5);
//easel.rotation.y = 0.5;

diceTower.position.x = -.5;
diceTower.position.z = -.25;

/// Scene declerations
scene.add(diceTower);


scene.add(light);
scene.add(ambientLight);


// Camera positioning
camera.position.set(7,7,7);
camera.lookAt(0,0,0);

// runs 60fps or 30fps
function animate(){
    requestAnimationFrame(animate);

    scene.rotation.y += 0.008;
    scene.position.y = 2.15;

    // End
    renderer.render( scene, camera);
}

animate();