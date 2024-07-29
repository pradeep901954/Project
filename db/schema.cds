
namespace db;

entity Department{
    key dUuid : UUID; 
    depId : String default'';
    aId : String;
    depHead : String;
    depName : String;
    noTeachers : Int16;
    depttotea : Composition of  many teacher on depttotea.teatodept = $self;
    depttostu : Composition of many student on depttostu.stutodept = $self;
    depttopri : Association to one Admin on depttopri.aId = aId;
}

entity teacher {
    key tUuid : UUID;
    key st_Id : String default '' ;
    lId : String default'';
    depId : String;
    tNames : String;
    tAge :  Int16;
    tPhone : String;
    tAdress : String;
    tSalary : String;
    tEmail : String;
    teatodept : Association to many Department on teatodept.depId = depId;  
}

entity lectures {
    key lUuid : UUID;
    lId  : String;
    lNames : String;
    lAge :  Int16;
    lPhone : String;
    lAdress : String; 
    lEmail : String;  
    lSalary : String;

}

entity student{
    key sUuid : UUID;
    sId : String default'';
    depId : String;
    sName : String;
    sAge : String;
    sAddress : String;
    sPhone : String;
    stutodept :  Association to one Department on stutodept.depId =depId;
}

entity Admin{
    key pUuid : UUID;
    aId : String;
    aName : String;
    aAge : String;
    aPhone : String;
    aEmail: String;
    aritodep : Composition of one Department on aritodep.depttopri = $self;
}
