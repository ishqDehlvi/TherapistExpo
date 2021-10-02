import * as React from "react";
import { Button, ThemeProvider } from "react-native-elements";
const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};
export default MyApp;
