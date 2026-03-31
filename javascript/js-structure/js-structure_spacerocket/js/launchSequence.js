import { fuel } from "./core/fuel";

// Implement the launch sequence function here and export it as the default export.
export default function launch(){
    loadPayload(NFSAT,FISHSAT);
    fuel();
    

}