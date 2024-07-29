using db from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity depart as projection on db.Department;
    entity teacher as projection on db.teacher;
    entity student as projection on db.student;
    @odata.draft.enabled
     entity lectures as projection on db.lectures;
     entity Admin as projection on db.Admin;
}
