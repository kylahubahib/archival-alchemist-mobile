import React, { useEffect, useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Image, Dimensions} from 'react-native';
import { Searchbar, IconButton, Button, Card, Title, Paragraph } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export default function LibraryScreen() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  // Toggle the modal visibility
  const toggleFilterModal = () => {
    setFilterVisible(!filterVisible);
  };

  const books = [
    { id: '1', title: 'Book One', author: 'Author A', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Book Two', author: 'Author B', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Book Three', author: 'Author C', image: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Book Four', author: 'Author D', image: 'https://via.placeholder.com/150' },
    { id: '5', title: 'Book Five', author: 'Author D', image: 'https://via.placeholder.com/150' },
    { id: '6', title: 'Book Six', author: 'Author D', image: 'https://via.placeholder.com/150' },
    { id: '7', title: 'Book Seven', author: 'Author D', image: 'https://via.placeholder.com/150' },
  ];
  
  const { width } = Dimensions.get('window');
  const numColumns = 2; 
  const cardWidth = width / numColumns - 20;

    const renderItem = ({ item }) => (
      <Card style={{ width: cardWidth, margin: 10, backgroundColor: "white" }}>
        <Card.Cover source={{ uri: item.image }} />
        <Card.Content>
          <Title>{item.title}</Title>
          <Paragraph>{item.author}</Paragraph>
        </Card.Content>
      </Card>
    );

  return (
    <SafeAreaView style={{flex:1, backgroundColor: "#e9f1ff"}}>
    <View style={styles.container}>
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
      
      {/* Filter Icon */}
      <IconButton
        icon={() => <FontAwesome name="filter" size={24} color="#294996" />}
        onPress={toggleFilterModal}
      />

      {/* Filter Modal */}
      <Modal
        visible={filterVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleFilterModal} 
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Filter Options</Text>
            
            {/* Example Filter Options */}
            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 3</Text>
            </TouchableOpacity>
            
            {/* Close Button */}
            <Button mode="contained" onPress={toggleFilterModal}>
              Apply Filters
            </Button>
          </View>
        </View>
      </Modal>
    </View>

    <View style={{flex:1}}>
    <FlatList
      data={books}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={numColumns}
    />

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  filterOption: {
    padding: 10,
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: 'white',
    shadowOpacity: 0,
    height: 43,
    flex: 1,
  },
  searchInput: {
    minHeight: 0,
    fontSize: 14,
    color: '#333',
  },
});
