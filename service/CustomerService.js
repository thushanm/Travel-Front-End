import {RestApiRepo} from "../model/RestApiRepo.js";
import {MultipartRepo} from "../model/MultipartRepo.js";

export class CustomerService{
    constructor() {
        this.customerRepo=new RestApiRepo();
        this.customerMultipartRepo = new MultipartRepo();
        this.path="/customer";
    }
    saveCustomer(customer){
        return this.customerRepo.save(this.path,customer);
    }

    updateCustomer(customer){
        return this.customerRepo.update(this.path,customer);

    }
    searchByEmail(email){
        return this.customerRepo.search(this.path+"/search/email?email="+email);
    }
    searchBasicAuth(email,pwd){
        return this.customerRepo.searchBasicAuth(this.path+"/search/email?email="+email,email,pwd);
    }
    deleteCustomer(customerID){
        return this.customerRepo.delete(this.path+"/"+customerID);
    }

    loadAllCustomer(){
        return this.customerRepo.getAll(this.path);
    }
}