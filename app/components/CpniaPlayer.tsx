'use client'

import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react";
import { AnimationAction, AnimationMixer, LoopRepeat } from "three";
import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-black w-screen h-screen flex items-center justify-center">
        <p className="text-5xl font-mono text-white flex items-center whitespace-nowrap">
          {`${Math.floor(progress)}% loaded`}
        </p>
      </div>
    </Html>
  )
}

useGLTF.preload('/models/default.gltf');
useGLTF.preload('/models/animations/idle.glb');
useGLTF.preload('/models/animations/walk.glb');
useGLTF.preload('/models/animations/jump.glb');
useGLTF.preload('/models/animations/arm.glb');

export const useAnimGltf = () => [
  useGLTF('/models/animations/idle.glb'),
  useGLTF('/models/animations/walk.glb'),
  useGLTF('/models/animations/jump.glb'),
  useGLTF('/models/animations/arm.glb'),
];

function Player({
  actionKey,
}: {
  actionKey: number;
}) {
  const char = useGLTF('/models/default.gltf');
  const actionsRef = useRef<AnimationAction | null>(null);
  const mixer = useRef<AnimationMixer | null>(null);
  const animGltf = useAnimGltf();

  useEffect(() => {
    if (char.scene) mixer.current = new AnimationMixer(char.scene);
    return () => {
      mixer.current?.stopAllAction();
      mixer.current = null;
    }
  }, [char.scene]);

  useEffect(() => {
    if (mixer.current && animGltf[actionKey].animations.length) {
      const clip = animGltf[actionKey].animations[0];
      if (actionsRef.current) {
        actionsRef.current.fadeOut(0.2);
      }
      const action = mixer.current.clipAction(clip);
      action.reset().fadeIn(0.2).setLoop(LoopRepeat, Infinity).play();
      actionsRef.current = action;
    }
  }, [actionKey, animGltf]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  })

  return (
    <primitive object={char.scene} position={[0,-0.8,0]} scale={2.3}/>
  )
}

export function CpniaPlayer(){
  const [actionKey, setActionKey] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        애니메이션을 선택하세요:
        {['idle', 'walk', 'jump', 'arm'].map((key, i) =>
          <button
            key={i}
            onClick={() => setActionKey(i)}
            className={`px-2 border hover:opacity-50 ${actionKey === i && 'border-3'}`}
          >
            {key}
          </button>
        )}
      </div>
      <div className="w-full h-60">
        <Canvas camera={{ position: [0, 0.8, 2.5], fov: 50 }}>
          <Suspense fallback={<Loader />}>
            <Player actionKey={actionKey} />
            <directionalLight position={[10,5,0]} />
            <directionalLight position={[-10,5,10]} />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  )
}