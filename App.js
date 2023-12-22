import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalInput from "./components/goalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisiblity, setModalVisibilty] = useState(false);

  const addGoal = (text) => {
    setCourseGoals((prev) => [
      ...prev,
      { text, id: Math.random().toString() + text },
    ]);
    setModalVisibilty(false);
  };

  const deleteHandler = (id) => {
    setCourseGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const cancelHandler = () => {
    setModalVisibilty(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="add new Goal"
          color={"#5d185a"}
          onPress={() => setModalVisibilty(true)}
        />
        <GoalInput
          visible={modalVisiblity}
          onAddition={addGoal}
          onCancelation={cancelHandler}
        />
        <View style={styles.goalList}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goal={itemData.item.text}
                  onDeleteItem={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  goalList: {
    flex: 5,
  },
});
