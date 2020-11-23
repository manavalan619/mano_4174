import { Request, Response } from 'express';
import { manoService } from '../service/manoService';
import { CustomLogger } from '../config/Logger'
let mano = new manoService();

export class manoController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
mano.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpSearch');
    })}
public GpGetAllValues(req: Request, res: Response) {
mano.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
mano.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
mano.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
mano.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpDelete');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
mano.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into manoController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from manoController.ts: GpSearchForUpdate');
    })}


}