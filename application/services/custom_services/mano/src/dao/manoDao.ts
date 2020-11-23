import * as mongoose from 'mongoose';
import manoModel from '../models/mano';
import { CustomLogger } from '../config/Logger'


export class manoDao {
    private mano = manoModel;
    constructor() { }
public GpSearch(manoData, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(manoData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.mano.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpGetAllValues')

this.mano.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(manoData, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpCreate')
let temp = new manoModel(manoData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(manoData, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpUpdate')

this.mano.findOneAndUpdate({ _id: manoData._id }, manoData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(manoId, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpDelete')

this.mano.findByIdAndRemove(manoId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(manoData, callback){
new CustomLogger().showLogger('info', 'Enter into manoDao.ts: GpSearchForUpdate')

this.mano.findOneAndUpdate({ _id: manoData._id }, manoData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from manoDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}