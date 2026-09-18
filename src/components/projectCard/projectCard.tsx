import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { Project } from "@/types/project";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "../card/card";
import { ProgressBar } from "../progressBar/progressBar";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <Text style={styles.name}>{project.name}</Text>

      <Text style={styles.description}>{project.description}</Text>

      <View style={styles.progressContainer}>
        <ProgressBar progress={project.progress} />
      </View>

      <View style={styles.progressRow}>
        <Text style={styles.progressLabel}>Progresso</Text>

        <Text style={styles.progressValue}>{project.progress}%</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  name: {
    ...typography.headlineSM,
    color: colors.primary,
  },

  description: {
    ...typography.bodyMD,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  progressContainer: {
    marginTop: spacing.md,
  },

  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xs,
    gap: spacing.xs,
  },

  progressLabel: {
    ...typography.bodySM,
    color: colors.textSecondary,
  },

  progressValue: {
    ...typography.labelMD,
    color: colors.primary,
  },
});
