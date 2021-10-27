const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
const hero = document.querySelector('.hero');
hamburger.addEventListener('click',function (){
    this.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active');
})

//THREEEEE..
var scene, camera,renderer;

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    width = window.innerHeight
    Height = window.innerWidth
    console.log(width)
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180 * Math.PI
    camera.position.x = 1600;
    camera.position.y = 100;
    camera.position.z = 1300;
    

    hlight = new THREE.AmbientLight(0x404040,3);
    scene.add(hlight)

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(hero.clientWidth, hero.clientHeight);
    hero.appendChild(renderer.domElement)
    
    const setSize = (container, camera, renderer) => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
    };

    hero.addEventListener('resize' ,setSize(hero,camera,renderer))

    let loader = new THREE.GLTFLoader();
    loader.load('./src/Earth.gltf',function(gltf){
        earth = gltf.scene.children[0]
        scene.scale.set(0.5,0.5,0.5)
        scene.add(earth);
        renderer.render(scene,camera);
    })
}

init(); 
//THREEEEE..
        
    
   

