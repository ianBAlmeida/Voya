import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { Milestone } from "@/types/milestone";
import { StyleSheet, Text, View } from "react-native";

interface MilestoneItemProp {
  milestone: Milestone;
}

export function MilestoneItem({ milestone }: MilestoneItemProp) {
  const isCompleted = milestone.status === "completed";

  return (
    <View style={styles.container}>
      <View style={[styles.status, isCompleted && styles.statusCompleted]}>
        {isCompleted && <Text style={styles.check}>✓</Text>}
      </View>

      <Text style={[styles.title, isCompleted && styles.titleCompleted]}>
        {milestone.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.sm,
  },

  status: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },

  statusCompleted: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },

  check: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.surface,
  },

  title: {
    ...typography.bodyMD,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },

  titleCompleted: {
    color: colors.text,
  },
});
