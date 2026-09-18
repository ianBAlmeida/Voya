import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SectionHeader } from "@/components/sectionReader/sectionReader";
import { ProjectCard } from "../components/projectCard/projectCard";

import { projects } from "../data/projects";

import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { typography } from "../theme/typography";

export default function HomeScreen() {
  const priorityProject = projects.find((project) => project.isPriority);

  const otherProjects = projects.filter((project) => !project.isPriority);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Text style={styles.greeting}>Olá, Ian</Text>

        <Text style={styles.subtitle}>Planeje sua próxima aventura.</Text>
      </View>

      <View style={styles.section}>
        <SectionHeader title="Projeto prioritário" rightText="Ver todos" />

        {priorityProject && <ProjectCard project={priorityProject} />}
      </View>

      <View style={styles.section}>
        <SectionHeader title="Outros projetos" />

        {otherProjects.map((project) => (
          <View key={project.id} style={styles.projectItem}>
            <ProjectCard project={project} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: spacing.screen,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },

  greeting: {
    ...typography.headlineXL,
    color: colors.primary,
  },

  subtitle: {
    ...typography.bodyLG,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  section: {
    marginTop: spacing.xl,
  },

  projectItem: {
    marginTop: spacing.md,
  },
});
