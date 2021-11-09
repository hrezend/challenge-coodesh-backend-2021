import { Name } from "../entities/Name";

export default{

    render(name: Name){
        return {
            title: name.title,
            first: name.first,
            last: name.last,
        };
    }
    
}