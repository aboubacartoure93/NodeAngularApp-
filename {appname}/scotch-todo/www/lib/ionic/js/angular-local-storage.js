
<script src="lib/angular-local-storage/dist/angular-local-storage.js"></script>


$scope.getTasks = function () {
          //fetches task from local storage
          if (localStorageService.get(taskData)) {
              $scope.tasks = localStorageService.get(taskData);
          } else {
              $scope.tasks = [];
          }
   }

$scope.createTask = function () {
          //creates a new task
          $scope.tasks.push($scope.task);
          localStorageService.set(taskData, $scope.tasks);
          $scope.task = {};
          //close new task modal
          $scope.newTaskModal.hide();
   }

$scope.removeTask = function (index) {
          //removes a task
          $scope.tasks.splice(index, 1);
          localStorageService.set(taskData, $scope.tasks);
     }

$scope.completeTask = function (index) { 
 //updates a task as completed 
 if (index !== -1) {
  $scope.tasks[index].completed = true; 
 } 

  localStorageService.set(taskData, $scope.tasks); 
}