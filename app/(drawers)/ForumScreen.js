import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Provider, Searchbar } from "react-native-paper";
import ForumList from "../forum/ForumList";

export default function ForumScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const [posts] = useState([
    { id: '1', title: 'How to start with React Native?', content: 'I am new to React Native, can someon dddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde guide me?' },
    { id: '2', title: 'Best practices for state management', content: 'What are the best practices for managing state?' },
    { id: '3', title: 'Expo vs React Native CLI', content: 'Which one should I use for my next project?' },
  ]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Provider>
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <Searchbar
        placeholder="Search posts..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        elevation={1}
        style={styles.searchBar}
        inputStyle={styles.searchInput}
        iconColor="#294996" 
        placeholderTextColor="#888" 
      />

      {/* Add Post and View My Post */}
      <View style={styles.header}>
        <Link href="forum/create_post" style={styles.startDiscussionButton}>
          <FontAwesome6 name="pen-to-square" size={16} color="white" />
          <Text style={styles.buttonText}> Start a discussion</Text>
        </Link>

        <Link href="forum/my_posts" style={styles.myPostsButton}>
          <FontAwesome6 name="file-signature" size={16} color="white" />
          <Text style={styles.buttonText}> My Posts</Text>
        </Link>
      </View>

      <ForumList posts={filteredPosts} />
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f1ff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  startDiscussionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#33b249',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  myPostsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  searchBar: {
    margin: 15,
    backgroundColor: 'white',
    shadowOpacity: 0,
    height: 43,
  },
  searchInput: {
    minHeight: 0,
    fontSize: 14,
    color: '#333',
  },
});
