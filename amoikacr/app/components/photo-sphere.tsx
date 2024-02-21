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
    return {
      left: Photos.horizon[Math.floor(Math.random() * Photos.horizon.length)],
      front: Photos.horizon[Math.floor(Math.random() * Photos.horizon.length)],
      right: Photos.horizon[Math.floor(Math.random() * Photos.horizon.length)],
      back: Photos.horizon[Math.floor(Math.random() * Photos.horizon.length)],
      top: Photos.sky[Math.floor(Math.random() * Photos.sky.length)],
      bottom: Photos.floor[Math.floor(Math.random() * Photos.floor.length)],
    };
  });

  return (
    <ReactPhotoSphereViewer
      src={photos as unknown as string}
      height="100vh"
      width="100vw"
      adapter={CubemapAdapter}
      defaultZoomLvl={0}
      plugins={[GyroscopePlugin]}
      navbar={["zoom", "gyroscope"]}
    />
  );
};
