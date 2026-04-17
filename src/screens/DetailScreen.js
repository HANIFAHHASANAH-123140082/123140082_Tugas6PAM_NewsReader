import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.meta}>
            <Text style={styles.author}>{article.author}</Text>
            <Text style={styles.date}>{article.publishedAt}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.body}>{article.description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 220 },
  content: { padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 10, lineHeight: 28 },
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  author: { fontSize: 13, color: '#007AFF', fontWeight: '600' },
  date: { fontSize: 13, color: '#999' },
  divider: { height: 1, backgroundColor: '#eee', marginBottom: 14 },
  body: { fontSize: 16, color: '#333', lineHeight: 26 },
});

export default DetailScreen;