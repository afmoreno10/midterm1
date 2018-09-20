# Mid-term Exam 1 - 2018-2

This is the project made to be used in the creation and development of the first mid-term exam of the course.


## Intallation

### Running the back-end:
The back-end of the project is supposed to be running at port 3001. It is already set up in the ./bin/www file.

To start the back, open the project and execute the following command lines:
`yarn add`
`yarn start`

### Running the front-extended
The front-end is expected to be running at port 3000 as it is the default port used by React.

To start the front, go to ./front and execute the following command lines:
`yarn add`
`yarn start`

### Preparing the data:

`cd/data
mongoimport -d <name of the database (you create this name)> -c <name of the collection (you create this name)> --jsonArray (--type csv) --file <name of the existing file to extract the data> --headerline`
