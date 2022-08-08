import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap'


let camera, renderer, scene;

const loader = new GLTFLoader()

// init


 export function init(){


 camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
 camera.position.z = 5;
 camera.rotation.z = - 0.06;

scene = new THREE.Scene();

/* geometry = new THREE.BoxGeometry(1,1,1)
material = new THREE.MeshBasicMaterial({ color: 0xff00ff})
mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) */

/* Light */
	const light = new THREE.AmbientLight(0xffffff, 7)
	scene.add(light)

 /* loader */
 loader.load(
	 '/models/pioneer/scene.gltf',
	 (gltf) => {
		let model = gltf.scene
		model.scale.set(.45,.45,.45)
		model.rotation.x = 0.3
		model.position.y = 0.1
		model.position.x = 0.3


		console.log(gltf.scene);

		gsap.to(camera.position, {
            z: 1,
            duration: 1,
            ease: "back.out(1.0)"
        })

		gsap.to(camera.rotation, {
            z: 0,
            duration: 1,
            
        })

		gsap.to(model.rotation, {
            x: 1,
            duration: 1,
			delay: 0.6
        })

		gsap.to(model.scale, {
            duration: 1,
			delay: 0.6,
			x: .60,
			y: .60,
			z: .60
        })

		gsap.to(model.position, {
            duration: 1,
			delay: 0.6,
			x: 0.6,
			/* y: 0.1 */
		
        })




		console.log(model);
		scene.add(model)
	 })



 renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x333333, 1)
renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

window.addEventListener('resize', () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight)
})

}



// animation



function animation() {

	
  


	renderer.render( scene, camera );


}



