import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 32,
  },
  input: {
    height: 50,
    margin: 12,
    marginLeft:40,
    borderWidth: 1,
    padding: 10,
    width: 300,
    fontSize:20
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
  },

  checkboxContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginLeft: 40,
    alignSelf: "center",
    margin: 8,
  },
  label: {
    margin: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#EB1010",
    padding: 15,
    borderRadius:20,
    margin: 50,
    
  },
});
