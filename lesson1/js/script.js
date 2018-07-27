function myFirstApp(name,age) {

    alert("Привет, меня зовут " + name + "  и это моя первая программа!");

    function showSkills() {
        let skills = ['Html','CSS','a bit PHP','SQL'];

        for (let i = 0; i < skills.length; i++){
            document.write("Я владею " + skills[i] + "<br>");
        }
    }
    showSkills();

    function checkAge() {
        if (age > 19) {
            alert("Ну, не расстраивайся, ты еще не очень стар для программирования!")
        } else {
            alert("Ты еще совсем молодой, флаг тебе в руки и удачи!")
        }
    }
    checkAge();

    function calcPow(num) {
       let answer = num * num;
       document.write("Квадрат числа равен " + answer);
    }

    calcPow(4);

}
myFirstApp("Valentine", 25);