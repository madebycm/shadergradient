import {
  useSearchParamToStore
} from "./chunk-WMOC3NWN.mjs";
import {
  useControlValues
} from "./chunk-WEBWI6E3.mjs";
import {
  ShaderGradient
} from "./chunk-BWWR5P6F.mjs";
import {
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientStateless/ShaderGradientStateless.tsx
import { jsx } from "react/jsx-runtime";
function ShaderGradientStateless(passedProps) {
  useSearchParamToStore();
  const props = useControlValues(passedProps.control, passedProps);
  return /* @__PURE__ */ jsx(ShaderGradient, __spreadValues({}, props));
}

export {
  ShaderGradientStateless
};
