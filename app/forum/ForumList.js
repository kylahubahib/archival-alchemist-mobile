import { Link } from "expo-router";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Avatar, IconButton, Menu, Provider, Title } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

export default function ForumList({ posts }) {
  const [visibleMenuId, setVisibleMenuId] = useState(null);

  const openMenu = (id) => setVisibleMenuId(id);
  const closeMenu = () => setVisibleMenuId(null);

  // Render each post item
  const renderPost = ({ item }) => (
    <TouchableOpacity style={styles.postContainer}>
      <View  style={{flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Avatar.Text size={35} label="XD" />
          <Title style={{ marginHorizontal: 10 }}>John Doe</Title>
        </View>
        <Menu
          visible={visibleMenuId === item.id}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon={() => <Entypo name="dots-three-vertical" size={20} color="black" />}
              onPress={() => openMenu(item.id)}
            />
          }
        >
          <Menu.Item onPress={() => console.log("Pressed")} title="Remove" />
          <Menu.Item onPress={() => console.log("Reported")} title="Report" />
        </Menu>
      </View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent} numberOfLines={2} ellipsizeMode="tail">{item.content}</Text>
      <Link href={`forum/view_post?id=${item.id}`} style={styles.viewLink}>
        View Post
      </Link>
    </TouchableOpacity>
  );

  return (
      <View style={{ flex: 1 }}>
        {/* List of Posts */}
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.postList}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  postList: {
    marginVertical: 15,
  },
  postContainer: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 15,
    height: 200
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10
  },
  postContent: {
    marginRight: 30 ,
    marginBottom: 20,
  },
  viewLink: {
    fontSize: 16,
    color: "#007BFF",
  },
});
