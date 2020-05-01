import * as mongoose from 'mongoose';

const {
    DB_USER,
    DB_PASSWORD,
    DB_CLUSTER,
    DB_NAME
} = process.env;

const mongooseConnection = (env: any) => {
    if (env === 'test') {
        mongoose
            .connect('mongodb://localhost/bibliofile-test', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            .then(() => console.log("connected to the test database"))
            .catch((error: Error) => console.log(error));
    } else if (env === 'production') {
        mongoose
            .connect('mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            .then(() => console.log('connected to Bibliofile database in production'))
            .catch((error: Error) => console.log(error));
    } else {
        mongoose
            .connect('mongodb://localhost/bibliofile', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            .then(() => console.log('connected to development database'))
            .catch((error: Error) => (console.log(error)))
    };
    // This listens and logs any errors after the initial connection
    mongoose.connection.on('error', (error: Error) => console.log(error))
};

export default mongooseConnection;