import * as THREE from "three";
import * as dat from "dat.gui";
import * as Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import "./style.css";

console.log("THREE", THREE);

function init() {
  const canvas = document.querySelector(".webgl");

  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const metirial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

  const mesh = new THREE.Mesh(geometry, metirial);

  scene.add(mesh);

  const sizes = {
    width: 800,
    height: 600,
  };
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 3;
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer({
    canvas,
  });

  renderer.setSize(sizes.width, sizes.height);

  renderer.render(scene, camera);
}

window.onload = init;
