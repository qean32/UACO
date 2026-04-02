import { PASSWORD_HASH_LENGTH } from "@/config"
import { hashSync } from "bcrypt"

export const students = [
    {
        "email": "zxc123@zxc.com",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Андрей",
        "lastName": "Галонов",
        "sureName": "Аркадьевич",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "MALE"
    },
    {
        "email": "qwe789@abc.net",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Елена",
        "lastName": "Васильева",
        "sureName": "Игоревна",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "FEMALE"
    },
    {
        "email": "thjyyt7676asd@def.org",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Дмитрий",
        "lastName": "Сергеев",
        "sureName": "Александрович",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "MALE"
    },
    {
        "email": "fgh789@ghi.biz",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Анна",
        "lastName": "Петрова",
        "sureName": "Павловна",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "FEMALE"
    },
    {
        "email": "qwe1231@jkl.info",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Иван",
        "lastName": "Иванов",
        "sureName": "Семёнович",
        "role": "STUDENT",
        "GroupCode": "23ам-4",
        "sex": "MALE"
    },
    {
        "email": "werwer32423@mno.ru",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Светлана",
        "lastName": "Смирнова",
        "sureName": "Владимировна",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "FEMALE"
    },
    {
        "email": "qweqweewqweqwe21312@pqr.co.uk",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Алексей",
        "lastName": "Николаев",
        "sureName": "Геннадьевич",
        "role": "STUDENT",
        "GroupCode": "23ам-4",
        "sex": "MALE"
    },
    {
        "email": "qweqwgfdgeqwe23@stu.pl",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Ольга",
        "lastName": "Попова",
        "sureName": "Дмитриевна",
        "role": "STUDENT",
        "GroupCode": "23ам-4",
        "sex": "FEMALE"
    },
    {
        "email": "weqwqweeq@vwx.ca",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Михаил",
        "lastName": "Кузнецов",
        "sureName": "Борисович",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "MALE"
    },
    {
        "email": "qweqweqqwe@yzb.au",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Наталья",
        "lastName": "Волкова",
        "sureName": "Викторовна",
        "role": "STUDENT",
        "GroupCode": "23ам-4",
        "sex": "FEMALE"
    },
    {
        "email": "abc12eqqwe3@abc.de",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Сергей",
        "lastName": "Федоров",
        "sureName": "Юрьевич",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "MALE"
    },
    {
        "email": "def456@def.jp",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Марина",
        "lastName": "Орлова",
        "sureName": "Константинова",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "FEMALE"
    },
    {
        "email": "asd13221sd@ghi.us",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Артём",
        "lastName": "Громов",
        "sureName": "Станиславович",
        "role": "STUDENT",
        "GroupCode": "23ам-4",
        "sex": "MALE"
    },
    {
        "email": "rgefg2434@jkl.cn",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Анастасия",
        "lastName": "Антонова",
        "sureName": "Леонидовна",
        "role": "STUDENT",
        "GroupCode": "23тэп-2",
        "sex": "FEMALE"
    },
    {
        "email": "sfgwrt234@mno.fr",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Максим",
        "lastName": "Андреев",
        "sureName": "Олегович",
        "role": "STUDENT",
        "GroupCode": "23тэп-2",
        "sex": "MALE"
    },
    {
        "email": "qweqweqweqwe21312@pqr.it",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Дарья",
        "lastName": "Романова",
        "sureName": "Павловна",
        "role": "STUDENT",
        "GroupCode": "23тэп-2",
        "sex": "FEMALE"
    },
    {
        "email": "qweqweqwe23@stu.nl",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Кирилл",
        "lastName": "Зайцев",
        "sureName": "Ильич",
        "role": "STUDENT",
        "GroupCode": "23тэп-2",
        "sex": "MALE"
    },
    {
        "email": "vwx4weqweq56@vwx.br",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Оксана",
        "lastName": "Миронова",
        "sureName": "Геннадьевна",
        "role": "STUDENT",
        "GroupCode": "22ис-2",
        "sex": "FEMALE"
    },
    {
        "email": "edasdaw324@yzb.in",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Денис",
        "lastName": "Горшков",
        "sureName": "Вячеславович",
        "role": "STUDENT",
        "GroupCode": "22ис-2",
        "sex": "MALE"
    },
    {
        "email": "aqbc123321@abc.es",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Тамара",
        "lastName": "Левина",
        "sureName": "Владимировна",
        "role": "STUDENT",
        "GroupCode": "22ис-2",
        "sex": "FEMALE"
    },
    {
        "email": "deqwef456@def.ch",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Владимир",
        "lastName": "Соловьёв",
        "sureName": "Георгиевич",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "MALE"
    },
    {
        "email": "ghiqweqw789@ghi.be",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Юлия",
        "lastName": "Комарова",
        "sureName": "Ростиславовна",
        "role": "STUDENT",
        "GroupCode": "23п-1",
        "sex": "FEMALE"
    },
    {
        "email": "jqwekl213123@jkl.hr",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Александр",
        "lastName": "Колосов",
        "sureName": "Степанович",
        "role": "STUDENT",
        "GroupCode": "22ис-1",
        "sex": "MALE"
    },
    {
        "email": "mno453126@mno.ro",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Екатерина",
        "lastName": "Суханова",
        "sureName": "Геннадьевна",
        "role": "STUDENT",
        "GroupCode": "22ис-1",
        "sex": "FEMALE"
    },
    {
        "email": "pqsaqwedr789@pqr.se",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Евгений",
        "lastName": "Белкин",
        "sureName": "Витальевич",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "MALE"
    },
    {
        "email": "stasdu123@stu.cz",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Людмила",
        "lastName": "Ермолаева",
        "sureName": "Васильевна",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "FEMALE"
    },
    {
        "email": "vwxthjyyt7676@vwx.pt",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Николай",
        "lastName": "Морозов",
        "sureName": "Леонидович",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "MALE"
    },
    {
        "email": "324yzqweqweb789@yzb.fi",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Татьяна",
        "lastName": "Щукина",
        "sureName": "Петровна",
        "role": "STUDENT",
        "GroupCode": "24п-1",
        "sex": "FEMALE"
    }
]

export const supervisors = [
    {
        "email": "yzb789@yzb.fi",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1985-10-26T00:00:00Z",
        "firstName": "Татьяна",
        "lastName": "Щукина",
        "sureName": "Петровна",
        "role": "SUPERVISOR",
        "sex": "FEMALE"
    },
    {
        "email": "abc123@abc.ru",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1990-05-12T00:00:00Z",
        "firstName": "Иван",
        "lastName": "Иванов",
        "sureName": "Иванович",
        "role": "SUPERVISOR",
        "sex": "MALE"
    },
    {
        "email": "def456@def.com",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1995-08-18T00:00:00Z",
        "firstName": "Анна",
        "lastName": "Петрова",
        "sureName": "Сергеевна",
        "role": "SUPERVISOR",
        "sex": "FEMALE"
    },
    {
        "email": "ghi789@ghi.org",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1980-03-05T00:00:00Z",
        "firstName": "Сергей",
        "lastName": "Смирнов",
        "sureName": "Владимирович",
        "role": "SUPERVISOR",
        "sex": "MALE"
    },
    {
        "email": "jkl123@jkl.net",
        "password": hashSync('zxczxc12', PASSWORD_HASH_LENGTH),
        "dateOfBirth": "1975-12-24T00:00:00Z",
        "firstName": "Елена",
        "lastName": "Кузнецова",
        "sureName": "Игоревна",
        "role": "SUPERVISOR",
        "sex": "FEMALE"
    }
]

export const events = [
    { "date": "1985-10-26T00:00:00Z", "name": "Конференция машиностроений", "SupervisorId": 1 },
    { "date": "1985-10-26T00:00:00Z", "name": "Форум молодых ученых", "SupervisorId": 2 },
    { "date": "1986-03-15T00:00:00Z", "name": "Выставка новых технологий", "SupervisorId": 1 },
    { "date": "1987-07-20T00:00:00Z", "name": "Международная конференция химии", "SupervisorId": 3 },
    { "date": "1988-11-05T00:00:00Z", "name": "Научный симпозиум биологии", "SupervisorId": 1 },
    { "date": "1989-02-18T00:00:00Z", "name": "Общероссийская встреча инженеров", "SupervisorId": 4 },
    { "date": "1990-06-03T00:00:00Z", "name": "Экологический конгресс", "SupervisorId": 1 },
    { "date": "1991-09-22T00:00:00Z", "name": "Цифровая выставка инноваций", "SupervisorId": 5 },
    { "date": "1992-01-10T00:00:00Z", "name": "Форум развития энергетики", "SupervisorId": 2 },
    { "date": "1993-04-25T00:00:00Z", "name": "Симпозиум медицинских исследований", "SupervisorId": 2 },
    { "date": "1994-08-12T00:00:00Z", "name": "Исторический семинар", "SupervisorId": 3 },
    { "date": "1995-12-01T00:00:00Z", "name": "Выставка робототехники", "SupervisorId": 3 },
    { "date": "1996-03-19T00:00:00Z", "name": "Форум агропромышленного комплекса", "SupervisorId": 1 },
    { "date": "1997-07-07T00:00:00Z", "name": "Культурный фестиваль науки", "SupervisorId": 1 },
    { "date": "1998-11-28T00:00:00Z", "name": "Международная научная ярмарка", "SupervisorId": 2 },
    { "date": "1999-02-14T00:00:00Z", "name": "Выставка высоких технологий", "SupervisorId": 3 },
    { "date": "2000-06-21T00:00:00Z", "name": "Симпозиум инженерных наук", "SupervisorId": 3 },
    { "date": "2001-09-16T00:00:00Z", "name": "Информационный форум информатики", "SupervisorId": 5 },
    { "date": "2002-01-08T00:00:00Z", "name": "Образовательная конференция", "SupervisorId": 5 },
    { "date": "2003-04-20T00:00:00Z", "name": "Научный конгресс физиков", "SupervisorId": 1 }
]

export const groups = [
    {
        code: '22ис-1',
        DepartmentCode: '09.02.07',
    },
    {
        code: '22ис-2',
        DepartmentCode: '09.02.07',
    },
    {
        code: '23тэп-2',
        DepartmentCode: '12.11.01',
    },
    {
        code: '23ам-4',
        DepartmentCode: '12.11.01',
    },
    {
        code: '23св-1',
        DepartmentCode: '12.11.01',
    },
    {
        code: '24п-1',
        DepartmentCode: '05.01.12',
    },
    {
        code: '23п-1',
        DepartmentCode: '05.01.12',
    },

]

export const departmens = [
    { code: '09.02.07', name: 'Информационные системы' },
    { code: '05.01.12', name: 'Поварское дело' },
    { code: '12.11.01', name: 'Технология машиностроения' },
]
