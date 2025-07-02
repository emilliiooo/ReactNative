import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Image
        source={{ uri: 'https://ca.slack-edge.com/T17R4TFAM-U092QE6TYRG-2f6070104c9f-512' }} 
        style={styles.avatar}
      />
      <Text style={styles.name}>Oscar</Text>
      <Text style={styles.subtitle}>L.I.L TXT SCLA '26</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Passions</Text>
        <Text style={styles.sectionText}>
          Pursuing a future involved with STEM in high education, Devoted to hopefully provide something in return to my community.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dream Career</Text>
        <Text style={styles.sectionText}>
          Civil or Mechanical Engineer, or a future in the tech industry.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chosen Role for SCLA</Text>
        <Text style={styles.sectionText}>
          Either a Project or a Product Manager.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { alignItems: 'center', padding: 20, backgroundColor: '#eef2f5' },
  avatar: {
    width: 120, height: 120, borderRadius: 60,
    marginBottom: 16, borderWidth: 2, borderColor: '#ccc'
  },
  name: { fontSize: 28, fontWeight: '700' },
  subtitle: { fontSize: 16, color: '#555', marginBottom: 24 },
  section: {
    width: '100%', backgroundColor: '#fff', padding: 16,
    borderRadius: 12, marginBottom: 16, elevation: 3
  },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 8 },
  sectionText: { fontSize: 16, lineHeight: 22, color: '#333' }
});