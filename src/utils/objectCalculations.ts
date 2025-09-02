import { STLLoader } from "three/addons/loaders/STLLoader.js";
import * as THREE from "three";

export async function calculateObjectVolume(file: File) {
  const loader = new STLLoader();
  const arrayBuffer = await file.arrayBuffer();
  const geometry = loader.parse(arrayBuffer);

  let volume = 0;
  const position = geometry.attributes.position;

  for (let i = 0; i < position.count; i += 3) {
    const v1 = new THREE.Vector3().fromBufferAttribute(position, i);
    const v2 = new THREE.Vector3().fromBufferAttribute(position, i + 1);
    const v3 = new THREE.Vector3().fromBufferAttribute(position, i + 2);

    volume += v1.dot(v2.cross(v3)) / 6.0;
  }

  return Math.abs(volume);
}

export async function calculateObjectSize(file: File) {
  const loader = new STLLoader();
  const arrayBuffer = await file.arrayBuffer();
  const geometry = loader.parse(arrayBuffer);

  geometry.computeBoundingBox();
  const size = new THREE.Vector3();
  geometry.boundingBox?.getSize(size);

  return size;
}
