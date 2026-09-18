import { StyleSheet, View } from "react-native";

import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.track}>
      <View
        style={[
          styles.progress,
          {
            width: `${normalizedProgress}%`,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    height: 8,
    backgroundColor: colors.surfaceHigh,
    borderRadius: radius.pill,
    overflow: "hidden",
  },

  progress: {
    height: "100%",
    backgroundColor: colors.secondary,
    borderRadius: radius.pill,
  },
});
