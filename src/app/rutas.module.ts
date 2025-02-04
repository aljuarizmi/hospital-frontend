import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { globalRoutes } from "./modules/global/global.routing";
import { medicoRoutes } from "./modules/medico/medico.routing";

@NgModule({
    imports:[RouterModule.forChild([
        ...globalRoutes,
        ...medicoRoutes
    ])],
    exports:[RouterModule]
})
export class RutasModule{}