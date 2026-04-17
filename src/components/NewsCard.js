import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const NewsCard = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{article.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{article.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.author}>{article.author}</Text>
          <Text style={styles.date}>{article.publishedAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: { width: '100%', height: 180 },
  content: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 6 },
  description: { fontSize: 14, color: '#666', lineHeight: 20, marginBottom: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between' },
  author: { fontSize: 12, color: '#007AFF', fontWeight: '600' },
  date: { fontSize: 12, color: '#999' },
});

export default NewsCard;