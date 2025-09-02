import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/addons/loaders/STLLoader.js";

type ModelPreviewProps = {
  file: File | null;
};

export default function ModelPreview({ file }: ModelPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!file || !canvasRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x232321);

    const camera = new THREE.PerspectiveCamera(
      45,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight,
    );

    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    const directional = new THREE.DirectionalLight(0xffffff, 0.6);
    directional.position.set(1, 1, 2);
    scene.add(ambient, directional);

    const loader = new STLLoader();
    file.arrayBuffer().then((buffer) => {
      const geometry = loader.parse(buffer);
      const material = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.1,
        roughness: 0.8,
      });

      const mesh = new THREE.Mesh(geometry, material);

      geometry.computeBoundingBox();
      geometry.center();

      const size = new THREE.Vector3();
      geometry.boundingBox?.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      mesh.scale.setScalar(50 / maxDim);

      scene.add(mesh);
      renderer.render(scene, camera);
    });

    return () => {
      renderer.dispose();
    };
  }, [file]);

  return <canvas ref={canvasRef} className="w-[100px] rounded-2xl h-[100px]" />;
}
