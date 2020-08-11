import mongoose, { Connection } from "mongoose";

const createDBConnection = (): Connection => {
  mongoose.connect(
    process.env.MONGO_URL || "",
    // "mongodb://localhost:30001,localhost:30002,localhost:30003/admin?replicaSet=replSet",
    // "mongodb://localhost:27017/admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  return mongoose.connection;
};

export default createDBConnection;
