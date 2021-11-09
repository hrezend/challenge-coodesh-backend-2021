import { ImportedId } from "../entities/ImportedId";

export default{

    render(importedId: ImportedId){
        return {
            name: importedId.name,
            value: importedId.value,
        };
    }
    
}