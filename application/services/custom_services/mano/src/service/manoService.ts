import { Request, Response } from 'express';
import {manoDao} from '../dao/manoDao';
import { CustomLogger } from '../config/Logger'
let mano = new manoDao();

export class manoService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpSearch')
     const  manoData = req.query;
     mano.GpSearch(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpSearch')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpGetAllValues')
     
     mano.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpCreate')
     const  manoData = req.body;
     mano.GpCreate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpCreate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpUpdate')
     const  manoData = req.body;
     mano.GpUpdate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpDelete')
     const  manoId = req.params.id;
     mano.GpDelete(manoId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into manoService.ts: GpSearchForUpdate')
     const  manoData = req.body;
     mano.GpSearchForUpdate(manoData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from manoService.ts: GpSearchForUpdate')
         callback(response);
         });
    }


}