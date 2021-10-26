const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector(".mobile-nav");
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
    camera.position.x = 1800;
    camera.position.y = 100;
    camera.position.z = 1200;
    

    hlight = new THREE.AmbientLight(0x404040,3);
    scene.add(hlight)

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement)

    function onResize(){
        var Width = window.innerWidth;
        var Height = window.innerHeight;
        renderer.setSize(Width,Height)
        camera.aspect = Width/Height;
        camera.updateProjectionMatrix()

        renderer.setSize(Width,Height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize',onResize)

    let loader = new THREE.GLTFLoader();
    loader.load('./src/Earth.gltf',function(gltf){
        earth = gltf.scene.children[0]
        scene.add(earth);
        renderer.render(scene,camera);
    })
}

init(); 
//THREEEEE..
        
    
   

