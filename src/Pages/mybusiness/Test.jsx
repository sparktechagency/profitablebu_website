import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric"; // ✅ সঠিক ইম্পোর্ট
import { SketchPicker } from "react-color";

const Test = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [color, setColor] = useState("#FF0000");

  useEffect(() => {
    const c = new fabric.Canvas("tshirt-canvas", {
      height: 600,
      width: 500,
    });

    fabric.Image.fromURL("/tshirt-white.png", (img) => {
      img.selectable = false;
      c.setBackgroundImage(img, c.renderAll.bind(c), {
        scaleX: c.width / img.width,
        scaleY: c.height / img.height,
      });
    });

    setCanvas(c);
    canvasRef.current = c;

    return () => {
      c.dispose();
    };
  }, []);

  // Add Text
  const addText = () => {
    const text = new fabric.Textbox("Your Text", {
      left: 100,
      top: 200,
      fill: color,
      fontSize: 30,
    });
    canvas.add(text);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (f) {
      fabric.Image.fromURL(f.target.result, (img) => {
        img.scaleToWidth(200);
        canvas.add(img);
      });
    };
    reader.readAsDataURL(file);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
    const activeObject = canvas.getActiveObject();
    if (activeObject && activeObject.set) {
      activeObject.set("fill", newColor.hex);
      canvas.renderAll();
    }
  };

  const downloadImage = () => {
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "tshirt-design.png";
    link.click();
  };

  return (
    <div className="mt-20">
      <div style={{ display: "flex", gap: "20px" }}>

        <div>
          <button onClick={addText}>Add Text</button>
          <br />
          <br />
          <input type="file" onChange={handleImageUpload} />
          <br />
          <br />
          <SketchPicker color={color} onChange={handleColorChange} />
          <br />
          <br />
          <button onClick={downloadImage}>Download Design</button>
        </div>

        <div>
          <canvas
            id="tshirt-canvas"
            style={{ border: "1px solid #ccc" }}
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default Test;
