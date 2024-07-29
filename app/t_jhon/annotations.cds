using MyService as service from '../../srv/service';
annotate service.depart with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'depId',
                Value : depId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'depHead',
                Value : depHead,
            },
            {
                $Type : 'UI.DataField',
                Label : 'depName',
                Value : depName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'noTeachers',
                Value : noTeachers,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Student',
            ID : 'Student',
            Target : 'depttostu/@UI.LineItem#Student',
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Teacher',
            ID : 'Teacher',
            Target : 'depttotea/@UI.LineItem#Teacher',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'depId',
            Value : depId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'depHead',
            Value : depHead,
        },
        {
            $Type : 'UI.DataField',
            Label : 'depName',
            Value : depName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'noTeachers',
            Value : noTeachers,
        },
    ],
);

annotate service.teacher with @(
    UI.LineItem #Teacher : [
        {
            $Type : 'UI.DataField',
            Value : st_Id,
            Label : 'st_Id',
        },
        {
            $Type : 'UI.DataField',
            Value : tNames,
            Label : 'tNames',
        },{
            $Type : 'UI.DataField',
            Value : tAdress,
            Label : 'tAdress',
        },{
            $Type : 'UI.DataField',
            Value : tAge,
            Label : 'tAge',
        },{
            $Type : 'UI.DataField',
            Value : tEmail,
            Label : 'tEmail',
        },{
            $Type : 'UI.DataField',
            Value : tPhone,
            Label : 'tPhone',
        },{
            $Type : 'UI.DataField',
            Value : tSalary,
            Label : 'tSalary',
        },]
);
annotate service.student with @(
    UI.LineItem #Student : [
        {
            $Type : 'UI.DataField',
            Value : sId,
            Label : 'sId',
        },{
            $Type : 'UI.DataField',
            Value : sAddress,
            Label : 'sAddress',
        },{
            $Type : 'UI.DataField',
            Value : sAge,
            Label : 'sAge',
        },{
            $Type : 'UI.DataField',
            Value : sName,
            Label : 'sName',
        },{
            $Type : 'UI.DataField',
            Value : sPhone,
            Label : 'sPhone',
        },]
);
annotate service.teacher with {
    st_Id @Common.FieldControl : #ReadOnly
};
annotate service.depart with {
    depId @Common.FieldControl : #ReadOnly
};
annotate service.lectures with {
    lNames @Common.Text : lId
};
annotate service.teacher with {
    tNames @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'lectures',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : tNames,
                    ValueListProperty : 'lNames',
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lId',
                    LocalDataProperty : st_Id,
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lAge',
                    LocalDataProperty : tAge,
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lPhone',
                    LocalDataProperty : tPhone,
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lAdress',
                    LocalDataProperty : tAdress,
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lEmail',
                    LocalDataProperty : tEmail,
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'lSalary',
                    LocalDataProperty : tSalary,
                },
            ],
            Label : 'leacture  ',
        },
        Common.ValueListWithFixedValues : true
)};
