// src/Placeholder.tsx
import { jsx } from "react/jsx-runtime";
function Placeholder({
  title = "",
  color1 = "#ff7e5f",
  color2 = "#feb47b"
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        color: "white",
        fontSize: "20px",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Inter",
        fontWeight: "500"
      },
      children: /* @__PURE__ */ jsx("p", { children: title })
    }
  );
}

export {
  Placeholder
};
