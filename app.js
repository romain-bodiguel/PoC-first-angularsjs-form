const app = angular.module('myApp', []);

app.controller('Ctrl', function($scope) {
    $scope.email = "";
    $scope.nom = "";
    $scope.prenom = "";
    $scope.ages = function() {
        let age = 0;
        let ageArray = [];
        for (let i = 0; i < 100; i++) {
            age = age + 1;
            ageArray.push(age);
        }
        return ageArray;
    };
    $scope.jobs = [
        {
            'job' : 'Charpentier',
            'domains' : [
                'bois',
                'metal',
                'cuivre',
                'plastique'
            ]
        },
        {
            'job' : 'Coiffeur',
            'domains' : [
                'cheveux',
                'barbe',
                'poils',
            ]
        },
        {
            'job' : 'Ebeniste',
            'domains' : [
                'chene',
                'saule',
                'pin',
                'résineux'
            ]
        },
        {
            'job' : 'Zoologiste',
            'domains' : [
                'chiens',
                'chevaux',
                'félins',
            ]
        },
        {
            'job' : 'Mécanicien',
            'domains' : [
                'voiture',
                'moto',
                'camion',
                'avion',
                'vélo'
            ]
        },
        {
            'job' : 'Développeur',
            'domains' : [
                'web',
                'mobile',
                'front',
                'back'
            ]
        }
    ];
    $scope.selectedAge = "";
    $scope.selectedJob = "";
    $scope.selectedDomain = "";
    $scope.selectedAgePlural = function() {
        if ($scope.selectedAge !== '' && $scope.selectedAge > 1) {
            return "ans";
        } else {
            return "an";
        }
    };
});