import http from "../../app/services";
import { IPhoneBook } from "./PhoneBookModels"

class PhoneBookDataService {
    getAll() {
        return http.get<Array<IPhoneBook>>("/phone-books");
    }
    get(id: string) {
        return http.get<IPhoneBook>(`/phone-books/${id}`);
    }
    create(data: IPhoneBook) {
        return http.post<IPhoneBook>("/phone-books", data);
    }
    update(data: IPhoneBook, id: any) {
        return http.put<any>(`/phone-books/${id}`, data);
    }
    delete(id: any) {
        return http.delete<any>(`/phone-books/${id}`);
    }
}
export default new PhoneBookDataService();