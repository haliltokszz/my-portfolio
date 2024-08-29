"use client";

import React, { useRef, useEffect, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { AnimationMixer, Group, LoopOnce } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export default function AvatarModel() {
  const group = useRef<Group>(null);
  const [mixer, setMixer] = useState<AnimationMixer | null>(null);
  const fbx = useLoader(FBXLoader, "/ht-avatar-with-animations-1.fbx");

  useEffect(() => {
    if (fbx) {
      const newMixer = new AnimationMixer(fbx);
      setMixer(newMixer);

      fbx.animations.forEach((clip) => {
        const action = newMixer.clipAction(clip);
        action.setLoop(LoopOnce, 1);
        action.clampWhenFinished = true;
        action.play();
      });

      return () => {
        newMixer.stopAllAction();
      };
    }
  }, [fbx]);

  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <group ref={group}>
      <primitive object={fbx} scale={2.5} position={[0, -2.2, 1.1]} />
    </group>
  );
}
