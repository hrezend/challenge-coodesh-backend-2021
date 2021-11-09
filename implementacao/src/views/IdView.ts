import { Id } from "../entities/Id";

export default{

    render(id: Id){
        return {
            name: id.name,
            value: id.value,
        };
    }
    
}