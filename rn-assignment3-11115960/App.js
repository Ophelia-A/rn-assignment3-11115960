import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, ScrollView, Image, TextInput } from "react-native";

export default function App() {
  const categories = [
    { key: "Exercise" },
    { key: "Study" },
    { key: "Cook" },
    { key: "Code" },
    { key: "Gardening" },
    { key: "Petting" },
    { key: "Family Time" },
    { key: "Selfcare " },
  ];

  const categoriess = [
    { key: "Category 1" },
    { key: "Category 2" },
    { key: "Category 3" },
    { key: "Category 4" },
    { key: "Category 5" },
    { key: "Category 6" },
    { key: "Category 7" },
    { key: "Category 8" },
    { key: "Category 9" },
    { key: "Category 10" },
    { key: "Category 11" },
    { key: "Category 12" },
    { key: "Category 13" },
    { key: "Category 14" },
    { key: "Category 15" },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.container1}>
          <Text style={styles.mainText}>Hello , Devs</Text>
          <Text style={styles.miniText}>14 Tasks today</Text>
          <View style={styles.circle}>
           
          </View>
        </View>
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "white",
              padding: 5,
              width: "70%",
              height: "100%",
              borderRadius: 10,
            }}
          >
            
            <TextInput
              placeholder="Search"
              style={{ flex: 1, height: "80%", fontWeight: "bold" }}
            />
          </View>
          <View style={styles.filterBox}>
            
          </View>
        </View>
        <Text style={styles.categoriesText}>Categories</Text>
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.categoriesBox}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "normal",
                  textAlign: "left",
                  marginBottom: 5,
                  marginLeft: 20,
                }}
              >
                {item.key}
              </Text>
              <Text style={styles.tinyText}>12 Tasks</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: "white",
                  padding: 5,
                  width: "80%",
                  height: "60%",
                  borderRadius: 10,
                  marginLeft: 20,
                }}
              >
                
              </View>
            </View>
          )}
        />
        <Text style={styles.onText}>Ongoing Task</Text>
        <FlatList
          data={categoriess}
          vertical={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.fltwo}>
              <Text style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "left",
                  marginBottom: 50,
                  marginLeft: 20,}}>{item.key}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F0E8",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flexDirection: "row",
    width: "92%",
    paddingHorizontal: 2,
    marginTop: 100,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 20,
  },
  miniText: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 40,
    marginLeft: -300,
  },
  circle: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 40,
    marginLeft: 100,
  },
  container2: {
    flexDirection: "row",
    width: "92%",
    paddingHorizontal: 2,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangle1: {
    backgroundColor: "white",
    width: 280,
    height: 70,
    borderRadius: 20,
    marginLeft: "",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  filterBox: {
    backgroundColor: "#DC4D01",
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -200,
  },
  categoriesBox: {
    backgroundColor: "white",
    width: 220,
    height: 250,
    marginBottom: "",
    justifyContent: "center",
    alignItems: "left",
    marginLeft: 20,
    borderRadius: 20,
  },
  onText: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: "",
    marginLeft: -170,
  },
  fltwo: {
    backgroundColor: "white",
    width: 350,
    height: 180,
    justifyContent: "center",
    alignItems: "left",
    marginTop: 20,
    borderRadius: 20,
  },
 
  textttt: {
    fontSize: 25,
    fontColor: "black",
    marginRight: 150,
  },
 
  
  tinyText: {
    fontSize: 14,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 2,
    marginLeft: 20,
  },
});