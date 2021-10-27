const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const hero = document.querySelector('.hero');

hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

//Threee
const Width = hero.clientWidth
const Height=  hero.clientHeight
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(40,Width/Height,1,5000);
camera.rotation.y = 45/180 * Math.PI
camera.position.x = 1600;
camera.position.y = 100;
camera.position.z = 1300;
const renderer = new THREE.WebGLRenderer();
renderer.setSize( Width,Height );
hero.appendChild( renderer.domElement );

const hlight = new THREE.AmbientLight(0x404040,3);
scene.add(hlight)


window.addEventListener( 'resize', onWindowResize );


let mouseX = 0;
let mouseY = 0;

let targetX = 0;
let targetY = 0;

const windowX = window.innerWidth / 2;
const windowX = window.innerHeight / 2;

function onMouseMove(event){
    mouseX = (event.clientX - windowX)
    mouseY = (event.clientY - windowY)
    console.log(mouseX, mouseY)
}

document.addEventListener('mousemove', onMouseMove)
const clock = new THREE.Clock()

let loader = new THREE.GLTFLoader();
loader.load('./src/Earth.gltf',function(gltf){
    earth = gltf.scene.children[0]
    scene.scale.set(1,1,1)
    scene.add(earth);
    animate();
})

function animate() {
    targetX = mouseX * 0.001
    targetY = mouseY * 0.001

    const elapsedTime = clock.getElapsedTime()
    
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    
    earth.rotation.y = .5 * elapsedTime
    earth.rotation.y += .5 * (targetX - earth.rotation.y)
    
}


function onWindowResize() {
    let Width = hero.clientWidth
    let Height = hero.clientHeight
    camera.aspect = Width/ Height;
    
    camera.updateProjectionMatrix();
    renderer.setSize( Width,Height );
    
}
//Threee