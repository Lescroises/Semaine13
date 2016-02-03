angular.module('quiz',[])
	.controller('QuizController',['$scope',function($scope) {
		$scope.numquestion = 0;
		$scope.points = 0;
		$scope.usuario = "";
		$scope.visuel = "block";
		$scope.resultat = "none";
		$scope.texte = "";
	
		$scope.questions = [
			{id:"01",
			 question:"Quel est la plus grande plateforme digitale de jeux vidéo ?",
			 reponseA:"GoG",
			 reponseB:"Origin",
			 reponseC:"Steam",
			 reponseD:"Uplay",
			 correct:"reponseC",
			 points:2,
			 image:"../img/background1.jpg",
			},
			{id:"02",
			 question:"Combien d'états sont membre de l'union européenne ?",
			 reponseA:"18",
			 reponseB:"25",
			 reponseC:"28",
			 reponseD:"34",
			 correct:"reponseC",
			 points:2,
			 image:"../img/background2.jpg",
			},
			{id:"03",
			 question:"Qui a peint la Joconde ?",
			 reponseA:"Monet",
			 reponseB:"Léonard de Vinci",
			 reponseC:"Van Gogh",
			 reponseD:"Michel-Ange",
			 correct:"reponseB",
			 points:2,
			 image:"../img/background3.jpg",
			},
			{id:"04",
			 question:"Quel évènement majeur s'est produit le 28 janvier 1986",
			 reponseA:"L'Accident de la navette spatiale Challenger",
			 reponseB:"La catastrophe de Tchernobyl",
			 reponseC:"Le décès de Coluche",
			 reponseD:"La première cohabitation",
			 correct:"reponseA",
			 points:2,
			 image:"../img/Year1986.png",
			},
			{id:"05",
			 question:"Laquelle de ces villes n'est pas en Angleterre",
			 reponseA:"York",
			 reponseB:"Newcastle-Upon-Tyne",
			 reponseC:"Limerick",
			 reponseD:"Carlisle",
			 correct:"reponseC",
			 points:2,
			 image:"../img/PI67481-hr.jpg",
			},
			{id:"06",
			 question:"De quelle couleur est le cheval Blanc d'Henry IV ?",
			 reponseA:"La couleur est blanc",
			 reponseB:"La couleur est grise",
			 reponseC:"La couleur est blanche",
			 reponseD:"La couleur est gris",
			 correct:"reponseC",
			 points:2,
			 image:"http://passionchateau.fr/wp-content/uploads/2015/01/77-5-Fraise-Mauzaisse-Henri-IV.jpg",
			},
			{id:"07",
			 question:"Sur quel personnage fictif se concentre la serie de film 'Vendredi 13' ?",
			 reponseA:"Freddy Krueger",
			 reponseB:"Jason Voorhees",
			 reponseC:"Hannibal Lecter",
			 reponseD:"Jack L'éventreur",
			 correct:"reponseB",
			 points:2,
			 image:"../img/background7.jpg",
			},
			{id:"08",
			 question:"Qui est Colargol ?",
			 reponseA:"Un chat",
			 reponseB:"Une souris",
			 reponseC:"Un oiseau",
			 reponseD:"Un petit ours",
			 correct:"reponseD",
			 points:2,
			 image:"http://upload.wikimedia.org/wikipedia/commons/6/65/Colargol_with_company.JPG",
			},
			{id:"09",
			 question:"Comment appelle-t-on le poignet d'un cheval ?",
			 reponseA:"Le fanon",
			 reponseB:"Le paturon",
			 reponseC:"Le canon",
			 reponseD:"Le sabot",
			 correct:"reponseC",
			 points:2,
			 image:"http://img1.mxstatic.com/wallpapers/13127fb0aeb0b6683e24721323fd7ae8_large.jpeg",
			},
			{id:"10",
			 question:"Qui à joué dans 'Les Grandes Gueules'- le Film ?",
			 reponseA:"Jean POIRET",
			 reponseB:"Bernad BLIER",
			 reponseC:"Jess HAHN",
			 reponseD:"Arletty",
			 correct:"reponseC",
			 points:2,
			 image:"http://www.dvdclassik.com/upload/images/galeries/film-les-grandes-gueules8.jpeg",
			}

		];
		
		$scope.questionnaire = $scope.questions[$scope.numquestion];
		$scope.image = $scope.questions[$scope.numquestion].image;
		
		$scope.valider = function() {
			if ($scope.reponse == $scope.questions[$scope.numquestion].correct)
			{
				$scope.points += $scope.questions[$scope.numquestion].points;
			}
			
			$scope.numquestion += 1;
			
			if ($scope.numquestion >= 10)
			{
				$scope.questionnaire ="";
				$scope.visuel = "none";
				$scope.resultat = "block";
				
				if ($scope.points <=5)
				{
					$scope.texte = "Retente ta chance !";
				}
				else if ($scope.points > 5 && $scope.points <= 10)
				{
					$scope.texte = "C'est presque ça !";
				}
				else if ($scope.points > 10 && $scope.points < 15)
				{
					$scope.texte = "Pas mal, bonne culture G !";
				}
				else if ($scope.points >= 20)
				{
					$scope.texte = "Es-tu Humain ???";
				}
			}
			else {
				$scope.questionnaire = $scope.questions[$scope.numquestion];
				$scope.image = $scope.questions[$scope.numquestion].image;
				
			}
			
			$scope.reponse = "";
		};
	}]);