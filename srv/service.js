const cds = require('@sap/cds');
const { parse } = require("path");

module.exports = async function (params) {
    let {  depart , lectures , student ,teacher} = this.entities;

        this.before('CREATE', depart, async (req) => {
            debugger
            var e_data = await SELECT.from(depart);
            var e_data1 = await SELECT.from(lectures).where `lAge='1'`;
            var e_dataDExits = e_data1[0].lNames;
        
            let nextDepId = 'D001'; // default starting depId
                if (e_dataDExits) {
                    let numericPart = parseInt(e_dataDExits.substr(1)); // extract numeric part
                     nextDepId = 'D' + ('000' + (numericPart + 1)).slice(-3); // increment and format
                }
                req.data.depId = nextDepId;
                let [ lNames ] = [ nextDepId ];    
                await cds.update(lectures).set({lNames:nextDepId}).where({ lUuid : '06cf0ad4-71a0-4e13-92af-c17859235b95'});  
                
                var { depId, depName, noTeachers , depHead} = req.data;

                var missingFields = [];
                if (!depId) missingFields.push('depId');
                if (!depName) missingFields.push('depName');
                if (!depHead) missingFields.push('depHead');
                if (!noTeachers) missingFields.push('noTeachers');
        
                if (missingFields.length > 0) {
                    req.error(400, `The following fields are missing: ${missingFields.join(', ')}`);
                    return; // Stop further processing
                }
                
                if (req.data.depName){
                    req.data.depName = req.data.depName.toUpperCase();
                }
                // Check if the department with the same depName already exists
                var existingDepartment = await SELECT.from(depart).where({ depName: req.data.depName });
                   
                if (existingDepartment.length > 0) {
                    req.error(400, 'Department with the same depName already exists. Please check.');
                    return; // Stop further processing
                }
            
                // Check if the department head (depHead) is already in use
                var existingDepartmentByHead = await SELECT.from(depart).where({ depHead: req.data.depHead });
        
                if (existingDepartmentByHead.length > 0) {
                   req.error(400, 'Department head (depHead) is already present. Please check.');
                   return; // Stop further processing
                }
            
                    // Validate that noTeachers is a non-negative integer
                if (!Number.isInteger(noTeachers) || noTeachers < 0) {
                    req.error(400, 'noTeachers must be a non-negative integer.');
                   return; // Stop further processing
                }
        
        });

        this.before('CREATE',student, async (req) => {
            debugger
            var e_stu = await SELECT.from(student);
            var e_data1 = await SELECT.from(lectures).where `lAge='1'`;
            var e_dataSExits = e_data1[0].lAdress;
            let Stu = 'S001';
            if (e_dataSExits){
                let num_s = parseInt(e_dataSExits.substr(1));
                nextStu = 'S' + ('000' + (num_s + 1)).slice(-3);
            }
            req.data.sId = nextStu;
            let [ lAdress ] = [ nextStu ];
            
            await cds.update(lectures).set({lAdress:nextStu}).where({ lUuid : '06cf0ad4-71a0-4e13-92af-c17859235b95'}); 
        });

        this.before('CREATE',lectures, async (req) => {
        debugger
            var e_stu = await SELECT.from(lectures);
            var e_data1 = await SELECT.from(lectures).where `lAge='1'`;

            var e_dataLExits = e_data1[0].lId;

            var Stu = 'L001';
            if (e_dataLExits){
                let num_s = parseInt(e_dataLExits.substr(1));
                nextLec = 'L' + ('000' + (num_s + 1)).slice(-3);
            }

            req.data.lId = nextLec;
            // let [ lId ] = [ nextLec ];
            await cds.update(lectures).set({lId:nextLec}).where({ lUuid : '06cf0ad4-71a0-4e13-92af-c17859235b95'});

            if (req.data.lNames) {
                req.data.lNames = req.data.lNames.toUpperCase();
            }
            var { lId, lNames, lAge, lPhone, lAdress, lEmail, lSalary } = req.data;

            if (!lId) {
                req.error(400, 'Field "lId" is missing.');
                return; // Stop further processing
            }
        
            if (!lNames) {
                req.error(400, 'Field "lNames" is missing.');
                return; // Stop further processing
            }
        
            if (lAge === undefined || lAge === null) {
                req.error(400, 'Field "lAge" is missing.');
                return; // Stop further processing
            }
        
            if (!lPhone) {
                req.error(400, 'Field "lPhone" is missing.');
                return; // Stop further processing
            }
        
            if (!lAdress) {
                req.error(400, 'Field "lAdress" is missing.');
                return; // Stop further processing
            }
        
            if (!lEmail) {
                req.error(400, 'Field "lEmail" is missing.');
                return; // Stop further processing
            }
        
            if (!lSalary) {
                req.error(400, 'Field "lSalary" is missing.');
                return; // Stop further processing
            }

            var phonePattern = /^\d{10}$/; // Regex to match exactly 10 digits
             if (!phonePattern.test(req.data.lPhone)) {
                 req.error(400, 'Phone number must contain exactly 10 digits.');
                 return; // Stop further processing
                 }
            var email = req.data.lEmail;
             if (!email.endsWith('@gmail.com')) {
                 req.error(400, 'Email must end with "@gmail.com".');
                 return; // Stop further processing
                }

                let salary = req.data.lSalary;
                const salaryPattern = /^\d+$/; // Regex to match only non-negative integers
                if (!salaryPattern.test(salary)) {
                req.error(400, 'Salary must be a valid integer with no letters or special characters.');
                return; // Stop further processing
             }
        });


        
        // await cds.update(student).set({sId:req.data.sId , sName : req.data.sName ,sPhone : req.data.sPhone ,sAge : req.data.sAge ,sAddress : req.data.sAddress}).where({ sId : req.data.sId});
        
        
        this.before('UPDATE',lectures, async (req) => {
            debugger

            var { lId, lNames, lAge, lPhone, lAdress, lEmail, lSalary } = req.data;

            if (!lId) {
                req.error(400, 'Field "lId" is missing.');
                return; // Stop further processing
            }
        
            if (!lNames) {
                req.error(400, 'Field "lNames" is missing.');
                return; // Stop further processing
            }
        
            if (lAge === undefined || lAge === null) {
                req.error(400, 'Field "lAge" is missing.');
                return; // Stop further processing
            }
        
            if (!lPhone) {
                req.error(400, 'Field "lPhone" is missing.');
                return; // Stop further processing
            }
        
            if (!lAdress) {
                req.error(400, 'Field "lAdress" is missing.');
                return; // Stop further processing
            }
        
            if (!lEmail) {
                req.error(400, 'Field "lEmail" is missing.');
                return; // Stop further processing
            }
        
            if (!lSalary) {
                req.error(400, 'Field "lSalary" is missing.');
                return; // Stop further processing
            }
        
            if (!Number.isInteger(lAge) || lAge < 0) {
                req.error(400, 'Field "lAge" must be a non-negative integer.');
                return; // Stop further processing
            }
        
            if (isNaN(lSalary)) {
                req.error(400, 'Field "lSalary" must be a valid number.');
                return; // Stop further processing
            }
            if (req.data.lNames) {
                req.data.lNames = req.data.lNames.toUpperCase();
            }

            var phonePattern = /^\d{10}$/; // Regex to match exactly 10 digits
             if (!phonePattern.test(req.data.lPhone)) {
                 req.error(400, 'Phone number must contain exactly 10 digits.');
                 return; // Stop further processing
                 }
            var email = req.data.lEmail;
             if (!email.endsWith('@gmail.com')) {
                 req.error(400, 'Email must end with "@gmail.com".');
                 return; // Stop further processing
                }

                let salary = req.data.lSalary;
                const salaryPattern = /^\d+$/; // Regex to match only non-negative integers
                if (!salaryPattern.test(salary)) {
                req.error(400, 'Salary must be a valid integer with no letters or special characters.');
                return; // Stop further processing
             }
        });
          
        
    
        

    this.before('UPDATE',depart, async (req) => {
        debugger            
            // Extract fields from the request data 
            if(req.data.depttostu) {
             var len = req.data.depttostu.length;
             if(len >= 1) {
              var {  sAge, sPhone } = req.data.depttostu[len-1];
        
          // Check if required fields are provided
         //     var missingFields = [];
        //     if(!sName) missingFields.push('Student Name ');
        //     if(!sAge) missingFields.push('Student Age ');
        //     if(!sPhone) missingFields.push('Student phone number');
        //     if(!sAddress) missingFields.push('Student Address');

        //     if (missingFields.length > 0){
        //      req.error(400,`Following field is missing: ${missingFields.join(', ')}`);
        //     }
        
                // Validate sPhone
                const phonePattern = /^[0-9]{10}$/; // Regex to match exactly 10 digits
                if (!phonePattern.test(sPhone)) {
                    req.error(400, 'Invalid phone number. It must contain exactly 10 digits and no other characters.');
                return; // Stop further processing
                }
        
                // Validate sAge
                if (!Number.isInteger(parseInt(sAge))) {
                    req.error(400, 'Invalid age. It must be an integer number.');
                    return; // Stop further processing
                }

                var existingStudent = await SELECT.from(student).where({ sId: sId }).where({ depId: { '!=': depId } });

                if (existingStudent.length > 0) {
                    req.error(400, 'Student with this ID already exists in another department.');
                    return; // Stop further processing
                }
        
                // var { st_Id, depId } = req.data.depttotea;
        
                // // Check if a teacher with the same ID already exists in the same department
                // var existingTeacher = await SELECT.from('teacher')
                //     .where({ st_Id, depId });
    
                // if (existingTeacher.length > 0) {
                //     req.error(400, 'Teacher with the same ID already exists in this department.');
                // }
            }
        }
    });     
}
