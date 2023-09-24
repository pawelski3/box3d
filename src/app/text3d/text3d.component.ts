import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { ACESFilmicToneMapping } from 'three';
@Component({
  selector: 'app-text3d',
  templateUrl: './text3d.component.html',
  styleUrls: ['./text3d.component.css']
})
export class Text3dComponent implements OnInit {

  camera: any
  scene: any
  renderer: any


  ngOnInit(): void {


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 1, 1500);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
  
    scene.add(cube);

    camera.position.set (-3,5,50);
    // camera.lookAt(2,1,1)

// const domEvents=new THREEx.domEvents(camera,renderer.domElement)
// domEvents.addEventListener(cube,"click",event=>{
//   console.log("event")
// })

// const mmi=new MouseMeshInteraction(scene,camera)




    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      material
    );
    ground.position.x = 3
    // ground.rotateX(-Math.PI/2)

    // ground.receiveShadow=true
    scene.add(ground)


    let text = "Hello"
    // let textMesh: THREE.Object3D<THREE.Object3DEventMap>
    let textMesh:any
    const loader = new FontLoader();

    loader.load('../assets/Inter_Regular.json', function (font) {

      const tGeometry = new TextGeometry('Hello three.js!', {
        font: font,
		size: 16,
		height: 1,
		curveSegments: 1,
		bevelEnabled: true,
		bevelThickness: 1,
		bevelSize: 8,
		bevelOffset: 0,
		bevelSegments: 1
      });

      textMesh = new THREE.Mesh(tGeometry, [
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
        new THREE.MeshPhongMaterial({ emissive: 0xf93434, emissiveIntensity: Math.random()-0.6 }),
        new THREE.MeshPhongMaterial({ color: 0x345634 })


      ])
      textMesh.position.set(-70,3,0)
      scene.add(textMesh)


    });







    function animate() {
      requestAnimationFrame(animate);

      // textMesh.rotation.x += 0.01;
      // textMesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();











































    // FontLoader.load('three/addons/loaders/FontLoader.js')
    //   this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    //   this.camera.position.set( 0, - 400, 600 );

    //   let scene = new THREE.Scene();
    //   scene.background = new THREE.Color( 0xf0f0f0 );

    //   const loader = new FontLoader();
    //   loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

    //     const color = 0x006699;

    //     const matDark = new THREE.LineBasicMaterial( {
    //       color: color,
    //       side: THREE.DoubleSide
    //     } );

    //     const matLite = new THREE.MeshBasicMaterial( {
    //       color: color,
    //       transparent: true,
    //       opacity: 0.4,
    //       side: THREE.DoubleSide
    //     } );

    //     const message = '   Three.js\nSimple text.';

    //     const shapes = font.generateShapes( message, 100 );

    //     const geometry = new THREE.ShapeGeometry( shapes );

    //     geometry.computeBoundingBox();

    //     // const xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );

    //     // geometry.translate( xMid, 0, 0 );

    //     // make shape ( N.B. edge view not visible )

    //     const text = new THREE.Mesh( geometry, matLite );
    //     text.position.z = - 150;
    //     scene.add( text );

    //     // make line shape ( N.B. edge view remains visible )

    //     var holeShapes = [];

    //     for ( let i = 0; i < shapes.length; i ++ ) {

    //       const shape = shapes[ i ];

    //       if ( shape.holes && shape.holes.length > 0 ) {

    //         for ( let j = 0; j < shape.holes.length; j ++ ) {

    //           const hole = shape.holes[ j ];
    //           holeShapes.push( hole );

    //         }

    //       }

    //     }

    //     // shapes.push.apply( shapes, holeShapes );

    //     const lineText = new THREE.Object3D();

    //     for ( let i = 0; i < shapes.length; i ++ ) {

    //       const shape = shapes[ i ];

    //       const points = shape.getPoints();
    //       const geometry = new THREE.BufferGeometry().setFromPoints( points );

    //       // geometry.translate( xMid, 0, 0 );

    //       const lineMesh = new THREE.Line( geometry, matDark );
    //       lineText.add( lineMesh );

    //     }

    //     scene.add( lineText );

    //     // render();

    //   } ); //end load function

    //   let renderer = new THREE.WebGLRenderer( { antialias: true } );
    //   renderer.setPixelRatio( window.devicePixelRatio );
    //   renderer.setSize( window.innerWidth, window.innerHeight );
    //   document.body.appendChild( renderer.domElement );

    //   const controls = new OrbitControls( this.camera, renderer.domElement );
    //   controls.target.set( 0, 0, 0 );
    //   controls.update();

    //   // controls.addEventListener( 'change', render );

    //   // window.addEventListener( 'resize', onWindowResize );
    //   this.renderer.render( this.scene, this.camera );
    // } // end init

    // function onWindowResize() {

    // this.camera.aspect = window.innerWidth / window.innerHeight;
    // this.camera.updateProjectionMatrix();

    // renderer.setSize( window.innerWidth, window.innerHeight );

    // render();

    // }

    // function render() {

    // this.renderer.render( this.scene, this.camera );

    // }
  }


 ble(){
console.log("ble")
}


}



