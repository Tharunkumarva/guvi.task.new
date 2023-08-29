let resume ={
    'Name': 'Tharun',
    'Age' : 22,
    'Email':'tharunkumarva@gmail.com',
    'contact': 7305751375,

    'personal details' : {
         'Father name' : 'Annamalai',
         'Mother name': 'selvi',
         'Emergency contact': 8090663971 
   },
     'study' : {
        'High school' :'saai sri school with grade 9.5 out of 10',
        'Higher school':'sri ayyan with grage 7.9 out of 10',
        'B.E':'Thanthai periyar government college vellore with grade 7.5 out of 10'
         },
         'project':{
            'Mini Project' :'Automated puzzle car parking using steel',
            'Main project' : 'Corrosion resistance in concrete structure'

         }
        };

    let stringify = JSON.stringify(resume);
    console.log(JSON.parse(stringify));
