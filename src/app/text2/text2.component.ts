import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { ACESFilmicToneMapping } from 'three';

@Component({
  selector: 'app-text2',
  templateUrl: './text2.component.html',
  styleUrls: ['./text2.component.css']
})
export class Text2Component implements OnInit {
  camera: any
  scene: any
  renderer: any
  // textMesh:any


  ngOnInit(): void {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    // document.body.appendChild( renderer.domElement );
    let display = (<HTMLInputElement>document.getElementById("t1"))
    display.appendChild(renderer.domElement);


    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    var textMesh: any
    const loader = new FontLoader();

    loader.load('../assets/Inter_Regular.json', function (font) {

      const tgeometry = new TextGeometry('Hey Yoy2', {
        font: font,
        size: 0.3,
        height: 0.1,
        // curveSegments: 1,
        // bevelEnabled: true,
        // bevelThickness: 4,
        // bevelSize: 8,
        // bevelOffset: 1,
        // bevelSegments: 1
      });

      textMesh = new THREE.Mesh(tgeometry, [
        new THREE.MeshBasicMaterial({ color: 0xffff00 }),
        new THREE.MeshNormalMaterial()
        // new THREE.MeshPhongMaterial({ emissive: 0xf93434, emissiveIntensity: Math.random()-0.6 }),
        // new THREE.MeshPhongMaterial({ color: 0x345634 })


      ])
      textMesh.position.set(-3, 1, 0)
      scene.add(textMesh)



    });

    const light = new THREE.PointLight(0xffffff, 1, 100)
    light.castShadow = true
    // light.shadow.mapSize.width=4096
    // light.shadow.mapSize.height=4096
    light.position.set(50, 50, 50);
    scene.add(light)

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(2, 2),
      material
    );
    ground.position.x = 3
    ground.rotateX(-Math.PI / 2)

    // ground.receiveShadow=true
    scene.add(ground)




    function animate() {
      requestAnimationFrame(animate);
if (textMesh.position.x >9){
  textMesh.position.x = -7;
}
      textMesh.position.x += 0.01;
      // textMesh.rotation.y += 0.01;
console.log("positopn ",textMesh.position.x)
      renderer.render(scene, camera);
    }

    animate();












  }

}
