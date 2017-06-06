angular.module('doIt-app').service('People', People);

function People() {

    this.people = [
        {
            name: 'Mimi',
            picture: 'https://www.w3schools.com/css/img_fjords.jpg',
            ipPhone: 234,
            technology: 'Android',
            position: 'Front end',
            email: 'mimi@mimi.com',
            skype: 'mimi',
            startDate: new Date(),
            birthDate: new Date()
        }, {
            name: 'Lili',
            picture: 'https://www.w3schools.com/css/img_fjords.jpg',
            technology: 'Front-end',
            position: 'Java',
            email: 'lili@mimi.com',
            skype: 'lili',
            startDate: new Date(),
            birthDate: new Date()
        }, {
            name: 'Baba name',
            picture: 'https://drive.google.com/file/d/0B5xO_KpuDzmEREVLemZIVlhrNlU/view',
            ipPhone: 543,
            technology: 'Front-end Mimi',
            position: 'Android',
            email: 'baba@baba.com',
            skype: 'baba',
            startDate: new Date(),
            birthDate: new Date()
        }
    ];

    this.getPeople = function() {
        return this.people;
    };
}