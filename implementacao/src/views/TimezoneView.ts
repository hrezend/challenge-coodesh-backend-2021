import { Timezone } from "../entities/Timezone";

export default{

    render(timezone: Timezone){
        return {
            offset: timezone.offset,
            description: timezone.description,
        };
    }
    
}