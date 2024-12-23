import {
  useRGBELoader
} from "./chunk-FMYDOIX6.mjs";
import {
  useThree
} from "./chunk-PBAUXUVF.mjs";
import {
  EquirectangularReflectionMapping
} from "./chunk-M5G6JQMQ.mjs";
import {
  envBasePath
} from "./chunk-SX7QUDKQ.mjs";

// src/ShaderGradient/Lights/Environment/EnvironmentMap.tsx
import React from "react";
var isRef = (obj) => obj.current && obj.current.isScene;
var resolveScene = (scene) => isRef(scene) ? scene.current : scene;
function EnvironmentMap({ background = false, envPreset }) {
  const city = useRGBELoader("city.hdr", { path: envBasePath });
  const dawn = useRGBELoader("dawn.hdr", { path: envBasePath });
  const lobby = useRGBELoader("lobby.hdr", { path: envBasePath });
  const textures = { city, dawn, lobby };
  const map = textures[envPreset];
  const defaultScene = useThree((state) => state.scene);
  React.useLayoutEffect(() => {
    if (map) {
      const target = resolveScene(defaultScene);
      const oldbg = target.background;
      const oldenv = target.environment;
      if (background !== "only") target.environment = map;
      if (background) target.background = map;
      return () => {
        if (background !== "only") target.environment = oldenv;
        if (background) target.background = "black";
      };
    }
  }, [defaultScene, map, background]);
  const texture = map;
  texture.mapping = EquirectangularReflectionMapping;
  return null;
}

export {
  EnvironmentMap
};
