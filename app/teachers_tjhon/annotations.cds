using MyService as service from '../../srv/service';
annotate service.lectures with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'lId',
                Value : lId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lNames',
                Value : lNames,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lAge',
                Value : lAge,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lPhone',
                Value : lPhone,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lAdress',
                Value : lAdress,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lEmail',
                Value : lEmail,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lSalary',
                Value : lSalary,
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
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'lId',
            Value : lId,
        },
        {
            $Type : 'UI.DataField',
            Label : 'lNames',
            Value : lNames,
        },
        {
            $Type : 'UI.DataField',
            Label : 'lAge',
            Value : lAge,
        },
        {
            $Type : 'UI.DataField',
            Label : 'lPhone',
            Value : lPhone,
        },
        {
            $Type : 'UI.DataField',
            Label : 'lAdress',
            Value : lAdress,
        },
    ],
);

annotate service.lectures with {
    lId @Common.FieldControl : #ReadOnly
};
