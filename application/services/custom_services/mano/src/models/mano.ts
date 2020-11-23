
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const manoSchema = new Schema({
   name: String,
   email: String
})

const manoModel = mongoose.model('mano', manoSchema, 'mano');
export default manoModel;
