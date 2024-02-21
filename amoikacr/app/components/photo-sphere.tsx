"use client";

import React, { useState } from "react";
import {
  CubemapAdapter,
  GyroscopePlugin,
  ReactPhotoSphereViewer,
} from "react-photo-sphere-viewer";
import Photos from "./photos.json";

export const PhotoSphere = () => {
  const [photos] = useState(() => {
    let horizonSrc = [...Photos.horizon];
    const horizonRes: string[] = [];
    for (let i = 0; i < 4; i++) {
      const rand = Math.floor(Math.random() * horizonSrc.length);
      horizonRes.push(horizonSrc.splice(rand, 1)[0]);
    }
    return {
      left: horizonRes[0],
      front: horizonRes[1],
      right: horizonRes[2],
      back: horizonRes[3],
      top: Photos.sky[Math.floor(Math.random() * Photos.sky.length)],
      bottom: Photos.floor[Math.floor(Math.random() * Photos.floor.length)],
    };
  });

  return (
    <ReactPhotoSphereViewer
      src={photos as unknown as string}
      height="100%"
      width="100%"
      adapter={CubemapAdapter}
      defaultZoomLvl={0}
      plugins={[GyroscopePlugin]}
      navbar={["zoom", "gyroscope"]}
    />
  );
};
