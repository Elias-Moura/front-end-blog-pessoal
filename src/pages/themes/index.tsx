import { ProtectedLayout } from "../../components/protected-layout";
import { ResearchedThemesProvider } from "../../contexts/ResearchedThemes/ResearchedThemes";
import ConfigPageTheme from "../ConfigPageTheme/ConfigPageTheme";

export default function ThemesPage() {
  return (
    <ProtectedLayout>
      <ResearchedThemesProvider>
        <ConfigPageTheme/>
      </ResearchedThemesProvider>
    </ProtectedLayout>
  );
}
