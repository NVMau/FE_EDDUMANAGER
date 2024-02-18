import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { endpoints } from './configs/Apis';
const MyIcon = <Icon name="bell" size={24} color="blue" />;
const student_home = () => {

  const [courses, setCourses] = useState(null)

  useEffect(() =>{
    const loadCourse = async () => {
      let res = await fetch('http://127.0.0.1:8000/MonHoc/')
      console.log("NO"); // Thêm dòng này để log kết quả
      let data = await res.json();
      setCourses(data.results)
      console.log(data); // Thêm dòng này để log kết quả
    }
    loadCourse();

  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
        <View style={{display:"flex", flexDirection:'row', alignItems: 'center'}}>
          <View style={styles.avatarPlaceholder} />
          <View>
            <Text>Welcome back</Text>
            <Text style={styles.username}>Eban Jhon </Text>
          </View>
          
        </View>
        <Text>{MyIcon} </Text>

      </View>
      <Text style={styles.sectionTitle}>Your courses:</Text>
      <ScrollView style={styles.notifications}>
        {courses===null?<ActivityIndicator size='lage'/>:<>
        {courses.map(c => <View key={c.id}>
          <Image source={{uri: c.image}} style={styles.image} />
          <View>
            <Text style={styles.coursesName}>{c.name}</Text>
            <Text>{c.created_date}</Text>

          </View>

        </View>)}

</>}
          
      </ScrollView>
        

      <View style={styles.tabBar}>
        <Text>Hosme</Text>
        <Text>Chat</Text>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', // Set your background color
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ccc', // Set placeholder color
    margin: 20
  },
  username: {
    fontWeight: 'bold',
    fontSize: 20
  },
  editButton: {
    color: 'blue', // Set edit button color
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  notifications: {
    flex: 1,
  },
  notificationItem: {
    height: 60,
    backgroundColor: '#eee', // Set notification item color
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    paddingLeft: 10,
    // Add shadow or border to match your design
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Set border color
    paddingTop: 10,
  },

  subject:{
    textAlign:"center",
    fontSize: 25,
    fontWeight:'bold',

  }, 
  coursesName: {
    fontWeight: "bold",
    fontSize: 20, 
    color: 'blue'


  },
  image: {
    width: 120,
    height: 120, 


  }
});

export default student_home;
