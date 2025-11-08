const { useState } = React;

export const ColorPicker = () => {

  const initialValue = "#ffffff"

  const [isColor, setIsColor] = useState("#ffffff");

  const defaultStyles = {
    backgroundColor: isColor
  }

  const handleInputChange = (e) => {
    setIsColor(e.target.value
   );
  } 

  return (
    <div id="color-picker-container" style={defaultStyles} >
      <input id="color-input" type="color" onChange={handleInputChange} value={isColor}/>
    </div>
  );
};