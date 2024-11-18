import React, { useEffect, useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, Image, Dimensions } from 'react-native';
import { Searchbar, IconButton, Button, Card, Title, Paragraph, Icon } from 'react-native-paper';
import { FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';

export default function MyManuscriptScreen() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [favBooks, setFavBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  //Sample data
  const books = [ 
    
  ];

  useEffect(() => {
    setFavBooks(books); 
    //Add api logic here or something
  }, []);

  const toggleFilterModal = () => {
    setFilterVisible(!filterVisible);
  };

  const { width } = Dimensions.get('window');
  const numColumns = 2;
  const cardWidth = width / numColumns - 20;

  const renderItem = ({ item }) => (
    <Card style={{ width: cardWidth, margin: 10, backgroundColor: 'white' }}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.author}</Paragraph>
      </Card.Content>
    </Card>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <FontAwesome5 name="book" size={50} color="gray" /> 
      <Text style={styles.emptyStateText}>No published manuscript yet.</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
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
          icon={() => <FontAwesome name="filter" size={38} color="#294996" />}
          onPress={toggleFilterModal}
        />
      </View>

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

            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterOption}>
              <Text>Option 3</Text>
            </TouchableOpacity>

            <Button mode="contained" onPress={toggleFilterModal}>
              Apply Filters
            </Button>
          </View>
        </View>
      </Modal>

      <FlatList
        data={favBooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        ListEmptyComponent={renderEmptyState} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#e9f1ff',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  emptyStateContainer: {
    marginTop: 50,
    flex: 1,                
    justifyContent: 'center', 
    alignItems: "center",   
  },
  emptyStateText: {
    fontSize: 16,
    color: 'gray',
    padding: 5,
    paddingHorizontal: 50,
    textAlign: 'center', 
  },
});
