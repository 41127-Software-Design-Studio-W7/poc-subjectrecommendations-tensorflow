export function DummyData() {
    // 14/9/2022: currently Subject data non existent. Using bespoke dummy data to get the POC model running in the react app
    // 
    const input = tf.tensor([0, 2, 4, 7, 10, 20, 50, 100], [7, 1]);
    const label = tf.tensor([5, 9, 13, 19, 25, 45, 105, 210], [7, 1]);
    return [input, label];
  }