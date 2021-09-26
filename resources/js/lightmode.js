import React, { useContext } from "react";
import { Button, WindmillContext } from "@windmill/react-ui";
function SomeComponent() {
  const { mode, toggleMode } = useContext(WindmillContext);
  return (
    <div>
      <Button onClick={toggleMode}>Toggle theme</Button>
      <p>Current theme is: {mode}</p>
    </div>
  );
}
export default SomeComponent;
