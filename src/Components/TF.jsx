import { DummyData } from "../TensorflowJS/tensorflowmethods";

const [input, label] = DummyData();

export function createMLModel({
    //parameters
    units = 1,
    learningRate = 0.01,
    optimizer = "adam",
  }) {
    const selectOptimizer = (optimizer) => {
      return OPTIMIZERS[optimizer].fn(learningRate);
    };
    //create the model object
    const model = tf.sequential();
    model.add(tf.layers.dense({ units, inputShape: [1] }));
    model.compile({
        //optimiser - searches the most accurate form possible for the model
      optimizer: selectOptimizer(optimizer),
      //loss function
      loss: "meanSquaredError",
    });
    return model;
  }

// The actual tensorflow component
function TensorflowApp() {
    return (
      <div>
        <h1>Tensorflowjs in React</h1>
      </div>
    );
  }