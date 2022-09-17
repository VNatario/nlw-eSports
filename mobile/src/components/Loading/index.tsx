import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";
import { style } from "./styles";

export function Loading() {
  return (
    <View style={style.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
