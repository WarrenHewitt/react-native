/**
 * Page template for this project.
 * Replace %%SCREEN_NAME%% and %%TITLE%% before use.
 *
 * Two variants:
 *   - Flat (default): simple ThemedView wrapper — good for settings, modals, routes
 *   - Parallax (commented out below): hero header with ParallaxScrollView — good for main tabs
 */
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

// ─── Flat variant ────────────────────────────────────────────────────────────
export default function %%SCREEN_NAME%%() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">%%TITLE%%</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

// ─── Parallax variant (tab screens with hero header) ─────────────────────────
// import { Image } from 'expo-image';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { IconSymbol } from '@/components/ui/icon-symbol';
//
// export default function %%SCREEN_NAME%%() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <IconSymbol size={310} color="#808080" name="chevron.left.forwardslash.chevron.right" style={styles.headerImage} />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">%%TITLE%%</ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }
//
// const styles = StyleSheet.create({
//   headerImage: { bottom: -90, left: -35, position: 'absolute' },
//   titleContainer: { flexDirection: 'row', gap: 8 },
// });
