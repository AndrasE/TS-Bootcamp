

@DatabaseService()
class DbService extends BaseDatabasService{

    @Perf()
    @Log(LogginLevel.DEBUG)
    saveData(data: any) {
        console.log(`saving data $data`);
    }
}


class Course {

    @DarabaseId()
    id: string;
    title: string;

    constructor(tittle: string) {
        this.title = tittle;
    }

    print(message: string) {
        console.log(`${message}, Course ${this.title}, id: ${this.id}`);
    }
}