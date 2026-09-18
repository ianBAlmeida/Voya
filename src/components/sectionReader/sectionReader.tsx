import { StyleSheet, Text, View } from "react-native";

import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";

interface SectionHeaderProps {
  title: string;
  rightText?: string;
}

export function SectionHeader({ title, rightText }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },

  title: {
    ...typography.headlineMD,
    color: colors.primary,
  },

  rightText: {
    ...typography.bodySM,
    color: colors.textSecondary,
  },
});
