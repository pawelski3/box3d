import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import{CSS2DObject, CSS2DRenderer} from 'three/examples/jsm/renderers/CSS2DRenderer';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'box3d';

camerax:any
cameraz:any


  ngOnInit(): void {
    // var scene = new THREE.Scene();
    // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const colorYellow = new THREE.Color('hsl(40,100%,60%)')
    // const colorBlue = new THREE.Color('hsl(242, 42%, 51%)')
    // var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    // let controls=new THREE.OrbitControls(camera);

    // // window.addEventListener('resize', onWindowResize, false);

    // let material = new THREE.MeshPhongMaterial({
    //   color: colorYellow,
    //   shininess: 80,
    //   // map: texture
    // })
    // var cubeGeometry = new THREE.BoxGeometry(0.4, 2, 1);
    // let cube = new THREE.Mesh(cubeGeometry, material);

    // cube.position.set(2, 2, 1); // Ustaw pozycję na osi Y jako połowę wysokości sześcianu
    // scene.add(cube);
    // renderer.render(scene, camera);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000);
    camera.position.set(-900, 0, -900)
    // let controls=new THREE.OrbitControls(camera);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    let controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableDamping=true
    // controls.minDistance = 500
    // controls.maxDistance = 1500
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(10000, 10000, 10000);
    const geometry1 = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    let materialArray = []
    let textureft = new THREE.TextureLoader().load("../assets/gallery/barren_ft.jpg")
    let texturebk = new THREE.TextureLoader().load("../assets/gallery/barren_bk.jpg")
    let textureup = new THREE.TextureLoader().load("../assets/gallery/barren_up.jpg")
    let texturedn = new THREE.TextureLoader().load("../assets/gallery/barren_dn.jpg")
    let texturert = new THREE.TextureLoader().load("../assets/gallery/barren_rt.jpg")
    let texturelt = new THREE.TextureLoader().load("../assets/gallery/barren_lf.jpg")

    materialArray.push(new THREE.MeshBasicMaterial({ map: textureft }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texturebk }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: textureup }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texturedn }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texturert }))
    materialArray.push(new THREE.MeshBasicMaterial({ map: texturelt }))

    for (let i = 0; i < 6; i++) { materialArray[i].side = THREE.BackSide }


    let skyboxgeo = new THREE.BoxGeometry(10000, 10000, 10000)
    let skybox = new THREE.Mesh(skyboxgeo, material)
    // scene.add(skybox)
    // var textureLoader = new THREE.TextureLoader();
    // var texture = textureLoader.load('./3d/xxx.png');
    // texture.encoding = THREE.sRGBEncoding;
    // scene.background = texture----------------------------------


    // const cube = new THREE.Mesh( geometry, material );
    const cube = new THREE.Mesh(geometry, materialArray);
    scene.add(cube);
    // const cube2 = new THREE.Mesh(geometry1, material);
    // cube2.position.x = -500//3000;
    // cube2.position.z = 0//3000;
    // console.log("cube2 xz ",cube2.position.x,cube2.position.z)
    // scene.add(cube2)
    // camera.position.z = 0//5;
    // camera.position.y = 100


    // const material3 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // const cube3 = new THREE.Mesh(geometry1, material3);
    // cube3.position.x = -500//3000;
    // cube3.position.z = -150//3000;
    // scene.add(cube3)
    let texture1= new THREE.TextureLoader().load("../assets/gallery/barren_ft.jpg")
    // const materialP = new THREE.MeshBasicMaterial(
    //   { color: 0xffffff, side: THREE.DoubleSide, map: texture1 });
    let material4;
    let materialArray4 = []
    materialArray4.push(new THREE.MeshBasicMaterial({ map: texturebk }))
    materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400}))//map: texturebk }))
    materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray4.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))

    let texture6= new THREE.TextureLoader().load("../assets/gallery/foto5.jpg")
    let materialArray6 = []
    materialArray6.push(new THREE.MeshBasicMaterial({ map: texture6 }))
    materialArray6.push(new THREE.MeshBasicMaterial({ color: 0x563400}))//map: texturebk }))
    materialArray6.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray6.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray6.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))
    materialArray6.push(new THREE.MeshBasicMaterial({ color: 0x563400 }))



    console.log("matarr4, ",materialArray4)



    // for (let i=1;i<6;i++){
    //   let geometry5 = new THREE.BoxGeometry(10, 100, 250)
    //   let material5
    //   if(i%2==0)
    //   {material5 = new THREE.MeshBasicMaterial({ color: 0x563400 });}
    //   else{material5 = materialArray4}
    //   const cube4 = new THREE.Mesh(geometry5, material5);
    //   cube4.position.x = Math.cos(10+i*10) * 500;
    //   cube4.position.z = Math.sin(10+i*10) * 500;
    //   cube4.rotation.y = Math.PI/2+500/i  //Math.sin(6*i+3.14);
      
    
    //   // Obrót sześcianu, aby ta sama ściana była na zewnątrz
    //   // cube.rotation.y = angle;




    //   // cube4.position.x = -500+i*10*3,14//3000;
    //   // cube4.position.z = 150*i//3000;


    //   scene.add(cube4)
    //   console.log("add cube nr xz ",cube4.position.x,cube4.position.z)
    // }
    
    let materialArray5=[]
    const numCubes = 8; // Liczba sześcianów
    const cubes = [];
    let textureFoto= new THREE.TextureLoader().load("../assets/gallery/foto1.JPG")
    let textureFoto2= new THREE.TextureLoader().load("../assets/gallery/foto2.JPG")
    for (let i = 0; i < numCubes; i++) {
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        let geometry5 = new THREE.BoxGeometry(10, 240, 350)
        let material5
        if (i==2)  //(i%2==0)
        {
         
          materialArray5[0]=new THREE.MeshBasicMaterial({ map: textureFoto2 })
          material5 = materialArray5}
        
        else{
          materialArray4[0]=new THREE.MeshBasicMaterial({ map: textureFoto })
          material5 = materialArray4
         
        }
        if (i==4)  //(i%2==0)
        {
         
          //materialArray5[0]=new THREE.MeshBasicMaterial({ map: textureFoto2 })
          material5 = materialArray6}
        // material5 = materialArray4
        const cube4 = new THREE.Mesh(geometry5, material5);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        
        // Ustawienie pozycji sześcianu na okręgu
        const angle = (i / numCubes) * Math.PI * 2;
        const radius = 500; // Promień okręgu
        cube4.position.x = Math.cos(angle) * radius;
        cube4.position.z = Math.sin(angle) * radius;
    
        // Obrót sześcianu, aby ta sama ściana była na zewnątrz
        cube4.rotation.y = -angle;
    
        scene.add(cube4);
        // cubes.push(cube);
    }


    





    


// const p=document.createElement('p')
// p.className="tooltip"
// p.textContent="dsfdsfdsfs"
// const pContainer=document.createElement("div")
// pContainer.appendChild(p)

// const cPointLabel=new CSS2DObject(pContainer)
// cPointLabel.position.set(200,3,0)

// scene.add(cPointLabel)

// const mousePos=new THREE.Vector2()
// const raycaster=new THREE.Raycaster()
// // window.addEventListener('')m 6.57

// const carP=document.createElement('p')

// const carLabel=new CSS2DObject(carP)
// carLabel.position.set(200,3,0)
// cube2.add(carLabel)










    // function createCpointMesh(name, x, y, z) {
    //   const geo = new THREE.BufferGeometry()
    //   const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    //   const mesh = new THREE.Mesh(geo, mat);
    //   mesh.position.set(x, y, z)
    //   mesh.name = name
    //   return mesh
    // }



    // const followText = document.getElementById('follow-text')
    // const canvas = document.querySelector('canvas')
    // const boxPosition = new THREE.Vector3();

    function animate() {
      requestAnimationFrame(animate);
      controls.update()
      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
     
      renderer.render(scene, camera);
    }

    //animate();





  }



}
