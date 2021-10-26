const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const hero = document.querySelector('.hero')
hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

//THREEEEE..
let scene, camera,renderer;

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180 * Math.PI
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    hlight = new THREE.AmbientLight(0x404040,100);
    scene.add(hlight)

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    hero.appendChild(renderer.domElement)

    let loader = new THREE.GLTFLoader();
    loader.load('./src/Earth.gltf',function(gltf){
        earth = gltf.scene.children[0]
        earth.scale.set(0.5,0.5,0.5)
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    })
}
init(); 

//THREEEEE..