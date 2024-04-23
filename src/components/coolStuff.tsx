import * as THREE from "three";
import { useEffect, useRef } from "react";

function MyThree() {
    const refContainer = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        refContainer.current.appendChild(renderer.domElement);

        const geometry = new THREE.CircleGeometry(5, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const circle = new THREE.Mesh(geometry, material);
        scene.add(circle);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            window.removeEventListener('resize');
        }
    }, []);

    return <div ref={refContainer}></div>;
}

export default MyThree;
