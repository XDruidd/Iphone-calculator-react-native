import Calculator from "@/components/Calculator";
import Box from "@mui/material/Box";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: "#000000", height: "100%"}}>
      <Calculator />
    </View>
  );
}